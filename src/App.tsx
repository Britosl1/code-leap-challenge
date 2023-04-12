import { useEffect } from "react";
import "./App.css";
import { Main } from "./pages/Main";
import { useNavigate } from "react-router-dom";

function App() {
  const userIsOn = localStorage.getItem("userName");
  const navigate = useNavigate();

  useEffect(() => {
    if (userIsOn === null) navigate("/sign-up");
  });
  return (
    <>
      <Main />
    </>
  );
}

export default App;
