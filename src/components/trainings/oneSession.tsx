import { useState } from "react";
import Exercises from "./exercises";
import Sessions from "./sessions";


export default function OneSession(props: { sessionId: number, trainingId: number }) {

    const [showExercises, setShowExercises] = useState(true);

    const handleBackToSessions = () => {
        setShowExercises(false);
    };


    if (!showExercises) {
        return <Sessions trainingId={props.trainingId} />
    };


    // Affichage du Composant
    return <Exercises sessionId={props.sessionId} trainingId={props.trainingId} onBackToSessions={handleBackToSessions} />;
};
