import { Buttons } from "../Buttons";
import { EditPostModalBackground, EditPostModalContainer } from "./styles";

interface IEditPostModalProps {
  onClose: () => void;
  onSave: () => void;
  isOpen: boolean;
  title?: string | number | readonly string[] | undefined;
  content?: string | number | readonly string[] | undefined;
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
  const getUser = localStorage.getItem("userName") !== null;

  return isOpen ? (
    <EditPostModalBackground>
      <EditPostModalContainer>
        <h3>Edit item</h3>
        <label htmlFor="title">Title</label>
        <input
          type="text"
          placeholder="Hello World"
          defaultValue={title}
          onChange={onChangeTitle}
          name="Title"
        />
        <label htmlFor="content">Content</label>
        <textarea
          cols={30}
          rows={10}
          placeholder="Content here"
          defaultValue={content}
          onChange={onChangeContent}
          name="Content"
        />
        {getUser ? (
          <div>
            <Buttons.Secondary btnName="Cancel" onClick={onClose} />
            <Buttons.Success btnName="Save" onClick={onSave} />
          </div>
        ) : null}
      </EditPostModalContainer>
    </EditPostModalBackground>
  ) : null;
}
