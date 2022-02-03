import { ScreenGeneral } from "../Styles/StyledForms";
import { useState, useContext } from "react";
import { useNavigate, Link } from "react-router-dom";
import axios from "axios";
import { ErrorMessage } from "../Styles/StyledForms";
import { UserContext } from "../../context/userContext";
import(UserContext);
export default function DisplayIncome() {
  const { userInfo, setUserInfo } = useContext(UserContext);

  const [incomeDetail, setIncomeDetail] = useState("");
  const [incomeValue, setIncomeValue] = useState("");
  const [buttonMessage, setButtonMessage] = useState("Entrar");
  const [errorSignUp, setErrorSignUp] = useState("");
  const [errorCheck, setErrorCheck] = useState(false);
  const navigate = useNavigate;
  console.log(userInfo);

  function sendIncome(event) {
    alert("Fuichamado!!");
    event.preventDefault();
    if (!incomeValue || !incomeDetail) {
      setErrorCheck(true);
      setErrorSignUp("Por favor, preencha todos os campos!");
      return;
    }
    const req = axios.post("http://localhost:5000/incomeOperations", {
      value: incomeValue,
      detail: incomeDetail,
    });
    req.then((res) => {
      console.log(res);
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
      <form onSubmit={sendIncome}>
        <input
          placeholder="Valor"
          type="text"
          value={incomeValue}
          onChange={(e) => setIncomeValue(e.target.value)}
        />
        <input
          placeholder="Descrição"
          type="text"
          value={incomeDetail}
          onChange={(e) => setIncomeDetail(e.target.value)}
        />
        <ErrorMessage backError={errorCheck}>{errorSignUp}</ErrorMessage>
        <button type="submit">{buttonMessage}</button>
      </form>
    </ScreenGeneral>
  );
}
