import { useContext } from "react";
import { UserContext } from "../../context/userContext";

export default function DisplayLogin() {
  const { userInfo, setUserInfo } = useContext(UserContext);
  //quando usa o context, tem que lembrar de chamar ele como constante onde for ser utilizado
}
