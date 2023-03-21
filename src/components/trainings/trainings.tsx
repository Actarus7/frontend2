import { useEffect, useState } from "react";


export default function Trainings(props: any) {

    const [data, setData] = useState([]);


    useEffect(() => {
        const fetchData = async () => {
            const options = { method: 'GET', headers: { 'Content-Type': 'application/json' } };
            const result = await fetch('http://localhost:3000/api/trainings/', options);
            const response = await result.json()

            setData(response.data);
            console.log("updated", response.data);
        };
        fetchData();
        console.log("mounted");

    }, [])
    console.log(data);

    // Affichage
    return (
        <>
            <div>Test Trainings</div>
        </>
    );

}