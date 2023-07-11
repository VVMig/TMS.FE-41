import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { postsService } from "../../services/posts";
import { Post } from "../common";
import "./styles.scss";

const SearchPage = () => {
  const location = useLocation();
  const [results, setResults] = useState<any[]>([]);

  useEffect(() => {
    const searchQuery = new URLSearchParams(location.search).get(
      "query"
    ) as string;

    // Perform the search based on the query
    // This is just a placeholder function, you should replace it with your own search logic
    const performSearch = async () => {
      try {
        // Make an API call or perform any search operation
        const searchResults = await postsService.getAll(1, searchQuery);
        setResults(searchResults.data.results as any);
      } catch (error) {
        console.error("Error performing search:", error);
      }
    };

    if (searchQuery) {
      performSearch();
    }
  }, [location.search]);

  return (
    <div>
      <h1>Search Results</h1>
      <div className="search-container">
        {results.length ? (
          results.map((post) => (
            <Post
              key={post.id}
              title={post.title}
              text={post.text}
              src={post.image}
            />
          ))
        ) : (
          <p>No posts were found</p>
        )}
      </div>
    </div>
  );
};

export default SearchPage;
