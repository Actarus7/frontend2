import { useState } from "react";
import { TContact } from "../../types/TContact.type";

export  function Contacts(props: any) {

    const [contact, setContact] = useState<TContact[]>([]);
    const [firstNameInput, setFirstNameInput] = useState("");
    const [lastNameInput, setLastNameInput] = useState("");
    const [emailInput, setEmailInput] = useState("");
    const [messageInput, setMessageInput] = useState("");

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
    const [showInput, setShowInput] = useState(false);

    async function deleteContacts() {
        const requestOptions = {
            method: 'DELETE',
            headers: { 'Content-Type': 'application/json' }
        };

        // const response = await fetch(`http://localhost:3000/api/contacts/${props.contact.id}`, requestOptions)
        // const responseJson = await response.json()
        // console.log(responseJson)

        // if (responseJson.statusCode === 200) {
        //     props.delete(props.product.id)
        // }

    }
 
    
    async function updateContacts() {
        setShowInput(true)
    }


    async function patchContacts() {
        const requestOptions = {
            method: 'PATCH',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                firstName: firstNameInput,
                lastName: lastNameInput,
                email: emailInput,
                message: messageInput
            })
        };

        const response = await fetch(`http://localhost:3000/api/contacts/${props.contact.id}${props.product.id}`, requestOptions)
        const responseJson = await response.json()
        console.log(responseJson)

        if (responseJson.statusCode === 200) {
            props.patch(responseJson.data)
            setShowInput(false)
            setFirstNameInput("")
            setLastNameInput("")
            setEmailInput("")
            setMessageInput("")
        }

        else {
            return
        }
    }

    function update() {
        setShowInput(true)
    }

    return (

        <>
            {/* <tr key={props.contact.id}>
                    <td>{props.contact.id}</td>
                    <td>{props.contact.firstName}</td>
                    <td>{props.contact.lastName}</td>
                    <td>{props.contact.email}</td>
                    <td>{props.contact.message}</td>
                    

                    <td>

                        <button onClick={updateContacts} type="button" className="btn">

                        </button>

                        <button onClick={deleteContacts} type="button" className="btn " >
                        </button>
                    </td>

                </tr>
                {showInput && <tr>

                    <td></td>

                    <td>
                        <input type='text' className="form-control" value={firstNameInput} onChange={(e) => setFirstNameInput(e.target.value)} aria-label="Recipient's username" aria-describedby="button-addon2"></input>
                    </td >

                    <td>
                        <input type='text' className="form-control" value={lastNameInput} onChange={(e) => setLastNameInput(e.target.value)} aria-label="Recipient's username" aria-describedby="button-addon2"></input>
                    </td>

                    <td>
                        <input type='text' className="form-control" value={emailInput} onChange={(e) => setEmailInput(e.target.value)} aria-label="Recipient's username" aria-describedby="button-addon2"></input>
                    </td>

                    <td>
                        <input type='text' className="form-control" value={messageInput} onChange={(e) => setMessageInput(e.target.value)} aria-label="Recipient's username" aria-describedby="button-addon2"></input>
                    </td>

                    <td>
                        <button onClick={patchContacts} type="button" className="btn btn-primary">Valider</button>
                    </td>

                </tr >}
                 */}

        </>

    )
}
