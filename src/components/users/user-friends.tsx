import { useEffect, useState } from "react";


export default function UserFriends(
    props: {
        token: string,
        newFriend: string
    }) {

    const [userFriendsList, setUserFriendsList] = useState<string[]>([]); // State avec la liste des amis
    const image1 = "/profil-images/photo-profil-1.jpg";
    const image2 = "/profil-images/photo-profil-2.jpg";
    const image3 = "/profil-images/photo-profil-3.jpg";
    const image4 = "/profil-images/photo-profil-4.jpg";
    const images = [image1, image2, image3, image4];




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
    const affichageUserFriendsList = userFriendsList.map((friend: string) => {

        return (
            <div>


                <div className="card-group">
                    <div className="card text-center">
                        <img src={images[Math.floor(Math.random() * 4)]} className="card-img-top" alt="..." />
                        <div className="card-body">
                            <h5 className="card-title">{friend}</h5>
                            <a href="#" className="btn btn-primary">Voir son profil</a>
                        </div>
                    </div>
                </div>



            </div>
        );
    });


    // Modifie la liste des amis après demande acceptée
    if (props.newFriend !== "" && !userFriendsList.includes(props.newFriend)) {
        const userFriendsListCopy = [...userFriendsList];
        userFriendsListCopy.push(props.newFriend);
        setUserFriendsList(userFriendsListCopy)
    };



    // Affichage
    return (
        <>
            <h3>Ma Liste d'amis</h3>
            <div className="row row-cols-1 row-cols-md-3 g-4" style={{maxWidth: "30rem"}}>
                {affichageUserFriendsList}

            </div>
        </>
    );

};