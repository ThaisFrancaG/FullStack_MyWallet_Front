import { useContext } from "react";
import { UserContext } from "../../context/userContext";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { ScreenGeneral } from "./StyledLogSignUp";

export default function DisplayLogin() {
  const { userInfo, setUserInfo } = useContext(UserContext);
  //quando usa o context, tem que lembrar de chamar ele como constante onde for ser utilizado

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [buttonMessage, setButtonMessage] = useState("Entrar");

  const navigate = useNavigate();

  function sendLogin(event) {
    event.preventDefault();
  }
  return (
    <ScreenGeneral>
      <form onSubmit={sendLogin}>
        <input
          placeholder="email"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          placeholder="senha"
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
