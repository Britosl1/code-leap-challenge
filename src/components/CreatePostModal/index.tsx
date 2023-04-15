import { useEffect, useState } from "react";
import { Buttons } from "../Buttons";
import { CreatePostModalContainer } from "./styles";
import { UserPost } from "../../services/interfaces";
import { useCreatePostMutation } from "../../services/api";

export function CreatePostModal() {
  const [post, setPost] = useState<Partial<UserPost>>();
  const [isButtonDisabled, setIsButtonDisabled] = useState<boolean>(true);
  const [createPost] = useCreatePostMutation();

  const getUserName = localStorage.getItem("userName");

  const onChange = (
    event:
      | React.ChangeEvent<HTMLInputElement>
      | React.ChangeEvent<HTMLTextAreaElement>
  ) => {
    setPost({
      ...post,
      username: getUserName !== null ? getUserName : "",
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = async () => {
    await createPost(post!);
  };

  useEffect(() => {
    if (post?.title !== undefined && post.content !== undefined)
      if (post.title.length >= 3 && post.content.length >= 3)
        setIsButtonDisabled(false);
      else setIsButtonDisabled(true);
  }, [post?.title, post?.content, post]);
  return (
    <CreatePostModalContainer onSubmit={handleSubmit}>
      <h3>What’s on your mind?</h3>
      <label htmlFor="title">Title</label>
      <input
        type="text"
        name="title"
        value={post?.title}
        onChange={onChange}
        placeholder="Hello World"
      />
      <label htmlFor="content">Content</label>
      <textarea
        name="content"
        id=""
        cols={30}
        rows={10}
        placeholder="Content here"
        value={post?.content}
        onChange={onChange}
      />
      <div>
        <Buttons.Primary btnName="Create" isDisabled={isButtonDisabled} />
      </div>
    </CreatePostModalContainer>
  );
}
