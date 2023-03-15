import { useRef } from "react";


export function Login(props: any) {

    const pseudoRef = useRef<HTMLInputElement>(null);
    const passwordRef = useRef<HTMLInputElement>(null);

    const handleSubmitLogin = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        if (pseudoRef.current && passwordRef.current) {

            const body = JSON.stringify({
                pseudo: pseudoRef.current.value,
                password: passwordRef.current.value,
            });


            const options = {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: body,
            };

            fetch('http://localhost:3000/api/auth/login', options)
                .then(response => response.json())
                .then(response => {
                    if (response.statusCode === 200) {

                        props.setIsLogged(true);
                        props.setToken(response.data.access_token)
                        props.setPage('mon profil');

                        const body = JSON.stringify({
                            search: response.data.username
                        });
                        const options = {
                            method: 'POST',
                            headers: { 'Content-Type': 'application/json' },
                            body: body
                        };

                        fetch(`http://localhost:3000/api/users/search/`, options)
                            .then(response => response.json())
                            .then(response => props.setUserLogged(response.data))
                            .catch(err => console.error(err));
                    }
                    else {
                        console.log(response.error);
                    };
                })
                .catch(err => console.error(err));
        };
    };





    // Affichage
    return (
        <>
            <div>Se Connecter</div>
            <form className="row g-3" onSubmit={handleSubmitLogin}>

                <input
                    type="username"
                    className="form-control"
                    id="pseudoControl"
                    placeholder="Pseudo"
                    ref={pseudoRef}
                    required
                />


                <input
                    type="password"
                    className="form-control"
                    id="passwordControl"
                    placeholder="Password"
                    ref={passwordRef}
                    required
                />


                <button
                    type="submit"
                    className="btn btn-primary mb-3">
                    Se Connecter
                </button>

            </form>
        </>
    );

}