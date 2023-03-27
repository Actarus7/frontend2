import { useRef, useState } from "react";
import { Dispatch, SetStateAction } from 'react';
import "./style/style.css";

interface NavbarLoggedProps {
  setPage: Dispatch<SetStateAction<string>>;
  logout: () => void;
}

interface User {
  id: number;
  name: string;
  email: string;
}

export function NavbarLogged(props: NavbarLoggedProps) {
  const [searchText, setSearchText] = useState("");
  const userSearch = useRef<HTMLInputElement>(null);
  const [searchResults, setSearchResults] = useState<User[]>([]);

  const handleGoToProfile = () => {
    props.setPage('mon profil');
  }

  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
      <div className="container-fluid">
        <button className="navbar-brand " onClick={handleGoToProfile}>
          Happy training
        </button>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="#" onClick={() => props.setPage('mon profil')}>
                Mon profil
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#" onClick={() => props.setPage('trainings')}>
                Entrainements
              </a>
            </li>
            <li className="nav-item dropdown">
              <a className="nav-link" href="#" onClick={() => props.setPage('articles')}>
                Communauté
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#" onClick={() => props.setPage('contact')}>Contact</a>
            </li>
          </ul>
          <ul className="navbar-nav mb-2 mb-lg-0">
            <li className="nav-item">
            </li>
            <li className="nav-item">
              <button className="btn btn-primary" onClick={props.logout}>
                Se déconnecter
              </button>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}