import { useState, useEffect } from 'react';
import { TTraining } from '../../types/TTraining.type';
import OneTraining from './oneTraining';
import './styles/stylesTraining.css';

export default function AllTrainings(props: any) {
    /**
     * like peut prendre 3 états: -1= dislike
     * 1 = like et 0 = undefined (pas de choix de la part de user)
     */
    // const [searchTerm, setSearchTerm] = useState('');//searbar
    // const [favorite, setFavorite] = useState(false);
    const [trainings, setTrainings] = useState<TTraining[]>([]);
    const [trainingId, setTrainingId] = useState<number>(0);
    const [redirectToAfficheOneTraining, setRedirectToAfficheOneTraining] = useState(false);


    // Récupération de tous les Trainings
    useEffect(() => {
        const fetchData = async () => {
            const options = { method: 'GET', headers: { 'Content-Type': 'application/json' } };
            const result = await fetch('http://localhost:3000/api/trainings/', options);
            const response = await result.json()

            setTrainings(response);
        };
        fetchData();

    }, [])

    const handleBackToList = () => {
        setRedirectToAfficheOneTraining(false);
    };

    const affichageTrainings = trainings.map((training: TTraining) => {
        return (
            <>
                <div className="card training-card m-3 text-truncate shadow" style={{ width: "18rem", boxShadow: "0 4px 6px rgba(255, 255, 255, 0.1)" }}>
                    <img src={`path/to/image/programme-${training.id}.jpg`} alt={`Programme ${training.id}`} className="card-img-top" />
                    <div className="card-body">
                        <h5 className="card-title">
                            <div className="d-flex justify-content-between align-items-center">
                                <div className="bg-custom-color text-white p-2" style={{ backgroundColor: "#40dbc1" }}>{training.id}</div>
                                Training numéro {training.id}
                            </div>
                        </h5>
                        <button
                            type="button"
                            onClick={() => { setRedirectToAfficheOneTraining(true); setTrainingId(training.id) }}
                            className="btn btn-primary">
                            Voir Programme
                        </button>
                    </div>
                </div>
            </>
        );
    });
    
    
    




                {/* <div className="card mb-3">
                    <img src="..." className="card-img-top" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title">Card title</h5>
                        <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                        <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
                    </div>
                </div>
                <div className="card">
                    <div className="card-body">
                        <h5 className="card-title">Card title</h5>
                        <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                        <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
                    </div>
                    <img src="..." className="card-img-bottom" alt="..." />
                </div> */}










                {/* <div className="card training-card m-3 text-truncate" style={{ width: "18rem" }}>
                    <img src={`path/to/image/${training.id}.jpg`} alt="Programme" className="card-img-top" />
                    <div className="card-img-overlay d-flex flex-column justify-content-end">
                        <div className="training-info bg-black">
                            
                        </div>
                    </div>
                    <div className="card-body text-primary p-2 g-col-6 text-truncate">
                        <button
                            type="button"
                            onClick={() => { setRedirectToAfficheOneTraining(true); setTrainingId(training.id) }}
                            className="btn btn-info">
                            Voir Programme
                        </button>
                    </div>
                </div> 
            </>
        );
    });*/}



    if (redirectToAfficheOneTraining) {
        return <OneTraining trainingId={trainingId} onBackToList={handleBackToList} />
    };


    // Affichage
    return (
        <div className="d-flex align-content-center flex-wrap justify-content-center align-items-center background-image">
            <div className="d-flex align-content-center flex-wrap justify-content-center align-items-center text-truncate ">

                {trainings.length > 0 ?
                    affichageTrainings
                    : ""}
            </div>
        </div>
    );
};