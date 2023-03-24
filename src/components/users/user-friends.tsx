import { useEffect, useState } from "react";


export default function UserFriends(props: { token: string }) {

    const [userFriendsList, setUserFriendsList] = useState<string[]>();

    // Récupération de la liste des amis
    useEffect(() => {

        const options = {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${props.token}`
            },
        };


        fetch(`http://localhost:3000/api/friendships/user/friends`, options)
            .then(response => response.json())
            .then(response => {

                if (response.statusCode === 200) { setUserFriendsList(response.data) }
            })
            .catch((error) => console.log(error)
            );
    }, [props.token]);


    // Affichage de la liste des amis
    const affichageUserFriendsList = userFriendsList?.map((friend: string) => {

        return (
            <div>
                {friend}
            </div>
        );
    });



    // Affichage
    return (
        <>
            <h3>Ma Liste d'amis</h3>
            {affichageUserFriendsList}
        </>
    );

};