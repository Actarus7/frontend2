import { useRef, useState } from "react";
import { TComment } from "../../types/TComment.type";
import Articles from "./articles";



export default function CommentsArticle(props: any) {
    const [editingCommentId, setEditingCommentId] = useState<number | null>(null);
    const [newCommentText, setNewCommentText] = useState<string>("");
    const [redirectToArticles, setRedirectToArticles] = useState(false)


    const messageRef = useRef<HTMLTextAreaElement>(null);


    const handleAddComment = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        if (messageRef.current?.value) {

            const body = JSON.stringify({
                articleId: props.defiId | props.recetteId | props.partageId,
                message: messageRef.current.value,
            });

            const options = {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    Authorization: `Bearer ${props.token}`
                },
                body: body,
            };

            fetch(`http://localhost:3000/api/comments/`, options)
                .then(response => response.json())
                .then(response => {
                    const newComment: TComment = response;
                    props.setComments(props.comments.concat(newComment));
                    messageRef.current!.value = ''; // Effacer le contenu de la textarea après l'ajout du commentaire
                })
                .catch(err => console.error(err));
        };
    };



    const handleEditComment = (commentId: number, text: string) => {
        handleUpdateComment(commentId, text);
        setEditingCommentId(null);
        setNewCommentText("");
    };



    const handleUpdateComment = (commentId: number, text: string) => {

        const body = JSON.stringify({
            articleId: props.defiId,
            message: text,
        });

        const options = {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${props.token}`
            },
            body: body,
        };

        fetch(`http://localhost:3000/api/comments/${commentId}`, options)
            .then(response => response.json())
            .then(response => {
                // console.log(response);

                const updatedComment = response;
                const updatedComments = props.comments.map((comment: TComment) => {
                    if (comment.id === commentId) {
                        return updatedComment;
                    };
                    return comment;
                });
                props.setComments(updatedComments)

            })
            .catch(err => console.error(err));
    };



    const handleDeleteComment = (commentId: number) => {
        const options = {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${props.token}`
            },
        };
        fetch(`http://localhost:3000/api/comments/${commentId}`, options)
            .then(response => response.json())
            .then(response => {
                props.setComments(props.comments.filter((comment: TComment) => comment.id !== commentId))
            })
            .catch(err => console.error(err));
    };


    // Redirection vers le Component Articles (Communauté) si clique sur le bouton "Retour"
    if (redirectToArticles) return <Articles token={props.token} user={props.userLogged}></Articles>

    // Affichage
    return (
        <>
            <div>

                <form className="row g-3" onSubmit={handleAddComment}>

                    <div className="col-auto">
                        <textarea
                            className="form-control"
                            id="exampleFormControlTextarea1"
                            ref={messageRef}
                            required>
                        </textarea>
                    </div>

                    <div className="col-auto">
                        <button
                            type="submit"
                            className="btn btn-primary mb-3">
                            Ajouter
                        </button>
                    </div>

                    <div className="col-auto">
                        <button
                            type="button"
                            className="btn btn-secondary mb-3" onClick={() => { setRedirectToArticles(true) }}>
                            Retour
                        </button>
                    </div>



                </form>

                {(props.comments.map((comment: TComment) =>

                    <div key={comment.id}>

                        <div>
                            {comment.user.pseudo}: {editingCommentId === comment.id ? (
                                <textarea
                                    defaultValue={comment.message}
                                    onChange={(e) => setNewCommentText(e.target.value)}
                                    required>
                                </textarea>)

                                : (comment.message)
                            }
                        </div>

                        {editingCommentId === comment.id ?
                            (<button onClick={() => handleEditComment(comment.id, newCommentText)}>
                                Valider
                            </button>)

                            : (props.user.id === comment.user.id && (
                                <button className="btn btn-success" onClick={() => {
                                    setEditingCommentId(comment.id);
                                    setNewCommentText(comment.message);
                                }}>
                                    Modifier
                                </button>))
                        }


                        <div><>
                            {props.user.admin || props.user.id === comment.user.id ?
                                <div>
                                    <button
                                        type="button"
                                        className="btn btn-danger"
                                        onClick={() => { handleDeleteComment(comment.id) }}>
                                        Supprimer
                                    </button>
                                </div>
                                : ''
                            }
                        </></div>

                    </div>
                ))}

            </div>
        </>
    );

};