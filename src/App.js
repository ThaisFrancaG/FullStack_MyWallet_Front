import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";
import { UserContext } from "./context/userContext";
import DisplayLogin from "./components/loginSignUp/DisplayLogin";
import DisplaySignUp from "./components/loginSignUp/DisplaySignUp";
import DisplayBalance from "./components/BalanceScreen/DisplayBalance";
import DisplayIncome from "./components/InsOuts/DisplayIncome";
import DisplayExpense from "./components/InsOuts/DisplayExpense";
export default function App() {
  const [userInfo, setUserInfo] = useState("");

  return (
    <div>
      <UserContext.Provider value={{ userInfo, setUserInfo }}>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<DisplayLogin />}></Route>
            <Route path="/cadastro" element={<DisplaySignUp />}></Route>
            <Route path="/inicio" element={<DisplayBalance />}></Route>
            <Route path="/entrada" element={<DisplayIncome />}></Route>
            <Route path="/saida" element={<DisplayExpense />}></Route>
          </Routes>
        </BrowserRouter>
      </UserContext.Provider>
    </div>
  );
}
