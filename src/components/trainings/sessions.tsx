import { useEffect, useState } from "react";
import { TSession } from "../../types/TSesssion.type";
// import { TExercise } from "../../types/TExercise.type";
// import Exercises from "./exercises";
import "./style.css";
import OneSession from "./oneSession";


export default function Sessions(
    props: {
        trainingId: number,
    }) {

    const [sessions, setSessions] = useState<TSession[]>([]);
    const [sessionId, setSessionId] = useState<number>(0);
    const [redirectToAfficheOneSession, setRedirectToAfficheOneSession] = useState(false);
    // const [exercises, setExercises] = useState<TExercise[]>([]);



    // Récupération des Sessions d'un Training
    useEffect(() => {
        const options = { method: 'GET', headers: { 'Content-Type': 'application/json' } };
        fetch(`http://localhost:3000/api/sessions/training/${props.trainingId}`, options)
            .then(response => response.json())
            .then(response => {
                setSessions(response);
            })
            .catch(err => console.error(err));

    }, [props.trainingId]);



    // Affichage des Sessions
    const affichageSessions = sessions.map((session: TSession, i: number) => {
        return (
            <>
                <div className="card border-primary grid gap-0 row-gap-3 m-3 text-truncate " style={{ width: "18rem" }} key={session.id}>
                    <h4 className="card-header  text-truncate ">
                        SESSION {session.id}

                    </h4>


                    <div className="card-body text-primary p-2 g-col-6 text-truncate ">
                        <h5 className="card-title text-truncate">
                            {session.description}
                        </h5>
                        <div>
                            {session.time}
                        </div>


                        <button
                            type="button"
                            onClick={() => { setRedirectToAfficheOneSession(true); setSessionId(session.id) }}
                            className="btn btn-info">
                            Voir Session
                        </button>


                    </div>
                </div>
            </>
        );
    });



    // Redirection vers la Session sélectionnée
    if (redirectToAfficheOneSession) return <OneSession sessionId={sessionId} trainingId={props.trainingId} />




    // Affichage du Composant
    return (
        <>

            <div className="d-flex align-content-center flex-wrap justify-content-center align-items-center">

                <div className="d-flex align-content-center flex-wrap justify-content-center align-items-center text-truncate ">
                    {affichageSessions}
                </div>

            </div>


        </>
    )

};

