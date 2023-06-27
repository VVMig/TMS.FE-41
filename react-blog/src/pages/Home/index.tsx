import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Post } from "./Post";
import { CircularProgress, Pagination } from "@mui/material";
import { fetchPosts } from "../../store/actions/posts";
import "./styles.css";
import { RootState } from "../../store";

const Home = () => {
  const {
    posts,
    loading: isLoading,
    error,
    count,
  } = useSelector((state: RootState) => state.posts);

  const [page, setPage] = useState(1);

  const handleChange = (event: React.ChangeEvent<unknown>, value: number) => {
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
                <Post
                  key={post.id}
                  title={post.title}
                  text={post.text}
                  src={post.image}
                />
              ))}
            </div>
            <div className="rightColumn">
              {posts.slice(6, 11).map((post: any) => (
                <Post
                  key={post.id}
                  title={post.title}
                  text={post.text}
                  src={post.image}
                />
              ))}
            </div>

            {/* {posts.map((post: any) => (
            <Link to={Routes.Post.replace(":id", post.id)}>
              <Post
                key={post.id}
                title={post.title}
                text={post.text}
                src={post.image}
              />
            </Link>
          ))} */}
          </div>
          <Pagination
            count={Math.ceil((count as unknown as number) / 12)}
            page={page}
            onChange={handleChange}
          />
        </>
      )}
    </div>
  );
};

export default Home;
