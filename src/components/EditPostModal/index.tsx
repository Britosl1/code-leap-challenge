import { Buttons } from "../Buttons";
import { EditPostModalBackground, EditPostModalContainer } from "./styles";

interface IEditPostModalProps {
  onClose: () => void;
  onSave: () => void;
  isOpen: boolean;
  title?: string;
  content?: string;
  onChangeTitle?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onChangeContent?: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
}

export function EditPostModal({
  isOpen,
  onClose,
  onSave,
  title,
  content,
  onChangeContent,
  onChangeTitle,
}: IEditPostModalProps) {
  return isOpen ? (
    <EditPostModalBackground>
      <EditPostModalContainer>
        <h3>Edit item</h3>
        <label htmlFor="title">Title</label>
        <input
          type="text"
          placeholder="Hello World"
          value={title}
          onChange={onChangeTitle}
        />
        <label htmlFor="content">Content</label>
        <textarea
          id=""
          cols={30}
          rows={10}
          placeholder="Content here"
          value={content}
          onChange={onChangeContent}
        />
        <div>
          <Buttons.Secondary btnName="Cancel" onClick={onClose} />
          <Buttons.Success btnName="Save" onClick={onSave} />
        </div>
      </EditPostModalContainer>
    </EditPostModalBackground>
  ) : null;
}
