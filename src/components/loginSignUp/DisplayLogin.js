import { useContext } from "react";
import { UserContext } from "../../context/userContext";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { ScreenGeneral, ErrorMessage } from "../Styles/StyledForms";
import axios from "axios";

export default function DisplayLogin() {
  const { setUserInfo } = useContext(UserContext);
  //quando usa o context, tem que lembrar de chamar ele como constante onde for ser utilizado

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [buttonMessage, setButtonMessage] = useState("Entrar");
  const [errorSignUp, setErrorSignUp] = useState("");
  const [errorCheck, setErrorCheck] = useState(false);

  const navigate = useNavigate();

  function sendLogin(event) {
    alert("Fuichamado!!");
    event.preventDefault();
    if (!email || !password) {
      setErrorCheck(true);
      setErrorSignUp("Por favor, preencha todos os campos!");
      return;
    }
    const req = axios.post("http://localhost:5000/login", {
      email: email,
      password: password,
    });
    req.then((res) => {
      setUserInfo(res.data);
      setErrorCheck(false);
      setErrorSignUp("");
      navigate("/inicio");
    });
    req.catch((error) => {
      setErrorCheck(true);
      setErrorSignUp(error.response.data);
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
        <ErrorMessage backError={errorCheck}>{errorSignUp}</ErrorMessage>
        <button type="submit">{buttonMessage}</button>
      </form>
      <Link to={"/cadastro"}>
        <span>Primeira vez? Cadastre-se!</span>
      </Link>
    </ScreenGeneral>
  );
}
