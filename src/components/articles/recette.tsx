import { useEffect, useState } from "react";
import { TArticle } from "../../types/TArticle.type";
import { TComment } from "../../types/TComment.type";
import CommentsArticle from "./comments-articles";

export function Recette(props: any) {
    const [recette, setRecette] = useState<TArticle>();
    const [comments, setComments] = useState<TComment[]>([]);
    // console.log(comments);


    useEffect(() => {
        const url = `http://localhost:3000/api/articles/${props.recetteId}`;

        const options = {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${props.token}`
            },
        };

        fetch(url, options)
            .then(response => response.json())
            .then(response => {
                setRecette(response)
                setComments(response.comments)

            })
            .catch(err => console.error(err));
    });


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
                                comments ? <CommentsArticle setComments={setComments} recetteId={recette.id} comments={comments} user={props.user} token={props.token}></CommentsArticle> : ''
                            }

                        </>
                    </div>
                ) : ''}</>
    );
};