import "./App.css";
import { CreatePostModal } from "./components/CreatePostModal";
import { LoginModal } from "./components/LoginModal";
import { NavBar } from "./components/NavBar";

function App() {
  return (
    <>
      <NavBar />
      <LoginModal />
      <CreatePostModal />
    </>
  );
}

export default App;
