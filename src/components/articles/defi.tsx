import { /* useContext, */ useEffect, useState } from "react";
// import { CommentsContext } from "../../contexts/CommentsContext";
import { TArticle } from "../../types/TArticle.type";
import { TComment } from "../../types/TComment.type";
import CommentsArticle from "./comments-articles";

export function Defi(props: any) {
    const [defi, setDefi] = useState<TArticle>();
    // const {comments, setComments} = useContext(CommentsContext);
    const [comments, setComments] = useState<TComment[]>([]);
    console.log(comments);
    

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
                                comments ? <CommentsArticle setComments={setComments} defiId={defi.id} comments={comments} user={props.user} token={props.token}></CommentsArticle> : ''
                            }

                        </>
                    </div>
                ) : ''}</>
    );
};