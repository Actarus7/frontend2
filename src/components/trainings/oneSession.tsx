import { useEffect, useState } from "react";
import { TSession } from "../../types/TSesssion.type";
import Exercises from "./exercises";
import Sessions from "./sessions";


export default function OneSession(props: { sessionId: number, trainingId: number }) {
    const [oneSession, setOneSession] = useState<TSession>();

    const [showExercises, setShowExercises] = useState(true);

    const handleBackToSessions = () => {
        setShowExercises(false);
    };

    useEffect(() => {
        const options = { method: 'GET', headers: { 'Content-Type': 'application/json' } };
        fetch(`http://localhost:3000/api/sessions/${props.sessionId}`, options)
            .then(response => response.json())
            .then(response => {
                setOneSession(response);
            })
    }, [props.sessionId]);

    if (!showExercises) {
        return <Sessions trainingId={props.trainingId} />
    }

    return (
        <>
            <Exercises sessionId={props.sessionId} trainingId={props.trainingId} onBackToSessions={handleBackToSessions} />
        </>
    );
};
