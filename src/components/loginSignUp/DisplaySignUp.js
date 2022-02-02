import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { ScreenGeneral, ErrorMessage } from "./StyledLogSignUp";
import axios from "axios";

export default function DisplaySignUp() {
  //quando usa o context, tem que lembrar de chamar ele como constante onde for ser utilizado
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirmation, setPasswordConfirmation] = useState("");

  const [buttonMessage, setButtonMessage] = useState("Cadastrar");
  const [errorSignUp, setErrorSignUp] = useState("");
  const [errorCheck, setErrorCheck] = useState(false);

  const navigate = useNavigate();

  function sendSignUp(event) {
    alert("Fuichamado!!");
    event.preventDefault();
    if (!email || !password) {
      setErrorCheck(true);
      setErrorSignUp("Por favor, preencha todos os campos!");
      return;
    }
    if (name.length < 3) {
      setErrorCheck(true);
      setErrorSignUp("Por favor, crie um nome com mais de três dígitos");
      return alert;
    }
    if (password.length < 6) {
      setErrorCheck(true);
      setErrorSignUp("A senha deve ter, no mínimo, seis dígitos!");
      return;
    }
    console.log("Chegou na requisição, ó");
    const req = axios.post("http://localhost:5000/signup", {
      name: name,
      email: email,
      password: password,
      passwordConfirmation: passwordConfirmation,
    });
    req.then((res) => {
      console.log(res);
      setErrorCheck(false);
      setErrorSignUp("");
      navigate("/inicio");
    });
    req.catch((error) => {
      console.log(error);
      setErrorCheck(true);
      setErrorSignUp(error.response.data);
    });
  }
  return (
    <ScreenGeneral>
      <form onSubmit={sendSignUp}>
        <input
          placeholder="Nome"
          type="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          onInvalid={(e) =>
            e.target.setCustomValidity("Por favor, preencha com um nome válido")
          }
        />
        <input
          placeholder="E-mail"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          onInvalid={(e) =>
            e.target.setCustomValidity(
              "Por favor, preencha com um email válido!"
            )
          }
        />
        <input
          placeholder="Senha"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          onInvalid={(e) =>
            e.target.setCustomValidity(
              "Por favor, utilize formato válido. A senha deve ter no mínimo 6 carácteres e um número!"
            )
          }
        />
        <input
          placeholder="Confirme a senha"
          type="password"
          value={passwordConfirmation}
          onChange={(e) => setPasswordConfirmation(e.target.value)}
        />
        <ErrorMessage backError={errorCheck}>{errorSignUp}</ErrorMessage>
        <button type="submit">{buttonMessage}</button>
      </form>
      <Link to={"/"}>
        <span>Já tem uma conta? Entre agora!</span>
      </Link>
    </ScreenGeneral>
  );
}
