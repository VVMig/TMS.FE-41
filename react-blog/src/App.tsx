import React, { useEffect } from "react";
import "./App.css";
import { useSelector } from "react-redux";
import { fetchPosts } from "./store/actions/posts";
import { useAppDispatch } from "./hooks/useDispatch";
import "layout/.Header/header.css";
import Header from "./layout/Header";

const App = () => {
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
    <div>
      <Header />
      <div>
        {isLoading
          ? "Loading..."
          : posts.map((post: any) => <p>{String(post.title)}</p>)}
      </div>
    </div>
  );
};

export default App;