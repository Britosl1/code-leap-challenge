import { useState } from "react";
import { DeletePostModal } from "../DeletePostModal";
import {
  ShowPostModalBottomContainer,
  ShowPostModalContainer,
  ShowPostModalTopContainer,
} from "./styles";
import { EditPostModal } from "../EditPostModal";

export function ShowPostModal() {
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState<boolean>(false);
  const [isEditModalOpen, setIsEditModalOpen] = useState<boolean>(false);

  return (
    <ShowPostModalContainer>
      <ShowPostModalTopContainer>
        My First Post at CodeLeap Network!
        <div>
          <button onClick={() => setIsEditModalOpen(true)}>Update</button>
          <button onClick={() => setIsDeleteModalOpen(true)}>Delete</button>
        </div>
      </ShowPostModalTopContainer>
      <ShowPostModalBottomContainer>
        <div>
          <span>@Victor</span>
          <span>25 minutes ago</span>
        </div>
        <p>
          Curabitur suscipit suscipit tellus. Phasellus consectetuer vestibulum
          elit. Pellentesque habitant morbi tristique senectus et netus et
          malesuada fames ac turpis egestas. Maecenas egestas arcu quis ligula
          mattis placerat. Duis vel nibh at velit scelerisque suscipit. Duis
          lobortis massa imperdiet quam. Aenean posuere, tortor sed cursus
          feugiat, nunc augue blandit nunc, eu sollicitudin urna dolor sagittis
          lacus. Fusce a quam. Nullam vel sem. Nullam cursus lacinia erat.
        </p>
      </ShowPostModalBottomContainer>
      {isDeleteModalOpen && (
        <DeletePostModal
          isOpen={isDeleteModalOpen}
          onClose={() => setIsDeleteModalOpen(!isDeleteModalOpen)}
          onDelete={() => setIsDeleteModalOpen(!isDeleteModalOpen)}
        />
      )}
      {isEditModalOpen && (
        <EditPostModal
          isOpen={isEditModalOpen}
          onClose={() => setIsEditModalOpen(!isEditModalOpen)}
          onSave={() => setIsEditModalOpen(!isEditModalOpen)}
        />
      )}
    </ShowPostModalContainer>
  );
}
