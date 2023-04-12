import { Buttons } from "../Buttons";
import { EditPostModalBackground, EditPostModalContainer } from "./styles";

interface IEditPostModalProps {
  onClose: () => void;
  onSave: () => void;
  isOpen: boolean;
}

export function EditPostModal({
  isOpen,
  onClose,
  onSave,
}: IEditPostModalProps) {
  return isOpen ? (
    <EditPostModalBackground>
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
          <Buttons.Secondary btnName="Cancel" onClick={onClose} />
          <Buttons.Success btnName="Save" onClick={onSave} />
        </div>
      </EditPostModalContainer>
    </EditPostModalBackground>
  ) : null;
}
