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
    
    if (redirectToAfficheOneTraining) {
        return <OneTraining trainingId={trainingId} onBackToList={handleBackToList} />
    };
    

    // Affichage
    return (
        <div className="d-flex align-content-center flex-wrap justify-content-center align-items-center background-image">
            <div className="d-flex align-content-center flex-wrap justify-content-center align-items-center text-truncate ">

                {trainings.map((training: TTraining) =>
                    <div className="card border-primary grid gap-0 row-gap-3 m-3 text-truncate "
                        style={{ width: "18rem" }}>

                        <h4 className="card-header  text-truncate ">
                            PROGRAMME {training.id}
                        </h4>

                        <div className="card-body text-primary p-2 g-col-6 text-truncate ">
                            <h5 className="card-title text-truncate">
                                {training.title}
                            </h5>
                            <div>
                                {training.description}
                            </div>

                            <div><>{training.sessions}</></div>

                            <button
                                type="button"
                                onClick={() => { setRedirectToAfficheOneTraining(true); setTrainingId(training.id) }}
                                className="btn btn-info">
                                Voir Programme
                            </button>
                        </div>
                    </div>)}
            </div>
        </div>
    );
};