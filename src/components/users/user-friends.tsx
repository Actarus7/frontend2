import { useEffect, useState } from "react";

export default function UserFriends(
    props: {
        token: string;
        newFriend: string;
        setPage: (page: string) => void;
    }
) {
    const [userFriendsList, setUserFriendsList] = useState<string[]>([]); // State avec la liste des amis
    const images = [
        "/profil-images/photo-profil-1.jpg",
        "/profil-images/photo-profil-2.jpg",
        "/profil-images/photo-profil-3.jpg",
        "/profil-images/photo-profil-4.jpg",
    ];

  const { token, newFriend, setPage } = props;

  // Fonction pour sélectionner une image aléatoire
  const getRandomImage = () => {
    const randomIndex = Math.floor(Math.random() * images.length);
    return images[randomIndex];
  };

  // Récupération de la liste des amis
  useEffect(() => {
    const options = {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    };

    fetch(`http://localhost:3000/api/friendships/user/friends`, options)
      .then((response) => response.json())
      .then((response) => {
        if (response.statusCode === 200) {
          setUserFriendsList(response.data);
        }
      })
      .catch((error) => console.log(error));
  }, [token]);

  // Affichage de la liste des amis
  const affichageUserFriendsList = userFriendsList.map((friend: string) => {
    const randomImage = getRandomImage(); // Sélection d'une image aléatoire
    return (
      <div key={friend} className="col-md-3">
        <div className="card-group">
          <div className="card text-center">
            <img src={randomImage} className="card-img-top" alt="..." />
            <div className="card-body">
              <h5 className="card-title">{friend}</h5>
              <a href="#" className="btn btn-primary">
                Voir profil
              </a>
            </div>
          </div>
        </div>
      </div>
    );
  });

  // Modifie la liste des amis après demande acceptée
  if (newFriend !== "" && !userFriendsList.includes(newFriend)) {
    const userFriendsListCopy = [...userFriendsList];
    userFriendsListCopy.push(newFriend);
    setUserFriendsList(userFriendsListCopy);
  };


    // Affichage du Composant
    return (
        <>
             <h3>Ma Liste d'amis</h3>
      <div className="row row-cols-1 d-flex flex-nowrap overflow-auto">
        {affichageUserFriendsList}
      </div>
        </>
    );
}
