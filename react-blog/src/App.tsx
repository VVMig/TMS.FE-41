import React, { useEffect } from "react";
import "./App.css";
import { useDispatch, useSelector } from "react-redux";
import { fetchPosts } from "./store/actions/posts.";

const App = () => {
  const {
    posts,
    loading: isLoading,
    error,
  } = useSelector((state: any) => state.posts);

  const dispatch = useDispatch();

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
      {isLoading ? "Loading..." : posts.map((post: any) => <p>{post.title}</p>)}
    </div>
  );
};

export default App;
