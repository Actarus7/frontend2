import { useEffect, useState } from "react";
import { TExercise } from "../../types/TExercise.type";


export default function Exercises(props:{id:number}) {
    const [exercises, setExercises] = useState<TExercise>();


    useEffect(() => {
        const fetchData = async () => {
            const options = { method: 'GET', headers: { 'Content-Type': 'application/json' } };
            const result = await fetch(`http://localhost:3000/api/exercises/${props.id}`, options);
            const response = await result.json();
            // console.log(response);

            setExercises(response);
            // console.log("updated", response.data);
        };
        fetchData();
        // console.log("mounted");
    }, []);

    // console.log(data);
    // Affichage
    return (
        <>
            <ul>

                <div>exercices</div>

                    <span >
                            <details open={false}>
                                <summary>
                                {exercises?.content}
                            </summary>
                            </details>
                    </span>
            </ul>
            
        </>
    );
}