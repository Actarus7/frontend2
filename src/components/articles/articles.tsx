import { useEffect, useState } from "react";


export default function Articles(props: any) {
    const [articles, setArticles] = useState([]);

    let allPartages = articles.map((partage: any | null, i) => {

        return (
            <div className="container-fluid" key={i}>
                <p>{partage.title}</p>
                <p>{partage.comments.length}</p>

            </div>
        )
    })
    /* function getPartages() {
        return "http://localhost:3000/api/articles/partages"
    };

    function getRecettes() {
        return "http://localhost:3000/api/articles/recettes"
    };

    function getDefis() {
        return "http://localhost:3000/api/articles/defis"
    }; */



    /* useEffect(() => {
        const urls = [];
        urls.push(getPartages());
        // urls.push(getRecettes());
        // urls.push(getDefis());
        Promise.all(
            urls.map(async (url) => {
                const options = {
                    method: 'GET',
                    headers: {
                        'Content-Type': 'application/json',
                        Authorization: `Bearer ${props.token}`
                    }
                };

                const response = await fetch(url, options);
                const responseJson = await response.json();
                setPartages(responseJson);

            })
        );
    }, []); */

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
                                <p>{ }</p>
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
                                <p>tous les défis ici</p>
                            </div>
                        </div>
                    </div>

                </div>

            </div>



        </>
    );

}