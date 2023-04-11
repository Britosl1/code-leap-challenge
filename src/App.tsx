import "./App.css";
import { ShowPostModal } from "./components/ShowPostModal";
import { LoginModal } from "./components/LoginModal";
import { NavBar } from "./components/NavBar";

function App() {
  return (
    <>
      <NavBar />
      <LoginModal />
      <ShowPostModal />
    </>
  );
}

export default App;
