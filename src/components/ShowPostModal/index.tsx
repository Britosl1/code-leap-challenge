import { useState } from "react";
import { DeletePostModal } from "../DeletePostModal";
import {
  ShowPostModalBottomContainer,
  ShowPostModalContainer,
  ShowPostModalTopContainer,
} from "./styles";
import { EditPostModal } from "../EditPostModal";
import { timeSince } from "../../utils";

interface IShowPostModalProps {
  content: string;
  created_Datetime: string;
  title: string;
  username: string;
}

export function ShowPostModal({
  title,
  username,
  created_Datetime,
  content,
}: IShowPostModalProps) {
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState<boolean>(false);
  const [isEditModalOpen, setIsEditModalOpen] = useState<boolean>(false);

  return (
    <ShowPostModalContainer>
      <ShowPostModalTopContainer>
        {title}
        <div>
          <button onClick={() => setIsEditModalOpen(true)}>Update</button>
          <button onClick={() => setIsDeleteModalOpen(true)}>Delete</button>
        </div>
      </ShowPostModalTopContainer>
      <ShowPostModalBottomContainer>
        <div>
          <span>{`@${username}`}</span>
          <span>{created_Datetime} ago</span>
        </div>
        <p>{content}</p>
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
