import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Post } from "./Post";
import { CircularProgress } from "@mui/material";
import { fetchPosts } from "../../store/actions/posts";
import { Link } from "react-router-dom";
import { Routes } from "../../constants/Routes";
import "./styles.css";
import { RootState } from "../../store";


const Home = () => {
  const {
    posts,
    loading: isLoading,
    error,
  } = useSelector((state: RootState) => state.posts);

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
        <div className="postsWrapper">
          <div className="leftColumn">
            {posts.slice(0, 5).map((post)=><div style={{backgroundColor: "red", width: "100%", height: 50}}/>)}
          </div>
          <div className="rightColumn">
          {posts.slice(6, 11).map((post)=><div style={{backgroundColor: "blue", width: "100%", height: 50}}/>)}
          </div>




          {posts.map((post: any) => (
            <Link to={Routes.Post.replace(":id", post.id)}>
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
