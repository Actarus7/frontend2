import { useEffect, useState } from "react";
import { TSession } from "../../types/TSesssion.type";
import { TTraining } from "../../types/TTraining.type";
import Sessions from "./sessions";
import "./style.css";

// interface propsTraining { training: TTraining }

export default function OneTraining(props: { trainingId: number }) {
    const [like, setLike] = useState(0);
    const [favorite, setFavorite] = useState(false);
    const [oneTraining, setOneTraining] = useState<TTraining>();
    const [session, setSession] = useState<TSession>();
    const [redirectToSession, setRedirectToSession] = useState<boolean>(false);



    // Récupération du Training sélectionné
    useEffect(() => {
        const options = { method: 'GET', headers: { 'Content-Type': 'application/json' } };
        fetch(`http://localhost:3000/api/trainings/${props.trainingId}`, options)
            .then(response => response.json())
            .then(response => {
                setOneTraining(response);
            })
    }, [])

    //handle likes
    const handleLikes = () => {
        if (like === 0) {
            setLike(1);
        }

        else if (like === -1) {
            setLike(1);
        }
    };
    //handle dislikes
    const handledislikes = () => {
        if (like === 0) {
            setLike(-1);
        }

        else if (like === 1) {
            setLike(-1);
        };
    };

    // if (redirectToSession) return <Sessions sessionId={sessionId}/>;
    // console.log(props.training);

    // const affichageSessions = props.training?.sessions.map((session: TSession) => {
    //     return (
    //         <div></div>
    //     );
    // });

    // Affichage
    return (
        <>
            <div>
                {oneTraining ?
                    <div className="">
                        {oneTraining.title}

                        <div className="">
                            {oneTraining.description}

                        </div>
                        <Sessions trainingId={props.trainingId} />
                    </div>
                    : ""}

            </div>

            <div>

            </div>
        </>
    );
}



