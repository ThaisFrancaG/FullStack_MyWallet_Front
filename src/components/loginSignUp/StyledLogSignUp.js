import styled from "styled-components";

export const ScreenGeneral = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;

  justify-content: center;
  align-items: center;

  background-color: #8c11be;

  form {
    display: flex;
    flex-direction: column;

    justify-content: center;
    align-items: center;

    row-gap: 15px;
    margin-bottom: 40px;
  }
  input {
    width: 326px;
    height: 58px;

    font-size: 20px;
    font-weight: 700;
    color: #000000;

    border: none;
    border-radius: 5px;
    padding-left: 25px;

    background-color: #ffffff;
  }

  button {
    width: 326px;
    height: 58px;
    background-color: #a328d6;
    border: none;
    border-radius: 5px;

    font-size: 20px;
    font-weight: 700;
    color: #ffffff;
  }
  span {
    font-weight: 700;
    size: 15px;
    color: #ffffff;
  }
`;
