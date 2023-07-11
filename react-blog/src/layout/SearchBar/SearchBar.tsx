import React, { useEffect, useMemo, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Routes } from "../../constants/Routes";
import { postsService } from "../../services";
import { CircularProgress } from "@mui/material";

const debounce = (callback: (...args: any) => void, ms: number) => {
  let timerId: NodeJS.Timeout;

  return (...args: any[]) => {
    clearTimeout(timerId);

    timerId = setTimeout(() => {
      callback(...args);
    }, ms);
  };
};

let abortController = new AbortController();

const SearchBar = () => {
  const [search, setSearch] = useState("");
  const [posts, setPosts] = useState<any[]>([]);
  const [isLoading, setLoading] = useState(false);

  const navigate = useNavigate();
  const goToPage = () => navigate(`/search?query=${search}`);

  const handleSearch = (e: any) => {
    e.preventDefault();

    goToPage();

    setSearch("");
  };

  const fetchPosts = async (value: string) => {
    abortController.abort();

    abortController = new AbortController();

    if (!value) {
      setPosts([]);

      return;
    }

    let isCancelled = false;

    try {
      const { data } = await postsService.getAll(
        1,
        value,
        abortController.signal
      );

      setPosts(data.results);
    } catch (error: any) {
      isCancelled = error.__CANCEL__;
    } finally {
      if (!isCancelled) {
        setLoading(false);
      }
    }
  };

  const debouncedRequest = useMemo(() => debounce(fetchPosts, 100), []);

  const onChangeInput: React.ChangeEventHandler<HTMLInputElement> = (e) => {
    setSearch(e.target.value);
  };

  useEffect(() => {
    if (search) {
      setLoading(true);
    } else {
      setLoading(false);
    }

    debouncedRequest(search);
  }, [search]);

  return (
    <form
      onSubmit={handleSearch}
      style={{
        position: "relative",
      }}
    >
      <input
        type="search"
        name="search"
        value={search}
        onChange={onChangeInput}
      />
      <button onClick={goToPage} type="submit">
        Поиск
      </button>
      {(!!posts.length || isLoading) && (
        <div
          style={{
            position: "absolute",
            width: 153,
            minHeight: 100,
            background: "#ffffff",
            boxShadow: "0px 1px 4px #000000",
            zIndex: 1111111,
            display: "flex",
            flexDirection: "column",
            gap: 12,
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          {isLoading ? (
            <CircularProgress />
          ) : (
            posts.map((post) => (
              <Link
                to={Routes.Post.replace(":id", post.id)}
                onClick={() => setSearch("")}
              >
                {post.title}
              </Link>
            ))
          )}
        </div>
      )}
    </form>
  );
};

export default SearchBar;
