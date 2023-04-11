import "./App.css";
import { ShowPostModal } from "./components/ShowPostModal";
import { LoginModal } from "./components/LoginModal";
import { NavBar } from "./components/NavBar";
import { CreatePostModal } from "./components/CreatePostModal";

function App() {
  return (
    <>
      <NavBar />
      <LoginModal />
      <ShowPostModal />
      <CreatePostModal />
    </>
  );
}

export default App;
