
import { useEffect, useState } from "react";
import { TContact } from "../../types/TContact.type";
import "./styleContact.css";

type props = {
    setPage: Function
}

export function Contact(props: props) {
    const [contact, setContact] = useState<TContact[]>([]);
    const [firstNameInput, setFirstNameInput] = useState("");
    const [lastNameInput, setLastNameInput] = useState("");
    const [emailInput, setEmailInput] = useState("");
    const [messageInput, setMessageInput] = useState("");

    useEffect(() => {
        async function getContact() {
            const requestOptions = {
                method: 'GET',
                headers: { 'Content-Type': 'application/json' },
            }

            const response = await fetch('http://localhost:3000/api/contacts/', requestOptions);
            const responseJson = await response.json();
            console.log(responseJson);

            if (responseJson.statusCode === 201) {
                resetInput()
                setContact([...contact, responseJson.data])
                // setContact(responseJson.data);
            }

        };
        getContact()
    }, []);

    const body = {
        firstName: firstNameInput,
        lastName: lastNameInput,
        email: emailInput,
        message: messageInput
    }
    // Options de requêtes et envoi des données des input 
    const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(body)
    };


    /* else {
        return
    } */

    function resetInput() {
        setFirstNameInput("")
        setLastNameInput("")
        setEmailInput("")
        setMessageInput("")
    }



    function deleteContact(id: number) {

        const filtercontact = contact.filter(contacts => contacts.id !== id)
        setContact(filtercontact);

    }


    function patchContact(item: TContact) {

        const filtercontact = contact.findIndex(elm => elm.id === item.id);
        contact[filtercontact] = item;
        setContact([...contact]);

    }

    // Affichage
    return (
        <>

            <div className="h1-contact ">
                <h1>Contactez-nous</h1>

                <div className=" container d-flex justify-content-center flex-column ">
                    <div className="form-item    mb-1">
                        <label htmlFor="firstName">Prénom</label>
                        <input className="form-control" type="text" id="prénom" placeholder="Votre prénom" value={firstNameInput} onChange={(e) => setFirstNameInput(e.target.value)} />
                    </div>

                    <div className="mb-3">
                        <label htmlFor="exampleFormControlInput1" >Nom</label>
                        <input className="form-control" type="email" id="exampleFormControlInput1" placeholder="Votre nom" value={lastNameInput} onChange={(e) => setLastNameInput(e.target.value)} />
                    </div>

                    <div className="mb-3">
                        <label htmlFor="exampleFormControlInput1">Email address</label>
                        <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="name@example.com" value={emailInput} onChange={(e) => setEmailInput(e.target.value)} />
                    </div>

                    <div className="mb-3">
                        <label htmlFor="exampleFormControlTextarea1" className="form-label">Example textarea</label>
                        <textarea className="form-control" id="exampleFormControlTextarea1 rows-3" value={messageInput} onChange={(e) => setMessageInput(e.target.value)}></textarea>
                    </div>

                    <label className="label-contact">
                        <input type="checkbox" /> En cochant cette case, j'accepte de
                        recevoir des informations sur les différentes offres disponibles.
                    </label>

                    <button id="btn " type="submit">Envoyer</button>
                </div>
            </div>
        </>
    );
}

