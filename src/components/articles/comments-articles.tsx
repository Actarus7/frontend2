import { TComment } from "../../types/TComment.type";



export default function CommentsArticles(props: any) {


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
            .then(response => console.log(response.data))
            .catch(err => console.error(err));
    };


    // Affichage
    return (
        <>
            <div>
                {
                    (props.comments.map((comment: TComment) =>
                        <p key={comment.id}>
                            <div>{comment.message}</div>
                            <div>{comment.user.pseudo}</div>
                            <div><>{comment.createdAt}</></div>

                            <div><>
                                {
                                    props.user.id === comment.user.id ?
                                        <button type="button" className="btn btn-success">Modifier</button>// Afficher le bouton modifier si auteur du Comment
                                        : ''
                                }

                            </></div>
                            <div><>
                                {
                                    props.user.admin || props.user.id === comment.user.id ?
                                        <button type="button" className="btn btn-danger" onClick={() => { handleDeleteComment(comment.id) }}>Supprimer</button>// Afficher le bouton supprimer si Admin ou auteur du Comment
                                        : ''
                                }
                            </></div>

                        </p>
                    ))}

            </div>
        </>
    );

}