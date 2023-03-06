import "./users/style/styleAccueil.css";
import { Apropos } from "./apropos/apropos";

export default function Accueil(props: any) {

    const titre = (
        <div className="carousel-caption d-none d-md-block">
            <h1>Bienvenue sur Happy Training</h1>
            <h3>Avec nous, restez concentrés jusqu'au bout !</h3>
        </div>
    );

    const array = ["accueil1.png", "accueil2.png", "accueil3.png", "accueil4.png"];

    const arrayElems = array.map((item, i) => {
        return (
            <div key={i} className={`carousel-item ${i === 0 ? "active" : ""}`} data-bs-interval={(i + 1) * 2000}>
                <img src={`accueil-images/${item}`} className="d-block w-100" alt="woman1" />
                {titre}
            </div>
        );
    });

    return (
        <>
            <div id="carouselExampleDark" className="carousel slide" data-bs-ride="carousel">
                <div className="carousel-indicators">
                    {array.map((_, i) => (
                        <button key={i} type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to={i} className={i === 0 ? "active" : ""} aria-current={i === 0} aria-label={`Slide ${i + 1}`}></button>
                    ))}
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

            <div className="container my-5">
                <div className="row">
                    <div className="col-md-8">
                        <h1>Bienvenue sur Happy Training</h1>
                        <p>Avec nous, restez concentrés jusqu'au bout !</p>
                    </div>
                    <div className="col-md-4">
                        <button className="btn btn-primary btn-lg">S'inscrire</button>
                    </div>
                </div>
            </div>

            <Apropos />
        </>
    );
}
