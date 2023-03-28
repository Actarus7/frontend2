import { useEffect, useState } from "react";
import { TTraining } from "../../types/TTraining.type";
import Sessions from "./sessions";
import "./style.css";

export default function OneTraining(props: { trainingId: number, onBackToList: () => void }) {

    const [oneTraining, setOneTraining] = useState<TTraining>();


    // Récupération du Training sélectionné
    useEffect(() => {
        const options = { method: 'GET', headers: { 'Content-Type': 'application/json' } };
        fetch(`http://localhost:3000/api/trainings/${props.trainingId}`, options)
            .then(response => response.json())
            .then(response => {
                setOneTraining(response);
            })
    }, [props.trainingId])



    // Affichage du Composant
    return (
        <>
            <div>
                {oneTraining ?
                    <div className="">
                        {oneTraining.title}

                        <div className="">
                            {oneTraining.description}

                        </div>
                        <Sessions trainingId={props.trainingId} />
                        <button
                            type="button"
                            onClick={props.onBackToList}
                            className="btn btn-info mt-2">
                            Retour aux programmes
                        </button>
                    </div>
                    : ""}

            </div>
        </>
    );
};

