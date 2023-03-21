import { useEffect, useState } from "react";
import { TExercise } from "../../types/TExercise.type";
import "./style.css";

export default function Exercises(props: { id: number }) {
    const [exercises, setExercises] = useState<TExercise[]>([]);
    console.log("session id", props.id);
    


    useEffect(() => {
        const fetchData = async () => {
            const options = { method: 'GET', headers: { 'Content-Type': 'application/json' } };
            const result = await fetch(`http://localhost:3000/api/exercises/session/${props.id}`, options);
            const response = await result.json();
            console.log(response);

            setExercises(response);
            // console.log("updated", response.data);
        };
        fetchData();
        // console.log("mounted");
    }, []);

    // Affichage
    return (
        <>
            {exercises.map(exercise => {
                <>
                    <div>
                        {exercise.title}
                    </div>
                    <div>
                        {exercise.content}
                    </div>
                    <div>
                        {exercise.time}
                    </div>
                    <div>
                        {exercise.material}
                    </div>
                </>
            })
            }
        </>
    );
};