import { useState, useEffect } from 'react';
import { TTraining } from '../../types/TTraining.type';
import OneTraining from './oneTraining';


export default function Trainings(props: any) {

    /**
     * like peut prendre 3 états: -1= dislike
     * 1 = like et 0 = undefined (pas de choix de la part de user)
     */
    const [searchTerm, setSearchTerm] = useState('');//searbar
    // const [favorite, setFavorite] = useState(false);
    const [trainings, setTrainings] = useState<TTraining[]>([]);
    const [trainingId, setTrainingId] = useState<number>();
    const [redirectToAfficheOneTraining, setRedirectToAfficheOneTraining] = useState(false);


    useEffect(() => {
        const fetchData = async () => {
            const options = { method: 'GET', headers: { 'Content-Type': 'application/json' } };
            const result = await fetch(`http://localhost:3000/api/trainings/`, options);
            const response = await result.json();
            console.log(response);

            setTrainings(response);
            // console.log("updated", response.data);
        };
        fetchData();
        // console.log("mounted");
    }, []);

    // console.log(trainings);
    if (redirectToAfficheOneTraining) return <OneTraining trainingId={trainingId} />



    return (

        <div className={`d-flex align-content-center flex-wrap justify-content-center align-items-center `}>
            <input
                type="text"
                placeholder='Search...'
                onChange={(event) => {
                    setSearchTerm(event.target.value);
                    {
                        trainings.map((training, key) => {
                            <div className='trainings' key={key}>
                                <p>{training.title}</p>
                            </div>
                        }
                        )
                    }
                }}
            />



            <div className="d-flex align-content-center flex-wrap justify-content-center align-items-center text-truncate ">

                {/* {trainings.map(training => <OneTraining training={training} />)} */}

                {trainings.map(training =>
                    <div className="card border-primary grid gap-0 row-gap-3 m-3 text-truncate "
                        style={{ width: "18rem" }}>
                        <h4 className="card-header  text-truncate ">
                            PROGRAMME {training.id}
                            {/* <i
                            className={`bi bi-star${favorite ? "-fill" : ""}`}
                            style={{ color: favorite ? " #ccaa00" : "#888888" }}
                            onClick={() => setFavorite(!favorite)}
                        /> */}
                        </h4>


                        <div className="card-body text-primary p-2 g-col-6 text-truncate ">
                            <h5 className="card-title text-truncate">
                                {training.title}
                            </h5>
                            <div>
                                {training.description}
                            </div>

                            <button
                                type="button"
                                onClick={() => { setRedirectToAfficheOneTraining(true); setTrainingId(training.id) }}
                                className="btn btn-info ">
                                Voir Programme
                            </button>

                            {/* <i
                                className={`bi bi-hand-thumbs-up${like === 1 ? "-fill" : ""}`}
                                onClick={handleLikes}
                                style={{ cursor: "pointer" }}
                            ></i>
        
                            <i
                                className={`bi bi-hand-thumbs-down${like === -1 ? "-fill" : ""}`}
                                onClick={handledislikes}
                                style={{ cursor: "pointer", color: "red" }}
                            ></i> */}







                        </div>
                    </div>)}

            </div>
        </div>
    );
};





