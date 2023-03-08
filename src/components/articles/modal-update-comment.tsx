import { useRef } from "react"
import { TComment } from "../../types/TComment.type";


export default function ModalUpdateComment(props: any) {
    console.log(props.commentId);
    

    const messageUpdateRef = useRef<HTMLTextAreaElement>(null);

    const handleUpdateComment = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        if (messageUpdateRef.current?.value) {

            const body = JSON.stringify({
                articleId: props.defiId,
                message: messageUpdateRef.current.value,
            });

            const options = {
                method: 'PATCH',
                headers: {
                    'Content-Type': 'application/json',
                    Authorization: `Bearer ${props.token}`
                },
                body: body,
            };

            fetch(`http://localhost:3000/api/comments/${props.commentId}`, options)
                .then(response => response.json())
                .then(response => {
                    // console.log(response);

                    const updatedComment = response;
                    const updatedComments = props.comments.map((comment: TComment) => {
                        if (comment.id === props.commentId) {
                            return updatedComment;
                        };
                        return comment;
                    });
                    props.setComments(updatedComments)
                    messageUpdateRef.current!.value = '';
                })
                .catch(err => console.error(err));
        };
    };

    return (
        <>
            {/* <!-- Button trigger modal --> */}
            <button type="button" className="btn btn-success" data-bs-toggle="modal" data-bs-target="#exampleModal">
                Modifier
            </button>

            {/* <!-- Modal --> */}
            <div className="modal fade" id="exampleModal" tabIndex={-1} aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">

                        <div className="modal-header">
                            <h1 className="modal-title fs-5" id="exampleModalLabel">Modification du commentaire</h1>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>

                        <div className="modal-body">
                            <form className="row g-3" onSubmit={handleUpdateComment}>

                                <div className="col-auto">
                                    <textarea
                                        className="form-control"
                                        id="exampleFormControlTextarea1"
                                        ref={messageUpdateRef}
                                        required></textarea>
                                </div>

                                <div className="col-auto">
                                    <button
                                        type="submit"
                                        className="btn btn-success mb-3">
                                        Modifier
                                    </button>
                                </div>

                            </form>
                        </div>

                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Fermer</button>
                            {/* <button type="button" className="btn btn-success">Modifier</button> */}
                        </div>

                    </div>
                </div>
            </div>
        </>
    )
}