import { useEffect, useState } from "react";
import { TArticle } from "../../types/TArticle.type";
import { TComment } from "../../types/TComment.type";
import CommentsArticles from "./comments-articles";

export function Defis(props: any) {
    const [defi, setDefi] = useState<TArticle>();
    const [comments, setComments] = useState<TComment[]>([]);

    useEffect(() => {
        const url = `http://localhost:3000/api/articles/${props.defiId}`;

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
                setDefi(response)
                setComments(response.comments)
            })
            .catch(err => console.error(err));
    }, []);


    return (
        <>
            {
                defi?.title ? (
                    <div className="container-fluid">
                        <>
                            <h1>{defi.title}</h1>
                            {defi.createdAt}
                            <p>{defi.body}</p>
                            {
                                comments ? <CommentsArticles comments={comments} user={props.user} token={props.token}></CommentsArticles> : ''
                            }

                        </>
                    </div>
                ) : ''}</>
    );
};