import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchPosts } from "../../store/actions/posts";
import { Post } from "./Post";
import { CircularProgress } from "@mui/material";
import { useAppDispatch } from "../../hooks/useAppDistach";
import { Link } from "react-router-dom";
import { Routes } from "../../constants/Routes";

const Home = () => {
  const {
    posts,
    loading: isLoading,
    error,
  } = useSelector((state: any) => state.posts);

  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchPosts());
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
            <Link to={Routes.Post}>
              <Post
                key={post.id}
                title={post.title}
                text={post.text}
                src={post.image}
              />
            </Link>
          ))}
        </div>
      )}
    </div>
  );
};

export default Home;
