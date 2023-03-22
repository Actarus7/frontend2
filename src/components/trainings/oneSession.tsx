import { useEffect, useState } from "react";
import { TSession } from "../../types/TSesssion.type";
import Exercises from "./exercises";


export default function OneSession(props: { sessionId: number }) {
    const [oneSession, setOneSession] = useState<TSession>();


    useEffect(() => {
        const options = { method: 'GET', headers: { 'Content-Type': 'application/json' } };
        fetch(`http://localhost:3000/api/sessions/${props.sessionId}`, options)
            .then(response => response.json())
            .then(response => {
                setOneSession(response);
            })
    }, [])

    // Affichage
    return (
        <>
            <Exercises sessionId={props.sessionId} />
        </>

    )
};