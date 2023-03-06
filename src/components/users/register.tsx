import { useRef, useState } from "react";
import { Login } from "./login";
import "./style/styleRegister.css"


export function Register(props: any) {

    const [returnToLogin, setReturnToLogin] = useState(false);

    const pseudoRef = useRef<HTMLInputElement>(null);
    const emailRef = useRef<HTMLInputElement>(null);
    const passwordRef = useRef<HTMLInputElement>(null);

    const handleSubmitRegister = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        if (pseudoRef.current && emailRef.current && passwordRef.current) {

            const body = JSON.stringify({
                pseudo: pseudoRef.current.value,
                email: emailRef.current.value,
                password: passwordRef.current.value,
            });


            const options = {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: body,
            };

            fetch('http://localhost:3000/api/users/register', options)
                .then(response => response.json())
                .then(response => {

                    if (response.statusCode === 201)
                        setReturnToLogin(true)

                    else {
                        console.log(response.error);
                    };
                })
                .catch(err => console.error(err));
        };

    };

    if (returnToLogin) {
        return <Login />
    };


    // Affichage
    return (
        <>

            <div className="bg-image">
            </div>
            
            <form className="row g-3" onSubmit={handleSubmitRegister} style={{position: "absolute", top: "70%", left: "50%", transform: "translate(-50%, -50%"}}>

                <input
                    type="username"
                    className="form-control"
                    id="pseudoControl"
                    placeholder="Pseudo"
                    ref={pseudoRef}
                    required
                />

                <input
                    type="email"
                    className="form-control"
                    id="emailControl"
                    placeholder="Email"
                    ref={emailRef}
                    required
                />


                <input
                    type="pass"
                    className="form-control"
                    id="passwordControl"
                    placeholder="Password"
                    ref={passwordRef}
                    required
                />


                <button
                    type="submit"
                    className="btn btn-primary mb-3"
                >
                    S'enregistrer
                </button>

            </form>
        </>
    );

}