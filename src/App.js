import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";
import { UserContext } from "./context/userContext";
import DisplayLogin from "./components/loginSignUp/DisplayLogin";
import DisplaySignUp from "./components/loginSignUp/DisplaySignUp";
export default function App() {
  const [userInfo, setUserInfo] = useState({});

  return (
    <div>
      <UserContext.Provider value={{ userInfo, setUserInfo }}>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<DisplayLogin />}></Route>
            <Route path="/cadastro" element={<DisplaySignUp />}></Route>
          </Routes>
        </BrowserRouter>
      </UserContext.Provider>
    </div>
  );
}
