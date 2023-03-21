import { Card } from "react-bootstrap";
import FriendCarousel from "./FriendCarousel";
import "./style/styleProfil.css";
import React, { useEffect, useState } from "react";

interface Props {
  token: string;
  pseudo: string;
  setPage: (page: string) => void;
}

interface User {
  id: number;
  pseudo: string;
  email: string;
  photo: string;
}

export default function ProfilUser(props: Props) {
  const [userSearch, setUserSearch] = useState<string>("");
  const [searchText, setSearchText] = useState<string>("");
  const [searchResult, setSearchResult] = useState<User>();
  console.log("test 1");


  const performFriendSearch = (search: string) => {
    console.log("test 4", search);

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
          console.log(response.data);
          if (response.statusCode === 200) {
            setSearchResult(response.data);
          }
        });
    } 
  };


  const handleSearch = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    setSearchText(userSearch);
    console.log("test 5", userSearch);
  };


  useEffect(() => {
    console.log("test 3", searchText);

    performFriendSearch(searchText);
  }, [searchText]);


  const handleAddFriend = (user: User) => {
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
    console.log("test 2", search);

    setUserSearch(search);
  };


  const test = searchResult?.pseudo
  console.log('résultat', searchResult);
  
  console.log(test);
  
  /* const affichageResult = searchResults.map((user: User) => {
    return (
    <>
    <div>{user.pseudo}</div>
    <div>Test</div>
    </>);
  }); */


  return (
    <div className="profil-user-container">
      <h1>Salut, {props.pseudo}</h1>

      {/* <div className="profil-user-content">
        <div className="profil-user-left">
          <FriendCarousel
            friends={[]}
            selectedIndex={0}
            handleFriendClick={function (index: number): void {
              throw new Error("Function not implemented.");
            }}
          />
          {searchResults?.length > 0 && (
            <div className="friend-requests">
              <h2>Demandes d'amis en attente</h2>
              <ul>
                {searchResults.map((user: User) => (
                  <li key={user.pseudo}>
                    {user.pseudo}
                    <button onClick={() => handleAddFriend(user)}>
                      Accepter
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </div> */}

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

      <div><>{test}</></div>
      {/* <div>{affichageResult}</div> */}
    </div>
  );
}
