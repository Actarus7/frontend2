import { useEffect, useState } from "react";
import { TTraining } from "../../types/TTraining.type";
import Sessions from "./sessions";
import "./style.css";


export default function OneTraining(
    props: {
        trainingId: number,
        page: string,
        setPage: React.Dispatch<React.SetStateAction<string>>
    }) {

    const [oneTraining, setOneTraining] = useState<TTraining>();
    // const [like, setLike] = useState(0);
    // const [favorite, setFavorite] = useState(false);



    // Récupération du Training sélectionné
    useEffect(() => {
        const options = { method: 'GET', headers: { 'Content-Type': 'application/json' } };
        fetch(`http://localhost:3000/api/trainings/${props.trainingId}`, options)
            .then(response => response.json())
            .then(response => {
                setOneTraining(response);
            })
    }, [props.trainingId])

    // //handle likes
    // const handleLikes = () => {
    //     if (like === 0) {
    //         setLike(1);
    //     }

    //     else if (like === -1) {
    //         setLike(1);
    //     }
    // };
    // //handle dislikes
    // const handledislikes = () => {
    //     if (like === 0) {
    //         setLike(-1);
    //     }

    //     else if (like === 1) {
    //         setLike(-1);
    //     };
    // };


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
                        <Sessions trainingId={props.trainingId} page={props.page} setPage={props.setPage} />
                    </div>
                    : ""}

            </div>

            <div>

            </div>
        </>
    );
}



