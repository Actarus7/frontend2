import { createContext, useEffect, useState } from "react";
import { CommentsContext } from "../../contexts/CommentsContext";
import { TArticle } from "../../types/TArticle.type";
import { TComment } from "../../types/TComment.type";
import { Defi } from "./defi";
import { Partage } from "./partage";

// const CommentsContext = createContext<TComment[]>([]);
export default function Articles(props: any): JSX.Element {
    const [articles, setArticles] = useState([]);
    // const [redirectToPartages, setRedirectToPartages] = useState(false);
    const [redirectToDefis, setRedirectToDefis] = useState(false);
    const [defiId, setDefiId] = useState(0);
    // const [comments, setComments] = useState<TComment[]>([]);



    let allPartages = articles.map((partage: TArticle | null, i) => {
        if (partage?.type === "partage")

            return (
                <div className="container-fluid" key={i}>
                    <p>{partage.title}</p>
                    <p>{partage.comments.length}</p>

                </div>
            )
    });

    let allRecettes = articles.map((recette: TArticle | null, i) => {
        if (recette?.type === "recette")

            return (
                <div className="container-fluid" key={i}>
                    <p>{recette.title}</p>
                    <p>{recette.comments.length}</p>

                </div>
            )
    });

    let allDefis = articles.map((defi: TArticle | null, i) => {
        if (defi?.type === "defi")

            return (
                <div className="container-fluid" key={i}>
                    <p>
                        <a href="#" onClick={() => { setRedirectToDefis(true); setDefiId(defi.id) }} >{defi.title}</a>
                    </p>
                    <p>{defi.comments.length}</p>

                </div>
            )
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

    }, [])

    if (redirectToDefis) return <Defi defiId={defiId} token={props.token} user={props.user} />;


    // Affichage
    return (
        <>
            {/* <CommentsContext.Provider value={{ comments, setComments }}> */}
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
                                    <p>{allRecettes}</p>
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
                                    <p>{allDefis}</p>
                                </div>
                            </div>
                        </div>

                    </div>

                </div>

            {/* </CommentsContext.Provider> */}

        </>
    );

}