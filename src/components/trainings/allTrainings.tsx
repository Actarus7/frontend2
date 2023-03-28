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


    // Fonction permettant de retourner à la liste de tous les Trainings
    const handleBackToList = () => {
        setRedirectToAfficheOneTraining(false);
    };


    const affichageTrainings = trainings.map((training: TTraining, i: number) => {
        let imageSrc = '';
        if (training.id === 1) {
            imageSrc = `${process.env.PUBLIC_URL}/alltraining-images/programme1img.jpg`;
        } else if (training.id === 2) {
            imageSrc = `${process.env.PUBLIC_URL}/alltraining-images/programme2img.jpg`;
        } else {
            imageSrc = `${process.env.PUBLIC_URL}/alltraining-images/programme3img.jpg`;
        };


        // Affichage du Composant
        return (
            <div className="card training-card m-3 text-truncate shadow" style={{ width: "18rem", boxShadow: "0 4px 6px rgba(255, 255, 255, 0.1)" }} key={training.id}>
                <img src={imageSrc} alt={`Programme ${training.id}`} className="card-img-top" />
                <div className="card-body">
                    <h5 className="card-title">
                        <div className="d-flex justify-content-between align-items-center">
                        </div>
                    </h5>
                    <div className="training-info bg-custom-color text-white mb-3">Programme {training.id}</div>
                    <button
                        type="button"
                        onClick={() => { setRedirectToAfficheOneTraining(true); setTrainingId(training.id) }}
                        className="btn btn-primary btn-custom"
                    >
                        Voir Programme
                    </button>
                </div>

            </div>
        );
    });


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