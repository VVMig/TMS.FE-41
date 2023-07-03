import React, { useEffect, useState } from "react";
import { useLocation, useParams } from "react-router-dom";
import { postsService } from "../../services/posts";

const SearchPage = () => {

  const location = useLocation();
  const [results, setResults] = useState<any[]>([]);
  console.log(setResults);
  

  useEffect(() => {
    const searchQuery = new URLSearchParams(location.search).get(
      "query"
    ) as string;
    console.log(searchQuery);

    // Perform the search based on the query
    // This is just a placeholder function, you should replace it with your own search logic
    const performSearch = async () => {
      try {
        // Make an API call or perform any search operation
        const searchResults = await postsService.searchPost(searchQuery);
        setResults(searchResults.data.results as any);
        // console.log(setResults);
        
      } catch (error) {
        console.error("Error performing search:", error);
      }
    };

    if (searchQuery) {
      performSearch();
    }
  }, [location.search]);
  console.log(results);

  return (
    <div>
      <h1>Search Results</h1>
      <ul>
        {results.length ? results.map((result) => (
          <li key={result.id}>{result.title}</li>
        )) : <p>No posts were found</p>}
      </ul>
    </div>
  );
};

export default SearchPage;
