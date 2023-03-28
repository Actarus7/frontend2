import { useEffect, useState } from "react";
import { TArticle } from "../../types/TArticle.type";
import { TComment } from "../../types/TComment.type";
import { TUser } from "../../types/TUser.type";
import CommentsArticle from "./comments-articles";

export function Partage(
    props: {
        partageId: number,
        token: string,
        user: TUser | undefined,
        setPage: React.Dispatch<React.SetStateAction<string>>,
        handleResetRedirections: () => void
    }) {

    const [partage, setPartage] = useState<TArticle>();
    const [comments, setComments] = useState<TComment[]>([]);
    const { partageId, token, user, setPage, handleResetRedirections } = props;


    // Récupération de tous les Commentaires liés à l'Article sélectionné
    useEffect(() => {
        const url = `http://localhost:3000/api/articles/${partageId}`;

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
                setPartage(response)
                setComments(response.comments)

            })
            .catch(err => console.error(err));
    }, [partageId, token]);


    // Affichage du Composant
    return (
        <>
            {partage?.title ? (
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

                        <h2 className="text-center" style={{ color: "white" }}>{partage.title}</h2>
                        <div className="col-auto"></div>
                    </div>

                    <div className="text-center border py-4">
                        <pre className="article_body">{partage.body}</pre>
                    </div>

                    {comments ? (
                        <CommentsArticle
                            setComments={setComments}
                            articleId={partage.id}
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