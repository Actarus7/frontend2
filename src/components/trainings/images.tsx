import { TTraining } from "../../types/TTraining.type";
import { TSession } from "../../types/TSesssion.type";
import { TExercise } from "../../types/TExercise.type";
import { useEffect, useState } from "react";
import Sessions from "./sessions";
import { TImage } from "../../types/TImage.type";



export default function Exercises(props: any) {
  /*    const [data, setData] = useState<TImage[]>([]);

    useEffect(() => {
        const fetchData = async () => {
            const options = { method: 'GET', headers: { 'Content-Type': 'application/json' } };
            const result = await fetch('http://localhost:3000/api/images/upload/', options);
            const response = await result.json();
            console.log(response);

            setData(response);
            console.log("updated", response.data);
        };
        fetchData();
        console.log("mounted");
    }, []);

    console.log(data);

    return (
        <>
          
            
            <ul>

                <div>Programmes</div>

                {data.map((item, i) => (

                    <li key={i}>
                        <details open={false}>
                            <h2> exercises </h2>
                            <summary>
                                {item.fileName }
                            </summary>
                            {item.originalName}

                        </details>
                    </li>

                ))}

            </ul>
        </>
    )  */
}
