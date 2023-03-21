import { useEffect, useState } from "react";
import { TSession } from "../../types/TSesssion.type";
import { TExercise } from "../../types/TExercise.type";
import Exercises from "./exercises";
import "./style.css";


export default function Sessions() {
    const [sessions, setSessions] = useState<TSession[]>([]);
    const [sessionId, setSessionId] = useState<number>(0);
    const [exercises, setExercises] = useState<TExercise[]>([]);

    useEffect(() => {
        const fetchSessions = async () => {
            const options = { method: 'GET', headers: { 'Content-Type': 'application/json' } };
            const result = await fetch('http://localhost:3000/api/sessions/', options);
            const response = await result.json();

            setSessions(response);
        };
        fetchSessions();



    }, []);

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
        {}
            <div>

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

