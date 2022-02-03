import { useContext, useEffect, useState } from "react";
import { UserContext } from "../../context/userContext";
import { Link, useNavigate } from "react-router-dom";
import { MainScreen, BalanceScreen } from "../Styles/StyledBalance";
import axios from "axios";
import { FiLogOut } from "react-icons/fi";
import DisplayLogin from "../loginSignUp/DisplayLogin";
export default function DisplayBalance() {
  const { userInfo, setUserInfo } = useContext(UserContext);
  const [defaultDisplay, setDefaultDisplay] = useState("Carregando...");
  const [errorCheck, setErrorCheck] = useState(false);

  const navigate = useNavigate();

  // if (userInfo.length === 0) {
  //   console.log("caiAqui");

  //   navigate("/");
  //alterar para uma tela intermediaria de navegação

  console.log(userInfo);

  const getAuthorization = {
    Authorization: `Bearer ${userInfo}`,
  };
  useEffect(() => {
    console.log("fui carregado");
    const promisse = axios.get("http://localhost:5000/checkBalance", {
      headers: getAuthorization,
    });
    promisse.then((res) => {
      console.log(res.data);
      setDefaultDisplay(res.data);

      promisse.catch((error) => {
        console.log(error);
        setErrorCheck(true);
        setDefaultDisplay(error.response.data);
      });
    });
  }, []);

  return (
    <MainScreen>
      <header>
        <span>Olá, Fulano!</span>
        <span>
          <Link to={"/"}>
            <FiLogOut />
          </Link>
        </span>
      </header>
      <BalanceScreen>{defaultDisplay}</BalanceScreen>
    </MainScreen>
  );
}
