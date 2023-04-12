import "./App.css";
import { ShowPostModal } from "./components/ShowPostModal";
import { NavBar } from "./components/NavBar";
import { CreatePostModal } from "./components/CreatePostModal";
import { DeletePostModal } from "./components/DeletePostModal";
import { EditPostModal } from "./components/EditPostModal";

function App() {
  return (
    <>
      <NavBar />
      <ShowPostModal />
      <CreatePostModal />
      <DeletePostModal />
      <EditPostModal />
    </>
  );
}

export default App;
