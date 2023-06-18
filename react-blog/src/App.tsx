import React, { useEffect } from "react";
import "./App.css";
import { useSelector } from "react-redux";
import { fetchPosts } from "./store/actions/posts";
import "./style/style.css";
import { useAppDispatch } from "./useDispatch";

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
      <header className="header">
        <h2 className="header__h2">React blog</h2>
        <form className="header__form">
        <input type="text" className="header__searchInput" placeholder="search"/>
        <button className="header__searchBTN">
          <svg
            width="31"
            height="31"
            viewBox="0 0 31 31"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M13.5288 0.0131836C6.34912 0.0131836 0.528809 5.83347 0.528809 13.0132C0.528809 20.1929 6.34912 26.0131 13.5288 26.0131C20.7085 26.0131 26.5289 20.1929 26.5289 13.0132C26.5289 5.83347 20.7085 0.0131836 13.5288 0.0131836ZM2.52881 13.0132C2.52881 6.93804 7.45369 2.01318 13.5288 2.01318C19.604 2.01318 24.5289 6.93804 24.5289 13.0132C24.5289 19.0883 19.604 24.0131 13.5288 24.0131C7.45369 24.0131 2.52881 19.0883 2.52881 13.0132Z"
              fill="#D9D9D9"
            />
            <path
              d="M24.9027 22.9728C24.5122 22.5823 23.879 22.5823 23.4885 22.9728C23.098 23.3633 23.098 23.9965 23.4885 24.387L28.8217 29.7203C29.2122 30.1108 29.8454 30.1108 30.2359 29.7203C30.6264 29.3298 30.6264 28.6966 30.2359 28.3061L24.9027 22.9728Z"
              fill="#D9D9D9"
            />
          </svg>
        </button>
        </form>
      </header>
      <div>
        {isLoading
          ? "Loading..."
          : posts.map((post: any) => <p>{String(post.title)}</p>)}
      </div>
    </div>
  );
};

export default App;