import { Buttons } from "../Buttons";
import { EditPostModalContainer } from "./styles";

export function EditPostModal() {
  return (
    <EditPostModalContainer>
      <h3>Edit item</h3>
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
        <Buttons.Secondary btnName="Cancel" onClick={() => {}} />
        <Buttons.Success btnName="Save" onClick={() => {}} />
      </div>
    </EditPostModalContainer>
  );
}
