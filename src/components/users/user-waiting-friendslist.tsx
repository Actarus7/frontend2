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
    }, []);


    // Affichage de la liste des demandes en attente
    const affichageUserFriendsList = waitingFriendshipsList?.map((friendship: TFriendship) => {

        return (
            <div>
                {friendship.userSender.pseudo}
            </div>
        );
    });


    // Affichage
    return (
        <>
            <h3>Mes demandes d'amis en attente de réponse</h3>
            {affichageUserFriendsList}
        </>
    );
};