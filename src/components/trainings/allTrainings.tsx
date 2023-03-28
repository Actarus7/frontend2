import { useState, useEffect } from 'react';
import { TTraining } from '../../types/TTraining.type';
import OneTraining from './oneTraining';
import './styles/stylesTraining.css';

export default function AllTrainings(props: any) {

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



    // Méthode permettant de modifier un state afin de revevnir à la liste des Trainings
    const handleBackToList = () => {
        setRedirectToAfficheOneTraining(false);
    };


    // Création des cards 
    const affichageTrainings = trainings.map((training: TTraining) => {
        return (
            <>
                <div className="card border-primary grid gap-0 row-gap-3 m-3 text-truncate "
                    style={{ width: "18rem" }}>

                    <h4 className="card-header  text-truncate ">
                        PROGRAMME {training.id}
                    </h4>

                    <div className="card-body text-primary p-2 g-col-6 text-truncate ">
                        <h5 className="card-title text-truncate">
                            {training.title}
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
                </div></>)
    });


    // Redirige vers OneTraining en cas de clique sur un Programme
    if (redirectToAfficheOneTraining) {
        return <OneTraining trainingId={trainingId} onBackToList={handleBackToList} />
    };



    // Affichage du Composant
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