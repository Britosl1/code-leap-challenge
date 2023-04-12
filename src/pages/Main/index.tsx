import { CreatePostModal } from "../../components/CreatePostModal";
import { DeletePostModal } from "../../components/DeletePostModal";
import { EditPostModal } from "../../components/EditPostModal";
import { NavBar } from "../../components/NavBar";
import { ShowPostModal } from "../../components/ShowPostModal";
import { MainContainer } from "./styles";

export function Main() {
  return (
    <>
      <NavBar />
      <MainContainer>
        <CreatePostModal />
        <ShowPostModal />
        <DeletePostModal />
        <EditPostModal />
      </MainContainer>
    </>
  );
}
