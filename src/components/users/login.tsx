import { useRef } from "react";
import "./style/styleLogin.css";

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
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: body,
      };
      console.log(body);

      fetch("http://localhost:3000/api/auth/login", options)
        .then((response) => response.json())
        .then((response) => {
          if (response.statusCode === 200) {
            console.log(response.data);

            props.setIsLogged(true);
            props.setToken(response.data.access_token);
            props.setUsername(response.data.username);
            props.setPage("mon profil");
          } else {
            console.log(response.error);
            alert("Identifiants incorrects. Veuillez réessayer.");
          }
        })
        .catch((err) => console.error(err));
    }
  };

  // Affichage
  return (
    <>
      <div className="bg-image"></div>

      <div>Se Connecter</div>
      <form
        className="row g-3"
        onSubmit={handleSubmitLogin}
        style={{
          position: "absolute",
          top: "70%",
          left: "50%",
          transform: "translate(-50%, -50%",
        }}
      >
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

        <button type="submit" className="btn btn-primary mb-3">
          Se Connecter
        </button>
      </form>
    </>
  );
}
