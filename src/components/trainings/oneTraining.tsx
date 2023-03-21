import { useEffect, useState } from "react";
import { TTraining } from "../../types/TTraining.type";
import Sessions from "./sessions";
import "./style.css";

// interface propsTraining { training: TTraining }

export default function OneTraining(/* props: propsTraining */ props: any) {
    const [like, setLike] = useState(0);
    const [favorite, setFavorite] = useState(false);
    const [oneTraining, setOneTraining] = useState<TTraining>();

    useEffect(() => {
        const fetchData = async () => {
            const options = { method: 'GET', headers: { 'Content-Type': 'application/json' } };
            const result = await fetch(`http://localhost:3000/api/trainings/${props.trainingId}`, options);
            const response = await result.json();
            // console.log(response);
            setOneTraining(response);
            // console.log("updated", response.data);
        };
        fetchData();
        // console.log("mounted");
    }, []);

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
        }
    }
    // console.log(props);
    // const { training } = props



    // Affichage
    return (


        <>

            {oneTraining ?
                <div className="card border-primary grid gap-0 row-gap-3 m-3 text-wrap row text-truncate">

                    {oneTraining.title}
                    <div className="card-body text-primary p-2 g-col-6 text-wrap row text-truncate "
                        >

                        {oneTraining.description}

                        <Sessions />

                    </div>
                </div>
                : ""}

        </>

    );
}



