import { useContext } from "react";
import { UserContext } from "../../context/userContext";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { ScreenGeneral } from "./StyledLogSignUp";
import axios from "axios";

export default function DisplayLogin() {
  const { userInfo, setUserInfo } = useContext(UserContext);
  //quando usa o context, tem que lembrar de chamar ele como constante onde for ser utilizado

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [buttonMessage, setButtonMessage] = useState("Entrar");

  const navigate = useNavigate();

  function sendLogin(event) {
    alert("Fuichamado!!");
    event.preventDefault();
    if (!email || !password) {
      alert("Por favor, preencha todos os campos!");
    }
    const req = axios.post("http://localhost:5000/login", {
      email: email,
      password: password,
    });
    req.then((res) => {
      console.log(res);
      navigate("/cadastro");
    });
    req.catch((error) => {
      console.log(error);
    });
  }
  return (
    <ScreenGeneral>
      <form onSubmit={sendLogin}>
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
        <button type="submit">{buttonMessage}</button>
      </form>
      <Link to={"/cadastro"}>
        <span>Primeira vez? Cadastre-se!</span>
      </Link>
    </ScreenGeneral>
  );
}
