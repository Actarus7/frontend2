import "./styles/articles.css"
import { useEffect, useState } from "react";
import { TArticle } from "../../types/TArticle.type";
import { Defi } from "./defi";
import { Partage } from "./partage";
import { Recette } from "./recette";

export default function Articles(props: any): JSX.Element {
    const [articles, setArticles] = useState([]);
    const [redirectToDefis, setRedirectToDefis] = useState(false);
    const [redirectToRecettes, setRedirectToRecettes] = useState(false);
    const [redirectToPartages, setRedirectToPartages] = useState(false);
    const [defiId, setDefiId] = useState(0);
    const [recetteId, setRecetteId] = useState(0);
    const [partageId, setPartageId] = useState(0);

    // Map des articles pour récupérer tous les Partages
    const allPartages = articles.map((partage: TArticle | null, i) => {
        if (partage?.type === "partage")

            return (

                <div className="container-fluid mt-3" key={i}>
                    <div>
                        <a href="#" className="fw-semibold fs-5 text-decoration-none" onClick={() => { setRedirectToPartages(true); setPartageId(partage.id) }} >
                            {partage.title}
                        </a>
                    </div >

                    <div className="mt-2 fs-6">
                        <i className="bi bi-chat-fill pe-2" />
                        <i className="fw-normal">{partage.comments.length}</i>
                    </div>

                    <div className="border border-bottom mt-4"></div>
                    {/* ou bien <hr></hr> */}

                </div>
            );
        else {
            return null;
        };
    });

    // Map des articles pour récupérer tous les Recettes
    const allRecettes = articles.map((recette: TArticle | null, i) => {
        if (recette?.type === "recette")

            return (

                <div className="container-fluid mt-3" key={i}>
                    <div>
                        <a href="#" className="fw-semibold fs-5 text-decoration-none" onClick={() => { setRedirectToRecettes(true); setRecetteId(recette.id) }} >
                            {recette.title}
                        </a>
                    </div>

                    <div className="mt-2 fs-6">
                        <i className="bi bi-chat-fill pe-2" />
                        <i className="fw-normal">{recette.comments.length}</i>
                    </div>

                    <div className="border border-bottom mt-4"></div>
                    {/* ou bien <hr></hr> */}

                </div>
            );
        else {
            return null;
        };
    });

    // Map des articles pour récupérer tous les Défis
    const allDefis = articles.map((defi: TArticle | null, i) => {
        if (defi?.type === "defi")

            return (

                <div className="container-fluid mt-3" key={i}>
                    <div>
                        <a href="#" className="fw-semibold fs-5 text-decoration-none" onClick={() => { setRedirectToDefis(true); setDefiId(defi.id) }} >
                            {defi.title}
                        </a>

                        <div className="mt-2 fs-6">
                            <i className="bi bi-chat-fill pe-2" />
                            <i className="fw-normal">{defi.comments.length}</i>
                        </div>

                        <div className="border border-bottom mt-4"></div>
                        {/* ou bien <hr></hr> */}
                    </div>



                </div>
            );
        else {
            return null;
        };
    });

    // Récupération de tous les Articles
    useEffect(() => {
        const url = "http://localhost:3000/api/articles";

        const options = {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${props.token}`
            }
        };

        const getArticles = async () => {

            const response = await fetch(url, options);
            const responseJson = await response.json();
            setArticles(responseJson);
        };
        getArticles();

    }, [])

    // Redirection vers un Article précis en fonction du click
    if (redirectToDefis) return <Defi defiId={defiId} setPage={props.setPage} token={props.token} user={props.user} />;
    if (redirectToRecettes) return <Recette recetteId={recetteId} setPage={props.setPage} token={props.token} user={props.user} />;
    if (redirectToPartages) return <Partage partageId={partageId} setPage={props.setPage} token={props.token} user={props.user} />;


    // Affichage
    return (
        <>
            <div className="container-fluid bg-success bg-gradient">
                {/* ESPACE COMMUNAUTE */}
                <div id="communaute" className="text-center text-white fs-1 fw-bold pt-4 pb-4">
                    Espace Communauté
                </div>

                <div className="accordion" id="accordionExample">
                    {/* PARTAGES */}
                    <div className="accordion-item">
                        <h2 className="accordion-header" id="headingOne">
                            <button className="accordion-button fs-3 fw-bold text-dark" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                                Partages
                            </button>
                        </h2>
                        <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                            <div className="accordion-body">
                                <div className="d-flex flex-column mb-3">
                                    {allPartages}
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* RECETTES */}
                    <div className="accordion-item">
                        <h2 className="accordion-header" id="headingTwo">
                            <button className="accordion-button collapsed fs-3 fw-bold text-dark" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                                Recettes
                            </button>
                        </h2>
                        <div id="collapseTwo" className="accordion-collapse collapse fs-3 fw-bold text-dark" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                            <div className="accordion-body">
                                <div className="d-flex flex-column mb-3">
                                    {allRecettes}
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* DEFIS */}
                    <div className="accordion-item">
                        <h2 className="accordion-header" id="headingThree">
                            <button className="accordion-button collapsed fs-3 fw-bold text-dark" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                                Défis
                            </button>
                        </h2>
                        <div id="collapseThree" className="accordion-collapse collapse fs-3 fw-bold text-dark" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                            <div className="accordion-body">
                                <div className="d-flex flex-column mb-3">
                                    {allDefis}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};