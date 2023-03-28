import { useState } from "react";
import { TContact } from "../../types/TContact.type";
import "./styleContact.css";

type Props = {
    setPage: Function
}

export function Contact(props: Props) {

    const [contact, setContact] = useState<TContact[]>([]);
    const [firstNameInput, setFirstNameInput] = useState("");
    const [lastNameInput, setLastNameInput] = useState("");
    const [emailInput, setEmailInput] = useState("");
    const [messageInput, setMessageInput] = useState("");


    function resetInput() {
        setFirstNameInput("")
        setLastNameInput("")
        setEmailInput("")
        setMessageInput("")
    };



    const handleSubmit = async (event: { preventDefault: () => void; }) => {

        event.preventDefault();
        const options = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                firstName: firstNameInput,
                lastName: lastNameInput,
                email: emailInput,
                message: messageInput,
            }),
        };

        const response = await fetch('http://localhost:3000/api/contact/', options);
        const responseJson = await response.json();

        if (responseJson.statusCode === 201) {
            setContact([...contact, responseJson])
            resetInput();
        };
    };



    // Affichage du Composant
    return (
        <>

            <div className="h1-contact ">
                <h1>Contactez-nous</h1>

                <div className=" container position-absolute top-50 start-50 translate-middle justify-content-center  flex-column col row text-center " >
                    <div className="form-item    mb-1">
                        <label htmlFor="firstName" className="text-formulaire">Prénom</label>
                        <input className="form-control w-50 col-md-3 offset-md-3 " type="text" id="prénom" placeholder="Votre prénom" value={firstNameInput} onChange={(event) => setFirstNameInput(event.target.value)} />
                    </div>

                    <div className="mb-3" >
                        <label htmlFor="exampleFormControlInput1" className="text-formulaire">Nom</label>
                        <input className="form-control w-50 col-md-3 offset-md-3 " type="email" id="exampleFormControlInput1" placeholder="Votre nom" value={lastNameInput} onChange={(event) => setLastNameInput(event.target.value)} />
                    </div>

                    <div className="mb-3" >
                        <label htmlFor="exampleFormControlInput1" className="text-formulaire">Email</label>
                        <input type="email" className="form-control w-50 col-md-3 offset-md-3" id="exampleFormControlInput1" placeholder="name@example.com" value={emailInput} onChange={(event) => setEmailInput(event.target.value)} />
                    </div>

                    <div className="mb-3" >
                        <label htmlFor="exampleFormControlTextarea1" className="text-formulaire">Votre message</label>
                        <textarea className="form-control w-50 col-md-3 offset-md-3" id="exampleFormControlTextarea1 rows-3" value={messageInput} onChange={(event) => setMessageInput(event.target.value)}></textarea>
                    </div>

                    <label className="text-formulaire">
                        <input type="checkbox" /> En cochant cette case,j'accepte de recevoir des informations
                        sur les différentes offres disponibles.

                    </label>

                    <button onClick={handleSubmit} type="button" className="btn-form-control w-50 col-md-3 offset-md-3" id="btn" >Envoyer</button>
                </div>
            </div>
        </>
    );
}

