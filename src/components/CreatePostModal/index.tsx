import { Buttons } from "../Buttons";
import { CreatePostModalContainer } from "./styles";

export function CreatePostModal() {
  return (
    <CreatePostModalContainer>
      <h3>What’s on your mind?</h3>
      <label htmlFor="title">Title</label>
      <input type="text" name="title" id="" placeholder="Hello World" />
      <label htmlFor="content">Content</label>
      <textarea
        name="content"
        id=""
        cols={30}
        rows={10}
        placeholder="Content here"
      />
      <div>
        <Buttons.Primary
          btnName="Create"
          onClick={() => {
            console.log("teetet");
          }}
          // isDisabled={true}
        />
      </div>
    </CreatePostModalContainer>
  );
}
