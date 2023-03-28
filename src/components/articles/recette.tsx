import { useEffect, useState } from "react";
import { TArticle } from "../../types/TArticle.type";
import { TComment } from "../../types/TComment.type";
import { TUser } from "../../types/TUser.type";
import CommentsArticle from "./comments-articles";

export function Recette(
    props: {
        recetteId: number,
        token: string,
        user: TUser | undefined,
        setPage: React.Dispatch<React.SetStateAction<string>>,
        handleResetRedirections: () => void
    }) {

    const [recette, setRecette] = useState<TArticle>();
    const [comments, setComments] = useState<TComment[]>([]);
    const { recetteId, token, user, setPage, handleResetRedirections } = props;


    useEffect(() => {
        const url = `http://localhost:3000/api/articles/${recetteId}`;

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
                setRecette(response)
                setComments(response.comments)

            })
            .catch(err => console.error(err));
    }, [recetteId, token]);


    return (
        <>
            {
                recette?.title ? (
                    <div className="container-fluid">
                        <>
                            <h1>{recette.title}</h1>
                            {recette.createdAt}
                            <div>{recette.body}</div>
                            {
                                comments ?
                                    <CommentsArticle
                                        setPage={setPage}
                                        setComments={setComments}
                                        handleResetRedirections={handleResetRedirections}
                                        articleId={recette.id}
                                        comments={comments}
                                        user={user}
                                        token={token}></CommentsArticle> : ''
                                    
                            }

                        </>
                    </div>
                ) : ''}</>
    );
};