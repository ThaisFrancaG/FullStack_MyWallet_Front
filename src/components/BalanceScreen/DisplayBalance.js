import { useContext } from "react";
import { UserContext } from "../../context/userContext";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { MainScreen, TelaPrincipal } from "../Styles/StyledBalance";
import axios from "axios";

export default function DisplayBalance() {
  return (
    <MainScreen>
      <header>
        <span>Olá, Fulano!</span>
        <span>Deslogar</span>
      </header>
      <TelaPrincipal></TelaPrincipal>
    </MainScreen>
  );
}
