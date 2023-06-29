import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchPosts } from "../../store/actions/posts";
import { Post } from "./Post";
import { CircularProgress } from "@mui/material";
import "../../style/style.css";
import useTheme from "../../layout/ThemeSwitcher/theme";
import Theme from "../../constants/Theme";

const Home = () => {
  const {
    posts,
    loading: isLoading,
    error,
  } = useSelector((state: any) => state.posts);

  const dispatch = useDispatch();
  const theme = useTheme();

  useEffect(() => {
    dispatch(fetchPosts());
     if(!localStorage.getItem('theme'))
     {localStorage.setItem('theme', Theme.lightTheme)};
  }, []);

  if (error) {
    return (
      <div>
        <h1>{error}</h1>
      </div>
    );
  }
  return (
    <div className={theme}
      style={{
        display: "flex",
        justifyContent: "center",
      }}
    >
      {isLoading ? (
        <CircularProgress/>
      ) : (
        <div className={theme}>
          <header className={theme}/>
          {posts.map((post: any) => (
            <Post 
              id={post.id}
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
