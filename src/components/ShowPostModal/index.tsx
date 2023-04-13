import { useEffect, useState } from "react";
import { DeletePostModal } from "../DeletePostModal";
import {
  ShowPostModalBottomContainer,
  ShowPostModalContainer,
  ShowPostModalTopContainer,
} from "./styles";
import { EditPostModal } from "../EditPostModal";
import { timeSince } from "../../utils";
import {
  UserPost,
  deleteUniquePost,
  getUniquePost,
} from "../../services/posts";
// import { deleteSiglePost } from "../../redux/slice";

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

  const deletePost = (id: number) => {
    deleteUniquePost(id);
    setIsDeleteModalOpen(!isDeleteModalOpen);
  };

  useEffect(() => {
    getUniquePost(postId).then((res) => {
      setPost({ ...res, content: res.content, title: res.title });
    });
  }, [postId]);

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
