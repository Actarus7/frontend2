import { useEffect, useState } from "react";
import { TExercise } from "../../types/TExercise.type";
import "./style.css";

export default function Exercises(props: { sessionId: number, trainingId: number }) {
    const [exercises, setExercises] = useState<TExercise[]>([]);
    const [activeItem, setActiveItem] = useState<number>(0); // State d'état des accordéons (id de l'exercice à afficher)

    useEffect(() => {
        const fetchData = async () => {
            const body = JSON.stringify({
                sessionId: props.sessionId,
                trainingId: props.trainingId
            });
            const options = { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: body };
            const result = await fetch(`http://localhost:3000/api/exercises/training/session`, options);
            const response = await result.json();

            setExercises(response);
        };
        fetchData();
    }, []);


    // Affichage
    return (
        <>
            <h1>SESSION {props.sessionId}</h1>

            <div className="accordion" id="accordionExample">

                {exercises.map((exercise: TExercise, i: number) => {
                    return (

                        <>
                            <div className="accordion-item" key={i}>
                                <h2 className="accordion-header" id="headingTwo">
                                    <button
                                        className="accordion-button collapsed"
                                        type="button"
                                        data-bs-toggle="collapse"
                                        data-bs-target={`#collapse-${exercise.id}`}
                                        aria-expanded={activeItem === exercise.id} // expand l'accordeon si le state correspond à exercise.id
                                        onClick={() => setActiveItem(exercise.id)}
                                    >
                                        Exercice {exercise.title}
                                    </button>
                                </h2>
                                <div
                                    id={`collapse-${exercise.id}`}
                                    className={`accordion-collapse collapse ${activeItem === exercise.id ? 'show' : ''}`} // show le accordeon-body si le state correspond à exercise.id
                                    aria-labelledby={`heading-${exercise.id}`}
                                    data-bs-parent="#accordionExample"
                                >
                                    <div className="accordion-body">
                                        <div>{exercise.content}</div>
                                        <div>{exercise.time}</div>
                                        <div>{exercise.beginner}</div>
                                        <div>{exercise.medium}</div>
                                        <div>{exercise.expert}</div>
                                        <div>{exercise.material}</div>
                                        <div>{exercise.rest_time}</div>
                                    </div>
                                </div>
                            </div>
                        </>
                    )
                })}
            </div>
            
        </>
    );
};