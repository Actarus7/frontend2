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

;

    let allPartages = articles.map((partage: TArticle | null, i) => {
        if (partage?.type === "partage")

            return (
                <div className="container-fluid" key={i}>
                    <div>
                        <a href="#" onClick={() => { setRedirectToPartages(true); setPartageId(partage.id) }} >{partage.title}</a>
                    </div>
                    <p>{partage.comments.length}</p>

                </div>
            )
        else {
            return null;
        }
    });

    let allRecettes = articles.map((recette: TArticle | null, i) => {
        if (recette?.type === "recette")

            return (
                <div className="container-fluid" key={i}>
                    <div>
                        <a href="#" onClick={() => { setRedirectToRecettes(true); setRecetteId(recette.id) }} >{recette.title}</a>
                    </div>
                    <div>{recette.comments.length}</div>

                </div>
            )
        else {
            return null;
        }
    });

    let allDefis = articles.map((defi: TArticle | null, i) => {
        if (defi?.type === "defi")

            return (
                <div className="container-fluid" key={i}>
                    <div>
                        <a href="#" onClick={() => { setRedirectToDefis(true); setDefiId(defi.id) }} >{defi.title}</a>
                    </div>
                    <div>{defi.comments.length}</div>

                </div>
            )
        else {
            return null;
        }
    });


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

    })

    if (redirectToDefis) return <Defi setPage={props.setPage} defiId={defiId} token={props.token} user={props.user} />;
    if (redirectToRecettes) return <Recette recetteId={recetteId} setPage={props.setPage} token={props.token} user={props.user} />;
    if (redirectToPartages) return <Partage partageId={partageId} setPage={props.setPage} token={props.token} user={props.user} />;


    // Affichage
    return (
        <>
            <div className="container-fluid bg-success bg-gradient">
                Communauté


                <div className="accordion" id="accordionExample">

                    <div className="accordion-item">
                        <h2 className="accordion-header" id="headingOne">
                            <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                                Partages
                            </button>
                        </h2>
                        <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                            <div className="accordion-body">
                                {allPartages}
                            </div>
                        </div>
                    </div>


                    <div className="accordion-item">
                        <h2 className="accordion-header" id="headingTwo">
                            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                                Recettes
                            </button>
                        </h2>
                        <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                            <div className="accordion-body">
                                {allRecettes}
                            </div>
                        </div>
                    </div>


                    <div className="accordion-item">
                        <h2 className="accordion-header" id="headingThree">
                            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                                Défis
                            </button>
                        </h2>
                        <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                            <div className="accordion-body">
                                {allDefis}
                            </div>
                        </div>
                    </div>

                </div>

            </div>

        </>
    );

}