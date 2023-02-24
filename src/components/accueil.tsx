import "./users/style/styleAccueil.css"
import { Apropos } from "./apropos";



export default function Accueil(props: any/* IntrinsicAttributes */) {

    const titre = (
        <div className="carousel-caption d-none d-md-block">
            <h1>Bienvenue sur Happy Training</h1>
            <h3>Avec nous, restez concentrés jusqu'au bout !</h3>
        </div>)
    const array = ["accueil1.png", "accueil2.png", "accueil3.png", "accueil4.png"]

    const arrayElems = array.map(
        (item, i) => {

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
        <>


            <div id="carouselExampleDark" className="carousel slide" data-bs-ride="carousel">
                <div className="carousel-indicators">
                    <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                    <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="1" aria-label="Slide 2"></button>
                    <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="2" aria-label="Slide 3"></button>
                    <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="3" aria-label="Slide 4"></button>
                </div>
                <div className="carousel-inner">
                    {arrayElems}
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
        </>
    );

}