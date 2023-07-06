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
        <div className="posts">
          <div className="posts__mainFirstColumn">
          {posts.slice(0,3).map((post: any) => (
            <Post 
              id={post.id}
              key={post.id}
              title={post.title}
              text={post.text}
              src={post.image}
              postHeight="300px"
              maxWidth={400}
              marginTop={12}
            />
          ))}
          </div>
          <div className="posts__mainSecondColumn">
          {posts.slice(3,6).map((post: any) => (
            <Post 
              id={post.id}
              key={post.id}
              title={post.title}
              text={post.text}
              src={post.image}
              postHeight="300px"
              maxWidth={400}
              marginTop={12}
            />
          ))}
          </div>
          <div className="posts__rightSide">
          {posts.slice(6,11).map((post: any) => (
            <Post 
              id={post.id}
              key={post.id}
              title={post.title}
              text={post.text}
              src={post.image}
              postHeight="91px"
              maxWidth={200}
              marginTop={12}
            />
          ))}
          </div>
        </div>
      </div>
      )}
    </div>
  );
};

export default Home;
