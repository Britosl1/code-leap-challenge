import "./App.css";
import { ShowPostModal } from "./components/ShowPostModal";
import { LoginModal } from "./components/LoginModal";
import { NavBar } from "./components/NavBar";
import { CreatePostModal } from "./components/CreatePostModal";
import { DeletePostModal } from "./components/DeletePostModal";

function App() {
  return (
    <>
      <NavBar />
      <LoginModal />
      <ShowPostModal />
      <CreatePostModal />
      <DeletePostModal />
    </>
  );
}

export default App;
