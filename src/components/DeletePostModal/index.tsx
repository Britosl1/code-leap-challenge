import { Buttons } from "../Buttons";
import { DeletePostModalContainer } from "./styles";

export function DeletePostModal() {
  return (
    <DeletePostModalContainer>
      <h3>Are you sure you want to delete this item?</h3>
      <div>
        <Buttons.Secondary btnName="Cancel" onClick={() => {}} />
        <Buttons.Danger btnName="Delete" onClick={() => {}} />
      </div>
    </DeletePostModalContainer>
  );
}
