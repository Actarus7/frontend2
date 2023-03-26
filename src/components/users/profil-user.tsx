import React, { useEffect, useState } from "react";
import { Card } from "react-bootstrap";
import { TUser } from "../../types/TUser.type";
import FriendCarousel from "./FriendCarousel";
import "./style/styleProfil.css";
import UserFriends from "./user-friends";
import UserWaitingFriendsList from "./user-waiting-friendslist";
import RandomSession from "../trainings/RandomSession";


export default function ProfilUser(
  props: {
    setPage: React.Dispatch<React.SetStateAction<string>>,
    token: string,
    userLogged: TUser | null,
  }) {

  const [userSearch, setUserSearch] = useState<string>("");
  const [searchText, setSearchText] = useState<string>("");
  const [searchResult, setSearchResult] = useState<TUser>();


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


  useEffect(() => {
    performFriendSearch(searchText);
  }, [searchText]);


  const handleAddFriend = (user: TUser) => {
    const options = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        friendId: user.id,
      }),
    };

    fetch(`http://localhost:3000/api/friendship/create`, options)
      .then((response) => response.json())
      .then((response) => {
        if (response.success) {
          alert(`Demande d'ami envoyée à ${user.pseudo}`);
        } else {
          alert(`Impossible d'envoyer une demande d'ami à ${user.pseudo}`);
        }
      });
  };


  const handleSearchFriends = (search: string) => {

    setUserSearch(search);
  };


  const test = searchResult?.pseudo


  const dummyFriends = [
    { username: "Ami 1", photo: "https://via.placeholder.com/150" },
    { username: "Ami 2", photo: "https://via.placeholder.com/150" },
    { username: "Ami 3", photo: "https://via.placeholder.com/150" },
    { username: "Ami 4", photo: "https://via.placeholder.com/150" },
    { username: "Ami 5", photo: "https://via.placeholder.com/150" },
  ];


  return (
    <div className="profil-user-container">
      <h1>Salut, {props.userLogged?.pseudo}</h1>
      
      <div className="carousel-container">
      <FriendCarousel
          friends={dummyFriends} selectedIndex={0} handleFriendClick={function (index: number): void {
            throw new Error("Function not implemented.");
          } }       
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
      <UserFriends token={props.token} />


      {/* LISTE DES DEMANDES D'AMIS RECUES */}
      <UserWaitingFriendsList token={props.token} />



      <div><>{test}</></div>
      {/* <div>{affichageResult}</div> */}
    </div>
  );
}
