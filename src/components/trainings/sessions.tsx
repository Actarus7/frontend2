import { useEffect, useState } from "react";
import { TSession } from "../../types/TSesssion.type";
import Exercises from "./exercises";


export default function Sessions() {
    const [sessions, setSessions] = useState<TSession[]>([]);


    useEffect(() => {
        const fetchData = async () => {
            const options = { method: 'GET', headers: { 'Content-Type': 'application/json' } };
            const result = await fetch('http://localhost:3000/api/sessions/', options);
            const response = await result.json();
            // console.log(response);

            setSessions(response);
            // console.log("updated", response.data);
        };
        fetchData();
        // console.log("mounted");
    }, []);

    // console.log(data);
    // Affichage
    return (
        <>
            

                <div>sessions</div>

                {sessions.map((session, i) => (
                    <span key={i}>
                        <details open={false}>
                            <summary>
                                {session.description}
                            </summary>
                            <Exercises id={session.id}></Exercises>
                        </details>
                    </span>
                ))}
                
        </>
    );
}