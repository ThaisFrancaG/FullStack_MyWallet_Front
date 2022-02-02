import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { ScreenGeneral } from "./StyledLogSignUp";
import axios from "axios";

export default function DisplaySignUp() {
  //quando usa o context, tem que lembrar de chamar ele como constante onde for ser utilizado
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirmation, setPasswordConfirmation] = useState("");

  const [buttonMessage, setButtonMessage] = useState("Cadastrar");

  const navigate = useNavigate();

  function sendSignUp(event) {
    alert("Fuichamado!!");
    event.preventDefault();
    if (!email || !password) {
      return alert("Por favor, preencha todos os campos!");
    }
    if (name.length < 3) {
      return alert("Por favor, crie um nome com mais de três dígitos");
    }
    if (password.length < 6) {
      return alert("A senha deve ter, no mínimo, seis dígitos!");
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
      navigate("/inicio");
    });
    req.catch((error) => {
      console.log(error);
      alert(error.response.data);
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
        />
        <input
          placeholder="E-mail"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          placeholder="Senha"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <input
          placeholder="Confirme a senha"
          type="password"
          value={passwordConfirmation}
          onChange={(e) => setPasswordConfirmation(e.target.value)}
        />
        <button type="submit">{buttonMessage}</button>
      </form>
      <Link to={"/"}>
        <span>Já tem uma conta? Entre agora!</span>
      </Link>
    </ScreenGeneral>
  );
}
