import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchPosts } from "../../store/actions/posts";
import { Post } from "./Post";
import { CircularProgress, Pagination } from "@mui/material";
import "../.././style/style.css";
import { useAppDispatch } from "../../hooks/useDispatch";
import { RootState } from "../../store";

// import { Link } from "react-router-dom";
// import { Routes } from "../../constants/Routes";
// import { useSelector} from "react-redux";
// import { fetchPosts } from "../../store/actions/posts";

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
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      {isLoading ? (
        <CircularProgress />
      ) : (
          <div className="posts">
            <div className="posts__firstColumn">
              {posts.slice(0, 3).map((post: any) => (
                <Post
                  id={post.id}
                  key={post.id}
                  title={post.title}
                  text={post.text}
                  src={post.image}
                  maxHeight="300px"
                  maxWidth={400}
                  marginTop={12}
                />
              ))}
            </div>
            <div className="posts__secondColumn">
              {posts.slice(3, 6).map((post: any) => (
                <Post
                  id={post.id}
                  key={post.id}
                  title={post.title}
                  text={post.text}
                  src={post.image}
                  maxHeight="300px"
                  maxWidth={400}
                  marginTop={12}
                />
              ))}
            </div>
            <div className="posts__thirdColumn">
              {posts.slice(6, 11).map((post: any) => (
                <Post
                  id={post.id}
                  key={post.id}
                  title={post.title}
                  text={post.text}
                  src={post.image}
                  maxHeight="90px"
                  maxWidth={200}
                  marginTop={12}
                />
              ))}
            </div>
          </div>
      )}
    </div>
  );
};
export default Home;
