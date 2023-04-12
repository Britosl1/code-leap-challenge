import { useEffect, useState } from "react";
import { CreatePostModal } from "../../components/CreatePostModal";
import { NavBar } from "../../components/NavBar";
import { ShowPostModal } from "../../components/ShowPostModal";
import { MainContainer } from "./styles";
import { UserPost, getPosts } from "../../services/posts";

export function Main() {
  const [posts, setPosts] = useState<UserPost[]>();

  // console.log(posts?.map((d) => typeof d.create_datetime));
  // console.log(posts);

  useEffect(() => {
    getPosts().then((res) => setPosts(res));
  }, []);
  return (
    <>
      <NavBar />
      <MainContainer>
        <CreatePostModal />
        {posts?.map((post) => (
          <ShowPostModal
            postId={post.id}
            key={post.id}
            content={post.content}
            created_Datetime={post.created_datetime}
            title={post.title}
            username={post.username}
          />
        ))}
      </MainContainer>
    </>
  );
}
