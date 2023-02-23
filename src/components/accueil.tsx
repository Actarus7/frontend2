import { Apropos } from "./apropos";



export default function Accueil(props: any/* IntrinsicAttributes */) {


    // Affichage
    return (
        <>
            <div>Test Accueil</div>
            <div id="carouselExampleDark" className="carousel slide" data-bs-ride="carousel">
                <div className="carousel-indicators">
                    <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                    <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="1" aria-label="Slide 2"></button>
                    <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="2" aria-label="Slide 3"></button>
                    <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="3" aria-label="Slide 4"></button>
                    <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="4" aria-label="Slide 5"></button>
                    <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="5" aria-label="Slide 6"></button>
                </div>
                <div className="carousel-inner">
                    <div className="carousel-item active" data-bs-interval="10000">
                        <img src="accueil-images/accueil1.png" className="d-block w-100" alt="woman1" />
                        <div className="carousel-caption d-none d-md-block">
                            <h5>Bienvenue sur Happy Training</h5>
                            <p>Avec nous, restez concentrés jusqu'au bout !</p>
                        </div>
                    </div>
                    <div className="carousel-item" data-bs-interval="2000">
                        <img src="accueil-images/accueil2.png" className="d-block w-100" alt="man1" />
                        <div className="carousel-caption d-none d-md-block">
                            <h5>Bienvenue sur Happy Training</h5>
                            <p>Some representative placeholder content for the second slide.</p>
                        </div>
                    </div>
                    <div className="carousel-item">
                        <img src="accueil-images/accueil3.png" className="d-block w-100" alt="woman2" />
                        <div className="carousel-caption d-none d-md-block">
                            <h5>Bienvenue sur Happy Training</h5>
                            <p>Some representative placeholder content for the third slide.</p>
                        </div>
                    </div>
                    <div className="carousel-item">
                        <img src="accueil-images/accueil4.png" className="d-block w-100" alt="women" />
                        <div className="carousel-caption d-none d-md-block">
                            <h5>Bienvenue sur Happy Training</h5>
                            <p>Some representative placeholder content for the third slide.</p>
                        </div>
                    </div>
                    <div className="carousel-item">
                        <img src="accueil-images/accueil5.png" className="d-block w-100" alt="oldmen" />
                        <div className="carousel-caption d-none d-md-block">
                            <h5>Bienvenue sur Happy Training</h5>
                            <p>Chez nous il n'y a pas d'âge pour faire du sport !</p>
                        </div>
                    </div>
                    <div className="carousel-item">
                        <img src="accueil-images/accueil6.png" className="d-block w-100" alt="man2" />
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
        </>
    );

}