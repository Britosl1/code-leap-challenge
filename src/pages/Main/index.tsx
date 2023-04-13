import { CreatePostModal } from "../../components/CreatePostModal";
import { NavBar } from "../../components/NavBar";
import { ShowPostModal } from "../../components/ShowPostModal";
import { MainContainer } from "./styles";
import { useGetPostsQuery } from "../../services/api";

export function Main() {
  const { data, isLoading } = useGetPostsQuery({});

  return (
    <>
      <NavBar />
      <MainContainer>
        <CreatePostModal />
        {data?.results.map((post: any) =>
          isLoading ? (
            <p>LOADING</p>
          ) : (
            <ShowPostModal
              postId={post.id}
              key={post.id}
              content={post.content}
              created_Datetime={post.created_datetime}
              title={post.title}
              username={post.username}
            />
          )
        )}
      </MainContainer>
    </>
  );
}
