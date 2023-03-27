import { useEffect, useState } from "react";
import { TArticle } from "../../types/TArticle.type";
import { TComment } from "../../types/TComment.type";
import { TUser } from "../../types/TUser.type";
import CommentsArticle from "./comments-articles";

export function Partage(props: { partageId: number, token: string, user: TUser | undefined }) {
    const [partage, setPartage] = useState<TArticle>();
    const [comments, setComments] = useState<TComment[]>([]);
    const { partageId, token, user } = props;


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


    // Affichage
    return (
        <>
            {
                partage?.title ? (
                    <div className="container-fluid bg-white">
                        <>
                            <h1>{partage.title}</h1>

                            <pre className="pt-4 article_body">{partage.body}</pre>

                            {partage.createdAt}
                            {
                                comments ? <CommentsArticle setComments={setComments} articleId={partage.id} comments={comments} user={user} token={token}></CommentsArticle> : ''
                            }

                        </>
                    </div>
                ) : ''}
        </>
    );
};