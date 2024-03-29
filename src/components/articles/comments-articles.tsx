import { useRef, useState } from "react";
import { TComment } from "../../types/TComment.type";
import { TUser } from "../../types/TUser.type";



export default function CommentsArticle(
    props: {
        setComments: React.Dispatch<React.SetStateAction<TComment[]>>,
        articleId: number,
        comments: TComment[],
        user: TUser | undefined,
        token: string,
    }) {

    const [editingCommentId, setEditingCommentId] = useState<number | null>(null);
    const [newCommentText, setNewCommentText] = useState<string>("");
    const { setComments, articleId, comments, user, token } = props;

    const messageRef = useRef<HTMLTextAreaElement>(null);


    // Ajout d'un commentaire
    const handleAddComment = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        if (messageRef.current?.value) {

            const body = JSON.stringify({
                articleId: articleId,
                message: messageRef.current.value,
            });

            const options = {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    Authorization: `Bearer ${token}`
                },
                body: body,
            };

            fetch(`http://localhost:3000/api/comments/`, options)
                .then(response => response.json())
                .then(response => {
                    const newComment: TComment = response;
                    setComments(comments.concat(newComment));
                    messageRef.current!.value = ''; // Effacer le contenu de la textarea après l'ajout du commentaire
                })
                .catch(err => console.error(err));
        };
    };



    // Fait apparaître les inputs pour modifier un commentaire
    const handleEditComment = (commentId: number, text: string) => {
        handleUpdateComment(commentId, text);
        setEditingCommentId(null);
        setNewCommentText("");
    };


    // Modification d'un commentaire
    const handleUpdateComment = (commentId: number, text: string) => {

        const body = JSON.stringify({
            articleId: articleId,
            message: text,
        });

        const options = {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${token}`
            },
            body: body,
        };

        fetch(`http://localhost:3000/api/comments/${commentId}`, options)
            .then(response => response.json())
            .then(response => {

                const updatedComment = response;
                const updatedComments = comments.map((comment: TComment) => {
                    if (comment.id === commentId) {
                        return updatedComment;
                    };
                    return comment;
                });
                setComments(updatedComments)

            })
            .catch(err => console.error(err));
    };



    // Suppression d'un commentaire
    const handleDeleteComment = (commentId: number) => {
        const options = {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${token}`
            },
        };
        fetch(`http://localhost:3000/api/comments/${commentId}`, options)
            .then(response => response.json())
            .then(response => {
                setComments(comments.filter((comment: TComment) => comment.id !== commentId))
            })
            .catch(err => console.error(err));
    };



    // Affichage du Composant
    return (
        <>
            <div>
                {/* FORMULAIRE D'AJOUT D'UN COMMENTAIRE */}
                <form className="row g-3 m-3" onSubmit={handleAddComment}>
                    <div className="col-6 d-flex">
                        <textarea
                            className="form-control p-3"
                            id="exampleFormControlTextarea1"
                            ref={messageRef}
                            placeholder="Ajouter un commentaire"
                            style={{ width: "100%" }}
                            required
                        ></textarea>
                    </div>
                    <div className="col-auto">
                        <button type="submit" className="btn btn-primary mb-3">
                            Ajouter
                        </button>
                    </div>
                </form>



                {/* TABLEAU DES COMMENTAIRES */}
                <table className="table table-dark table-striped table-hover">

                    <thead>
                        <tr>
                            <th scope="col">#</th>
                            <th scope="col">Pseudo</th>
                            <th scope="col">Commentaire</th>
                            <th scope="col">Action</th>
                        </tr>
                    </thead>

                    <tbody className="table-group-divider">
                        {comments.map((comment, index) => (
                            <tr key={comment.id}>
                                <th scope="row">{index + 1}</th>
                                <td>{comment.user.pseudo}</td>
                                <td>
                                    {editingCommentId === comment.id ? (
                                        <textarea
                                            defaultValue={comment.message}
                                            onChange={(e) => setNewCommentText(e.target.value)}
                                            required
                                        />
                                    ) : (
                                        comment.message
                                    )}
                                </td>
                                <td>
                                    {editingCommentId === comment.id ? (
                                        <button onClick={() => handleEditComment(comment.id, newCommentText)}>
                                            Valider
                                        </button>
                                    ) : (
                                        <>
                                            {user?.id === comment.user.id && (
                                                <button className="btn btn-success" onClick={() => {
                                                    setEditingCommentId(comment.id);
                                                    setNewCommentText(comment.message);
                                                }}>
                                                    Modifier
                                                </button>
                                            )}
                                            {user?.admin || user?.id === comment.user.id ? (
                                                <button
                                                    type="button"
                                                    className="btn btn-danger"
                                                    onClick={() => {
                                                        handleDeleteComment(comment.id);
                                                    }}
                                                >
                                                    Supprimer
                                                </button>
                                            ) : null}
                                        </>
                                    )}
                                </td>
                            </tr>
                        ))}
                    </tbody>

                </table>

            </div>
        </>
    );

};




// // <table className="table table-striped table-hover">
// <thead>
// <tr>
//     <th scope="col">#</th>
//     <th scope="col">Pseudo</th>
//     <th scope="col">Commentaire</th>
// </tr>
// </thead>

// {(comments.map((comment: TComment) =>

// <div key={comment.id}>

//     <div>
//         {comment.user.pseudo}: {editingCommentId === comment.id ? (
//             <textarea
//                 defaultValue={comment.message}
//                 onChange={(e) => setNewCommentText(e.target.value)}
//                 required>
//             </textarea>)

//             : (comment.message)
//         }
//     </div>

//     {editingCommentId === comment.id ?
//         (<button onClick={() => handleEditComment(comment.id, newCommentText)}>
//             Valider
//         </button>)

//         : (user?.id === comment.user.id && (
//             <button className="btn btn-success" onClick={() => {
//                 setEditingCommentId(comment.id);
//                 setNewCommentText(comment.message);
//             }}>
//                 Modifier
//             </button>))
//     }


//     <div><>
//         {user?.admin || user?.id === comment.user.id ?
//             <div>
//                 <button
//                     type="button"
//                     className="btn btn-danger"
//                     onClick={() => { handleDeleteComment(comment.id) }}>
//                     Supprimer
//                 </button>
//             </div>
//             : ''
//         }
//     </></div>

// </div>
// ))}
// </table>