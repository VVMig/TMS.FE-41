import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Post } from "../common";
import { CircularProgress, Pagination } from "@mui/material";
import { fetchPosts } from "../../store/actions/posts";
import "./styles.scss";
import { RootState } from "../../store";
import { Link } from "react-router-dom";
import { Routes } from "../../constants/Routes";

const Home = () => {
  const {
    posts,
    loading: isLoading,
    error,
    count,
  } = useSelector((state: RootState) => state.posts);

  const [page, setPage] = useState(1);

  const handleChange = (_: React.ChangeEvent<unknown>, value: number) => {
    setPage(value);
  };

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchPosts(page));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [page]);

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
        <>
          <div className="postsWrapper">
            <div className="leftColumn">
              {posts.slice(0, 6).map((post: any) => (
                <Link
                  to={Routes.Post.replace(":id", post.id)}
                  style={{
                    textDecoration: "none",
                  }}
                >
                  <Post
                    key={post.id}
                    title={post.title}
                    text={post.text}
                    src={post.image}
                  />
                </Link>
              ))}
            </div>
            <div className="rightColumn">
              {posts.slice(5, 11).map((post: any) => (
                <Link
                  to={Routes.Post.replace(":id", post.id)}
                  style={{
                    textDecoration: "none",
                  }}
                >
                  <Post
                    key={post.id}
                    title={post.title}
                    text={post.text}
                    src={post.image}
                    size="small"
                  />
                </Link>
              ))}
            </div>
          </div>
          <Pagination
            count={Math.ceil((count as unknown as number) / 12)}
            page={page}
            onChange={handleChange}
            sx={{
              margin: 2,
            }}
          />
        </>
      )}
    </div>
  );
};

export default Home;
