import React, { useEffect, useState } from "react";
import { Card } from "react-bootstrap";
import { TFriendship } from "../../types/TFriendship.type";
import { TUser } from "../../types/TUser.type";
import FriendCarousel from "./FriendCarousel";
import "./style/styleProfil.css";
import UserFriends from "./user-friends";
import UserWaitingFriendsList from "./user-waiting-friendslist";
// import RandomSession from "../trainings/RandomSession";


export default function ProfilUser(
  props: {
    setPage: React.Dispatch<React.SetStateAction<string>>,
    token: string,
    userLogged: TUser | null,
  }) {

  const [userSearch, setUserSearch] = useState<string>("");
  const [searchText, setSearchText] = useState<string>("");
  const [searchResult, setSearchResult] = useState<TUser>();
  const [waitingFriendshipsList, setWaitingFriendshipsList] = useState<TFriendship[]>([]); // State avec les demandes d'amis en cours
  const [newFriend, setNewFriend] = useState<string>(""); // State avec un pseudo (si une demande est acceptée)

  useEffect(() => {
    performFriendSearch(searchText);
  }, [searchText]);



  const performFriendSearch = (search: string) => {

    if (search !== "") {
      const body = JSON.stringify({ search });

      const options = {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: body,
      };

      fetch(`http://localhost:3000/api/users/search/`, options)
        .then((response) => response.json())
        .then((response) => {
          if (response.statusCode === 200) {
            setSearchResult(response.data);
          };
        })
        .catch((error) => console.log(error));
    };
  };


  const handleSearch = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    setSearchText(userSearch);
  };



  const handleAddFriend = (user: TUser) => {
    const options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${props.token}`
      },
      body: JSON.stringify({
        userReceiver: user.pseudo,
      }),
    };

    fetch(`http://localhost:3000/api/friendships/`, options)
      .then((response) => response.json())
      .then((response) => {
        if (response.statusCode === 201) {
          alert(`Demande d'ami envoyée à ${user.pseudo}`);
          setSearchResult(undefined);
        } else {
          alert(`Impossible d'envoyer une demande d'ami à ${user.pseudo}`);
          setSearchResult(undefined);
        }
      });
  };


  const handleSearchFriends = (search: string) => {

    setUserSearch(search);
  };


  const dummyFriends = [
    { username: "Ami 1", photo: "https://via.placeholder.com/150" },
    { username: "Ami 2", photo: "https://via.placeholder.com/150" },
    { username: "Ami 3", photo: "https://via.placeholder.com/150" },
    { username: "Ami 4", photo: "https://via.placeholder.com/150" },
    { username: "Ami 5", photo: "https://via.placeholder.com/150" },
  ];


  // Permet de modifier le state des demandes d'amis en cours
  const handleUserPendingFriendListChange = (newUserPendingFriendList: TFriendship[]) => {
    setWaitingFriendshipsList(newUserPendingFriendList);
  };


  // // Permet de modifier la liste des amis
  // const handleUserNewFriend = (newFriend: string) => {
  //   userFriendsList.push(newFriend);
  //   setUserFriendsList(userFriendsList);
  // };


  // Affichage du Composant
  return (
    <div className="profil-user-container">
      <h1>Salut, {props.userLogged?.pseudo}</h1>

      <div className="carousel-container">
        <FriendCarousel
          friends={dummyFriends} selectedIndex={0} handleFriendClick={function (index: number): void {
            throw new Error("Function not implemented.");
          }}
        />
      </div>

      {/* RECHERCHE D'AMIS */}
      <div className="search-friends">
        <h3>Rechercher des amis</h3>
        <form onSubmit={handleSearch}>
          <input
            type="text"
            placeholder="Recherche par pseudo ou email"
            onChange={(event) => handleSearchFriends(event.target.value)}
          />
          <button type="submit">Rechercher</button>
        </form>
        {searchResult?.pseudo && (
          <div className="found-friends">
            <h3>Résultats de la recherche</h3>
            <ul>

              <li key={searchResult.pseudo}>
                <Card className="friend-card">
                  <Card.Img
                    variant="top"
                    src={searchResult.photo}
                    className="friend-image"
                  />
                  <Card.Body>
                    <Card.Title className="friend-username">
                      {searchResult.pseudo}
                    </Card.Title>
                    <button onClick={() => handleAddFriend(searchResult)}>
                      Ajouter en ami
                    </button>
                  </Card.Body>
                </Card>
              </li>

            </ul>
          </div>
        )}
      </div>


      {/* LISTE D'AMIS */}
      <UserFriends
        token={props.token}
        newFriend={newFriend} />


      {/* LISTE DES DEMANDES D'AMIS RECUES */}
      <UserWaitingFriendsList
        token={props.token}
        handleUserPendingFriendListChange={handleUserPendingFriendListChange}
        waitingFriendshipsList={waitingFriendshipsList}
        setNewFriend={setNewFriend}
      />

    </div>
  );
};
