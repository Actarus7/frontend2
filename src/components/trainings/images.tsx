import { TTraining } from "../../types/TTraining.type";
import { TSession } from "../../types/TSesssion.type";
import { TExercise } from "../../types/TExercise.type";
import { useEffect, useState } from "react";
import Sessions from "./sessions";
import { TImage } from "../../types/TImage.type";
import "./style.css";



export default function Image(props: any) {
    const [image, setImage] = useState<TImage[]>([]);
    const [selectedFile, setSelectedFile] = useState();
    const [preview, setPreview] = useState<string>('/uploads');

    useEffect(() => {
        if (!selectedFile) {
            setPreview('/upload');
            return;
        }

        const objectUrl = URL.createObjectURL(selectedFile);
        setPreview(objectUrl);
        return () => URL.revokeObjectURL(objectUrl);
    }, [selectedFile]);

    const onSelectFile = (e: any) => {
        if (!e.target.files || e.target.files.length === 0) {
            setSelectedFile(undefined);
            return;
        }
       
        setSelectedFile(e.target.files[0]);
    };

    const fetchImage = async () => {
        const options = { method: 'GET', headers: { 'Content-Type': 'application/json' } };
        const result = await fetch('http://localhost:3000/api/images/upload/', options);
        const response = await result.json();
        console.log(response);

        setImage(response);
        console.log("updated", response.image);
    };
 

    return (
        <>
      
        </>
    )
}
