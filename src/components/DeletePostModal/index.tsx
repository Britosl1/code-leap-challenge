import { Buttons } from "../Buttons";
import { DeletePostModalBackground, DeletePostModalContainer } from "./styles";

interface IDeletePostModalProps {
  onClose: () => void;
  onDelete: () => void;
  isOpen: boolean;
}

export function DeletePostModal({
  isOpen,
  onClose,
  onDelete,
}: IDeletePostModalProps) {
  return isOpen ? (
    <DeletePostModalBackground>
      <DeletePostModalContainer>
        <h3>Are you sure you want to delete this item?</h3>
        <div>
          <Buttons.Secondary btnName="Cancel" onClick={onClose} />
          <Buttons.Danger btnName="Delete" onClick={onDelete} />
        </div>
      </DeletePostModalContainer>
    </DeletePostModalBackground>
  ) : null;
}
