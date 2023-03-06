import React, { useState } from 'react';
import { NavbarLogged } from '../navbars/navbarLogged';

export default function ProfilUser(props: any) {

    //liste des amis
    const [friendsList, setFriendsList] = useState(['Ami1', 'Ami2', 'Ami3', 'Ami4', 'Ami5']);

    //Index de l'ami sélectionné
    const [selectedFriendIndex, setSelectedFriendIndex] = useState(0);

    //Fonction pour changer l'ami selectionné
    const handleFriendClick = (index: number) => { setSelectedFriendIndex(index) };

    // Affichage
    return (
        <>
            <h1>
                Salut, {props.pseudo}!
            </h1>
            <div id="carouselExampleControls" className="carousel slide" data-bs-ride="carousel">
                <div className="carousel-inner">
                    {friendsList.map((friend, index) => (
                        <div
                            key={index}
                            className={`carousel-item ${index === selectedFriendIndex ? 'active' : ''}`}
                            onClick={() => handleFriendClick(index)}
                        >
                            <h3>{friend}</h3>
                        </div>
                    ))}
                </div>
                <a className="carousel-control-prev" href="#carouselExampleControls" role="button" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="sr-only">Previous</span>
                </a>
                <a className="carousel-control-next" href="#carouselExampleControls" role="button" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="sr-only">Next</span>
                </a>
            </div>
        </>
    );
}