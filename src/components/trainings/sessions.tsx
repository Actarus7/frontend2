import { useEffect, useState } from "react";
import { TSession } from "../../types/TSesssion.type";
import { TExercise } from "../../types/TExercise.type";
import Exercises from "./exercises";
import "./style.css";
import OneSession from "./oneSession";


export default function Sessions(props: { trainingId: number }) {
    const [sessions, setSessions] = useState<TSession[]>([]);
    const [sessionId, setSessionId] = useState<number>(0);
    const [redirectToAfficheOneSession, setRedirectToAfficheOneSession] = useState(false);
    const [exercises, setExercises] = useState<TExercise[]>([]);

    useEffect(() => {
        const options = { method: 'GET', headers: { 'Content-Type': 'application/json' } };
        fetch(`http://localhost:3000/api/sessions/training/${props.trainingId}`, options)
            .then(response => response.json())
            .then(response => {
                setSessions(response);
            })
            .catch(err => console.error(err));

    });


    const affichageSessions = sessions.map((session: TSession) => {
        return (
            <>
                <div className="card border-primary grid gap-0 row-gap-3 m-3 text-truncate "
                    style={{ width: "18rem" }}>
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


    if (redirectToAfficheOneSession) return <OneSession sessionId={sessionId} />


    const fetchExercises = async (id: number) => {
        const options = { method: 'GET', headers: { 'Content-Type': 'application/json' } };
        const result = await fetch(`http://localhost:3000/api/exercises/session/${id}`, options);
        const exo = await result.json();
        console.log(exo);
        setExercises(exo);
        setSessionId(id);
    };

    const affichageExercises = exercises.map(exo => <div>{exo.title}</div>)
    const exerciseDetails = exercises.map(exercise => <div> {exercise.content} {exercise.time} {exercise.material}</div>)

    // Affichage
    return (
        <>

            <div className="d-flex align-content-center flex-wrap justify-content-center align-items-center">

                <div className="d-flex align-content-center flex-wrap justify-content-center align-items-center text-truncate ">
                    {affichageSessions}
                </div>

            </div>















            {/* {<div className="card border-primary grid gap-0 row-gap-3  d-inline-block text-wrap text-truncate ">

                {sessions.map((session, i) => (
                    <div key={session.id}>
                        <button type="button" onClick={() => fetchExercises(session.id)}>Session {i + 1}</button>

                        {session.description}
                        {session.id === sessionId && affichageExercises && exercises.map((exercise, j) => (
                            <div key={j}>
                                <button type="button" onClick={() => fetchExercises(exercise.id)}>
                                    {exerciseDetails}
                                </button>
                            </div>
                        ))}
                    </div>
                ))}


                {
                    <>
                        {exercises.map(exo => {
                            <div>{exercises[0].title}</div>
                            {
                                <>

                                    <div>
                                        {exo.content}
                                    </div>
                                    <div>
                                        {exo.time}
                                    </div>
                                    <div>
                                        {exo.material}
                                    </div>
                                </>
                            }
                        })
                        }
                    </>
                }
            </div>
            } */}
        </>
    )

}

