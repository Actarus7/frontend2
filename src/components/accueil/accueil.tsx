import { Apropos } from "../apropos/apropos";
import "./styleAccueil/styleAccueil.css"


export default function Accueil(props: any/* IntrinsicAttributes */) {

    const titre = (
        <div className="carousel-caption d-none d-md-block bg-dark text-white">
            <h1>Bienvenue sur Happy Training</h1>
            <h3>Avec nous, restez concentrés jusqu'au bout !</h3>
        </div>)
    const array = [
        "accueil1.png",
        "accueil2.png",
        "accueil3.png",
        "accueil4.png"
        ]

    const arrayElems = array.map(
        (item, i) => {
    // Affichage
    return (
        
            <div key={i} className="carousel-item active accueil-images " data-bs-interval={(i + 1) * 3000}>
                <img src={`accueil-images/${item}`} className="d-block w-100" alt="woman1" />
                {titre}
            </div>
        )
    }
)
// Affichage
return (

            <div className="bg-color">
            
            <div id="carouselExampleDark" className="carousel slide" data-bs-ride="carousel">
                <div className="carousel-indicators">
                    <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                    <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="1" aria-label="Slide 2"></button>
                    <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="2" aria-label="Slide 3"></button>
                    <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="3" aria-label="Slide 4"></button>
                    
                </div>
                <div className="carousel-inner">
                    <div className="carousel-item active" data-bs-interval="10000">
                        <img src="accueil-images/accueil1.png" className="d-block w-100 h-custom" alt="woman1" />
                        <div className="carousel-caption d-none d-md-block">
                            <h5>Bienvenue sur Happy Training</h5>
                            <p>Avec nous, restez concentrés jusqu'au bout !</p>
                        </div>
                    </div>
                    <div className="carousel-item">
                        <img src="accueil-images/accueil2.png" max-width= "100%" className="d-block w-100 h-custom" alt="man1" />
                        <div className="carousel-caption d-none d-md-block">
                            <h5>Bienvenue sur Happy Training</h5>
                            <p>Some representative placeholder content for the second slide.</p>
                        </div>
                    </div>
                    <div className="carousel-item">
                        <img src="accueil-images/accueil3.png" className="d-block w-100 h-custom" alt="woman2" />
                        <div className="carousel-caption d-none d-md-block">
                            <h5>Bienvenue sur Happy Training</h5>
                            <p>Some representative placeholder content for the third slide.</p>
                        </div>
                    </div>
                    <div className="carousel-item">
                        <img src="accueil-images/accueil4.png" className="d-block w-100 h-custom" alt="women" />
                        <div className="carousel-caption d-none d-md-block">
                            <h5>Bienvenue sur Happy Training</h5>
                            <p>Some representative placeholder content for the third slide.</p>
                        </div>
                    </div>
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div>


            <Apropos></Apropos>
        </div>
    );
}
