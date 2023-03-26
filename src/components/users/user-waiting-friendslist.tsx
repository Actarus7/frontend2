import { useEffect, useState } from "react";
import { TFriendship } from "../../types/TFriendship.type";


export default function UserWaitingFriendsList(props: { token: string }) {

    const [waitingFriendshipsList, setWaitingFriendshipsList] = useState<TFriendship[]>();


    // Récupération de la liste des demandes en attente
    useEffect(() => {

        const options = {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${props.token}`
            },
        };


        fetch(`http://localhost:3000/api/friendships/user/waiting`, options)
            .then(response => response.json())
            .then(response => {

                if (response.statusCode === 200) { setWaitingFriendshipsList(response.data) }
            })
            .catch((error) => console.log(error)
            );
    }, [props.token]);


    // Accepter la demande d'ami (patch)
    const handleAcceptFriendship = (id: number) => {

        const options = {
            method: "PATCH",
            headers: { 
                "Content-Type": "application/json",
                Authorization: `Bearer ${props.token}` },
        };
        fetch(`http://localhost:3000/api/friendships/${id}`, options)
            .then(response => response.json())
            .then(response => {
                setWaitingFriendshipsList(waitingFriendshipsList?.filter((friendship: TFriendship) => friendship.id !== id));
            })
            .catch(error => console.error(error)
            );
    };


    // Refuser la demande d'ami (delete)
    const handleRefuseFriendship = (id: number) => {
        const options = {
            method: "DELETE",
            headers: { 
                "Content-Type": "application/json",
                Authorization: `Bearer ${props.token}` },
        };
        fetch(`http://localhost:3000/api/friendships/${id}`, options)
            .then(response => response.json())
            .then(response => {
                setWaitingFriendshipsList(waitingFriendshipsList?.filter((friendship: TFriendship) => friendship.id !== id));
            })
            .catch(error => console.error(error)
            );
    };


    // Affichage de la liste des demandes en attente
    const affichageUserFriendsList = waitingFriendshipsList?.map((friendship: TFriendship, i: number) => {

        return (
            <tr>
                <th scope="row">{i + 1}</th>

                <td>{friendship.userSender.pseudo}</td>

                <td>
                    <button type="button" className="btn btn-success" onClick={() => handleAcceptFriendship(friendship.id)}>Accepter</button>
                </td>

                <td>
                    <button type="button" className="btn btn-danger" onClick={() => handleRefuseFriendship(friendship.id)}>Refuser</button>
                </td>
            </tr>
        );
    });


    // Affichage
    return (
        <>
            {/* LISTE DES DEMANDES EN ATTENTE */}
            <h3>Mes demandes d'amis en attente de réponse</h3>
            <table className="table table-dark table-hover">
                <thead>
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">Pseudo</th>
                        <th scope="col">Accepter</th>
                        <th scope="col">Refuser</th>
                    </tr>
                </thead>

                <tbody>
                    {affichageUserFriendsList}
                </tbody>
            </table>

        </>
    );
};