import { /* useContext, */ useRef, useState } from "react";
// import { CommentsContext } from "../../contexts/CommentsContext";
import { TComment } from "../../types/TComment.type";
import ModalUpdateComment from "./modal-update-comment";



export default function CommentsArticle(props: any) {
    // const {comments, setComments} = useContext(CommentsContext);
    const [commentId, setCommentId] = useState(0)

    const messageRef = useRef<HTMLTextAreaElement>(null);

    const handleAddComment = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        if (messageRef.current?.value) {

            const body = JSON.stringify({
                articleId: props.defiId,
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

    if (commentId !== 0) {
        return <ModalUpdateComment commentId={commentId} token={props.token} comments={props.comments} setComments={props.setComments} />
    }
    
    // Affichage
    return (
        <>
            <div>

                <form className="row g-3" onSubmit={handleAddComment}>

                    <div className="col-auto">
                        {/* <label htmlFor="inputMessage">Message</label> */}
                        <textarea
                            className="form-control"
                            id="exampleFormControlTextarea1"
                            ref={messageRef}
                            required></textarea>
                    </div>

                    <div className="col-auto">
                        <button
                            type="submit"
                            className="btn btn-secondary mb-3">
                            Ajouter
                        </button>{/* Afficher le bouton ajouter un Comment */}
                    </div>

                </form>

                {
                    (props.comments.map((comment: TComment) =>
                        <p key={comment.id}>
                            <div>{comment.message}</div>
                            <div>{comment.user.pseudo}</div>
                            <div><>{comment.createdAt}</></div>



                            <div><>
                                {
                                    props.user.id === comment.user.id ?
                                        <button type="button" className="btn btn-success" data-bs-toggle="modal" data-bs-target="#exampleModal" onClick={() => setCommentId(comment.id)}>
                                            Modifier
                                        </button>


                                        //  /* Afficher le bouton modifier si auteur du Comment */
                                        : ''
                                }
                            </></div>

                            <div><>
                                {
                                    props.user.admin || props.user.id === comment.user.id ?
                                        <div>
                                            <button type="button" className="btn btn-danger" onClick={() => { handleDeleteComment(comment.id) }}>Supprimer</button>// Afficher le bouton supprimer si Admin ou auteur du Comment
                                            {}
                                        </div>
                                        : ''
                                }
                            </></div>

                        </p>
                    ))}

            </div>
        </>
    );

}