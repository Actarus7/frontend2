import { useEffect, useState } from "react";
import { TArticle } from "../../types/TArticle.type";
import { TComment } from "../../types/TComment.type";
import CommentsArticle from "./comments-articles";

export function Partage(props: any) {
    const [partage, setPartage] = useState<TArticle>();
    const [comments, setComments] = useState<TComment[]>([]);
    // console.log(comments);


    useEffect(() => {
        const url = `http://localhost:3000/api/articles/${props.partageId}`;

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
                setPartage(response)
                setComments(response.comments)

            })
            .catch(err => console.error(err));
    });


    return (
        <>
            {
                partage?.title ? (
                    <div className="container-fluid">
                        <>
                            <h1>{partage.title}</h1>
                            {partage.createdAt}
                            <div>{partage.body}</div>
                            {
                                comments ? <CommentsArticle setComments={setComments} recetteId={partage.id} comments={comments} user={props.user} token={props.token}></CommentsArticle> : ''
                            }

                        </>
                    </div>
                ) : ''}</>
    );
};