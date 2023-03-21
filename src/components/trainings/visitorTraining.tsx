import { useEffect, useState } from "react";
import { TTraining } from "../../types/TTraining.type";
import Sessions from "./sessions";

export default function VisitorTrainings(props: any) {


    const [training, setTraining] = useState<TTraining | null>();

    useEffect(() => {
        const fetchData = async () => {
            const options = { method: 'GET', headers: { 'Content-Type': 'application/json' } };
            const result = await fetch(`http://localhost:3000/api/trainings/one`, options);
            const response = await result.json();
            // console.log(response);
            setTraining(response);
            // console.log("updated", response.data);
        };
        fetchData();
        // console.log("mounted");
    }, []);


    // Affichage
    return (

        <div>
            {training ?
                <>
                    <div>
                        {training.title}
                    </div>
                    <div>
                        {training.description}
                    </div>
                    <Sessions />
                </>

                : ""}
        </div>

    )


}