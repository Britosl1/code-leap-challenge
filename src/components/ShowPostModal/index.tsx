import { useEffect, useState } from "react";
import { DeletePostModal } from "../DeletePostModal";
import {
  ShowPostModalBottomContainer,
  ShowPostModalContainer,
  ShowPostModalTopContainer,
} from "./styles";
import { EditPostModal } from "../EditPostModal";
import {
  useDeleteUniquePostQuery,
  useGetUniquePostQuery,
  useUpdateUniquePostMutation,
} from "../../services/api";

interface IShowPostModalProps {
  content: string;
  created_Datetime: string;
  title: string;
  username: string | null;
  postId: number;
}

type UserPostLocal = {
  id?: number | undefined;
  username?: string | undefined;
  created_datetime?: string | undefined;
  title?: string | undefined;
  content?: string | undefined;
};

export function ShowPostModal({
  title,
  username,
  created_Datetime,
  content,
  postId,
}: IShowPostModalProps) {
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState<boolean>(false);
  const [isEditModalOpen, setIsEditModalOpen] = useState<boolean>(false);
  const [post, setPost] = useState<UserPostLocal>();
  const { data, isSuccess } = useGetUniquePostQuery(postId);
  const { isSuccess: isSuccessDelete } = useDeleteUniquePostQuery(postId);
  const [updateUniquePost] = useUpdateUniquePostMutation();

  const deletePost = (id: number) => {
    if (isSuccessDelete) {
      setIsDeleteModalOpen(!isDeleteModalOpen);
    }
  };
  const onChange = (
    event:
      | React.ChangeEvent<HTMLInputElement>
      | React.ChangeEvent<HTMLTextAreaElement>
  ) => {
    setPost({
      ...post,
      [event.target.name]: event.target.value,
    });
  };
  const updatePost = () => {
    updateUniquePost({
      postId: postId,
      post: { content: post?.content, title: post?.title },
    });
    setIsEditModalOpen(!isEditModalOpen);
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
          onChangeTitle={onChange}
          onChangeContent={onChange}
          isOpen={isEditModalOpen}
          onClose={() => setIsEditModalOpen(!isEditModalOpen)}
          onSave={updatePost}
        />
      )}
    </ShowPostModalContainer>
  );
}
