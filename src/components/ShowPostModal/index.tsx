import { useEffect, useState } from "react";
import { DeletePostModal } from "../DeletePostModal";
import {
  ShowPostModalBottomContainer,
  ShowPostModalContainer,
  ShowPostModalTopContainer,
} from "./styles";
import { EditPostModal } from "../EditPostModal";
import { UserPost } from "../../services/posts";
import {
  useDeleteUniquePostQuery,
  useGetUniquePostQuery,
} from "../../services/api";

interface IShowPostModalProps {
  content: string;
  created_Datetime: string;
  title: string;
  username: string | null;
  postId: number;
}

export function ShowPostModal({
  title,
  username,
  created_Datetime,
  content,
  postId,
}: IShowPostModalProps) {
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState<boolean>(false);
  const [isEditModalOpen, setIsEditModalOpen] = useState<boolean>(false);
  const [post, setPost] = useState<UserPost>();
  const { data, isSuccess } = useGetUniquePostQuery(postId);
  const { isSuccess: isSuccessDelete } = useDeleteUniquePostQuery(postId);

  const deletePost = (id: number) => {
    if (isSuccessDelete) {
      setIsDeleteModalOpen(!isDeleteModalOpen);
    }
  };

  useEffect(() => {
    if (isSuccess) {
      setPost({ ...data, content: data.content, title: data.title });
    }
  }, [postId, data, isSuccess]);

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
          onDelete={() => deletePost(postId)}
        />
      )}
      {isEditModalOpen && (
        <EditPostModal
          content={post?.content}
          title={post?.title}
          // onChangeTitle={(e: React.ChangeEvent<HTMLInputElement>) =>
          //   setPost({ title: e.currentTarget.value })
          // }
          // onChangeContent={(e: React.ChangeEvent<HTMLTextAreaElement>) =>
          //   setPostContent(e.currentTarget.value)
          // }
          isOpen={isEditModalOpen}
          onClose={() => setIsEditModalOpen(!isEditModalOpen)}
          onSave={() => setIsEditModalOpen(!isEditModalOpen)}
        />
      )}
    </ShowPostModalContainer>
  );
}
