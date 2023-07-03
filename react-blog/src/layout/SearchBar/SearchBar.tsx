import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useNavigate, useParams, useSearchParams } from "react-router-dom";
import { Routes } from "../../constants/Routes";

const SearchBar = ({ postQuery, setQuery  }: any) => {
    const [search, setSearch] = useState(postQuery)

    const navigate = useNavigate();
    const goToPage = () => navigate('/search')

  

  const handleSearch = (e: any) => {
    e.preventDefault();
    const form = e.target;

    const query = form.search.value

    setQuery({query: query})
    console.log(setQuery);
    

    // onSearch(query);
  };

  return (
    <form onSubmit={handleSearch}>
      <input type="search" name="search" value={search} onChange={e => setSearch(e.target.value)} />
        <button onClick={goToPage} type="submit">Поиск</button>
    </form>
  );
};

export default SearchBar;
