import { useState } from "react";
import { Buttons } from "../Buttons";
import { CreatePostModalContainer } from "./styles";
import { UserPost } from "../../services/posts";
import { useCreatePostMutation } from "../../services/api";

export function CreatePostModal() {
  const [post, setPost] = useState<Partial<UserPost>>();
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

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    await createPost(post!);
  };

  return (
    <CreatePostModalContainer
      onSubmit={(e: React.FormEvent<HTMLFormElement>) => handleSubmit(e)}
    >
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
        <Buttons.Primary
          btnName="Create"
          onClick={() => {
            console.log("teetet");
          }}
        />
      </div>
    </CreatePostModalContainer>
  );
}
