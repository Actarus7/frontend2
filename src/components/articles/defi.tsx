import { useEffect, useState } from "react";
import { TArticle } from "../../types/TArticle.type";
import { TComment } from "../../types/TComment.type";
import { TUser } from "../../types/TUser.type";
import CommentsArticle from "./comments-articles";

export function Defi(
    props: {
        defiId: number,
        token: string,
        user: TUser | undefined,
        setPage: React.Dispatch<React.SetStateAction<string>>,
        handleResetRedirections: () => void
    }) {

    const [defi, setDefi] = useState<TArticle>();
    const [comments, setComments] = useState<TComment[]>([]);
    const { defiId, token, user, setPage, handleResetRedirections } = props;

    useEffect(() => {
        const url = `http://localhost:3000/api/articles/${defiId}`;

        const options = {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${token}`
            },
        };

        fetch(url, options)
            .then(response => response.json())
            .then(response => {
                setDefi(response)
                setComments(response.comments)

            })
            .catch(err => console.error(err));
    }, [defiId, token]);

    // Affichage du Composant
    return (
        <>
            {defi?.title ? (
                // BOUTON RETOUR ET TITRE H2
                <div className="container-fluid bg-white">

                    <div className="d-flex justify-content-between align-items-center bg-black">
                        <div className="col-auto">
                            <button
                                type="button"
                                className="btn btn-secondary"
                                onClick={() => {
                                    setPage("articles");
                                    handleResetRedirections();
                                }}
                            >
                                Retour
                            </button>
                        </div>

                        <h2 className="text-center" style={{ color: "white" }}>{defi.title}</h2>
                        <div className="col-auto"></div>
                    </div>

                    <div className="text-center border py-4">
                        <pre className="article_body">{defi.body}</pre>
                    </div>

                    {comments ? (
                        <CommentsArticle
                            setComments={setComments}
                            articleId={defi.id}
                            comments={comments}
                            user={user}
                            token={token}
                        />
                    ) : null}
                </div>
            ) : null}
        </>
    );
};