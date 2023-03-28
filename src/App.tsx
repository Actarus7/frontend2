import { useState } from 'react';
import { Navbar } from './components/navbars/navbar';
import { Footer } from './components/footer/footer';
import { Login } from './components/users/login';
import { Register } from './components/users/register';
import { NavbarLogged } from './components/navbars/navbarLogged';
import Accueil from './components/accueil/accueil';
import AllTrainings from './components/trainings/allTrainings';
import Articles from './components/articles/articles';
import ProfilUser from './components/users/profil-user';
import { TUser } from './types/TUser.type';
import VisitorTraining from './components/trainings/visitorTraining';
import { Contact } from './components/contact/contact';



function App() {
    const [page, setPage] = useState<string>('accueil');
    const [isLogged, setIsLogged] = useState(false);
    const [token, setToken] = useState('');
    const [userLogged, setUserLogged] = useState<TUser>();


    // Fonction qui permet de se déconnecter
    const handleLogout = () => {
        setIsLogged(false);
        setToken("");
        setPage("login");
    };


    // Affichage de la Navbar "spéciale user connecté" si Login Ok
    if (isLogged) {
        return (
            <div className="App">
                <header className="App-header">
                    <NavbarLogged setPage={setPage} logout={handleLogout} ></NavbarLogged>
                </header>

                <main>
                    {page === 'accueil' && <Accueil ></Accueil>}
                    {page === 'mon profil' && <ProfilUser token={token} userLogged={userLogged} setPage={setPage} />}

                    {page === 'trainings' && <AllTrainings token={token} setPage={setPage} />}
                    {page === 'articles' && <Articles token={token} user={userLogged} setPage={setPage}></Articles>}
                    {page === 'contact' && <Contact setPage={setPage}></Contact>}



                </main>

                <footer>
                    <Footer></Footer>
                </footer>
            </div>
        );
    };


    // Affichage du Composant (Navbar "classique")
    return (
        <div className="App">
            <header className="App-header">
                <Navbar setPage={setPage}></Navbar>

            </header>

            <main>
                {page === 'accueil' && <Accueil setPage={setPage}></Accueil>}
                {page === 'login' && <Login setPage={setPage} setIsLogged={setIsLogged} setToken={setToken} setUserLogged={setUserLogged} ></Login>}
                {page === 'register' && <Register page={page} setPage={setPage} setIsLogged={setIsLogged} setToken={setToken} setUserLogged={setUserLogged}></Register>}
                {page === 'visitor training' && <VisitorTraining page={page} setPage={setPage} />}
                {page === 'contact' && <Contact setPage={setPage}></Contact>}



      </main>

       {page !== 'contact' ?
        
         
        <footer>
        <Footer></Footer>
        </footer>
      : ''}
    </div>
  );
}

export default App;
