import { useRef, useState } from "react";
import "./style/style.css"

//Cette ligne définit une nouvelle fonction NavbarLogged, qui prend props en argument.
export function NavbarLogged(props: any) {
  const [searchText, setSearchText] = useState("");
  //Cette ligne initialise une variable d'état appelée searchText avec une chaîne de caractères vide et définit sa fonction de mise à jour d'état sur setSearchText

  const userSearch = useRef<HTMLInputElement>(null);


  //Cette fonction fléchée handleSearch est appelée lorsqu'un utilisateur soumet un formulaire de recherche. Elle empêche le comportement par défaut (c'est-à-dire l'envoi du formulaire) à l'aide de la méthode preventDefault(), puis affiche le texte de recherche actuel dans la console.
  const handleSearch = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Ici, on appelle la fonction qui fait la recherche
    console.log("Recherche de :", searchText);
    console.log(userSearch.current!.value);
    
    setSearchText(userSearch.current!.value)
    
  };


if (searchText !== "") {
  const options = {
    method: 'GET',
    headers: { 'Content-Type': 'application/json' }
};

  const resultSearch = 
  fetch(`http://localhost:3000/api/users/search/${searchText}`, options)
  .then((response) => response.json())
  .then((response) => {console.log(response)});
}
  


  // Affichage
  return (

    <nav className="navbar navbar-expand-lg bg-body-tertiary">
      <div className="container-fluid">
        <a className="navbar-brand" href="#">Happy training</a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="#">Mon profil</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">Entrainements</a>
            </li>
            <li className="nav-item dropdown">
              <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                Communauté
              </a>
              <ul className="dropdown-menu">
                <li><a className="dropdown-item" href="#">Defi</a></li>
                <li><a className="dropdown-item" href="#">Recette</a></li>
                <li><hr className="dropdown-divider" /></li>
                <li><a className="dropdown-item" href="#">Partage</a></li>
              </ul>
            </li>
            <li className="nav-item">
              <a className="nav-link disabled">Contact</a>
            </li>
          </ul>
          <ul className="navbar-nav mb-2 mb-lg-0">
            <li className="nav-item">
              <button className="btn btn-outline-danger" onClick={props.logout}>Se déconnecter</button>
            </li>
          </ul>
          <form className="d-flex" role="search" onSubmit={handleSearch}>
            <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"
            ref={userSearch}
              // onChange={(e) => setSearchText(e.currentTarget.value)}
            />
            <button className="btn btn-outline-success" type="submit">Search</button>
          </form>
        </div>
      </div>
    </nav>
  );
};