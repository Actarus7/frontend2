import { useEffect, useState } from "react";
import { TArticle } from "../../types/TArticle.type";
import { TComment } from "../../types/TComment.type";
import { TUser } from "../../types/TUser.type";
import CommentsArticle from "./comments-articles";

export function Defi(props: { defiId: number, token: string, user: TUser | undefined }) {
    const [defi, setDefi] = useState<TArticle>();
    const [comments, setComments] = useState<TComment[]>([]);
    const { defiId, token, user } = props;

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


    return (
        <>
            {
                defi?.title ? (
                    <div className="container-fluid">
                        <>
                            <h1>{defi.title}</h1>
                            {defi.createdAt}
                            <div>{defi.body}</div>
                            {
                                comments ? <CommentsArticle setComments={setComments} articleId={defi.id} comments={comments} user={user} token={token}></CommentsArticle> : ''
                            }

                        </>
                    </div>
                ) : ''}</>
    );
};