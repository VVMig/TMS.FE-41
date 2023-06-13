import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchPosts } from "../../store/actions/posts.";
import { Post } from "./Post";
import { CircularProgress } from "@mui/material";

const Home = () => {
  const {
    posts,
    loading: isLoading,
    error,
  } = useSelector((state: any) => state.posts);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchPosts());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (error) {
    return (
      <div>
        <h1>{error}</h1>
      </div>
    );
  }

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
      }}
    >
      {isLoading ? (
        <CircularProgress />
      ) : (
        <div>
          {posts.map((post: any) => (
            <Post
              key={post.id}
              title={post.title}
              text={post.text}
              src={post.image}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default Home;
