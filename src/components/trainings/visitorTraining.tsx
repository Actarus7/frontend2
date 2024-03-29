import { useEffect, useState } from "react";
import { TTraining } from "../../types/TTraining.type";
import OneTraining from "./oneTraining";

export default function VisitorTrainings(
    props: {
        page: string,
        setPage: React.Dispatch<React.SetStateAction<string>>
    }) {

    const [training, setTraining] = useState<TTraining | null>();
    const [redirectToAfficheOneTraining, setRedirectToAfficheOneTraining] = useState(false);


    // Récupération du Training 1
    useEffect(() => {
        const fetchData = async () => {
            const options = { method: 'GET', headers: { 'Content-Type': 'application/json' } };
            const result = await fetch(`http://localhost:3000/api/trainings/1`, options);
            const response = await result.json();
            setTraining(response);
        };
        fetchData();
    }, []);

    const handleBackToList = () => {
        setRedirectToAfficheOneTraining(false);
    };


    // Redirection vers le Training sélectionné
    if (redirectToAfficheOneTraining) {
        if (training) return <OneTraining trainingId={training.id} onBackToList={handleBackToList} />
        alert('Choisissez un autre Programme')
    };


    // Affichage du Composant
    return (

        <div>
            {training ?
                <>
                    <div className="card text-center">

                        <div className="card-header" />

                        <div className="card-body">
                            <h5 className="card-title">PROGRAMME {training.title}</h5>

                            <p className="card-text">{training.description}</p>

                            <button
                                type="button"
                                className="btn btn-primary"
                                onClick={() => { setRedirectToAfficheOneTraining(true) }}>
                                Voir Programme
                            </button>
                        </div>

                        <div className="card-footer text-muted" />
                    </div>
                </>

                : ""}
        </div>

    );


};