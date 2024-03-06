import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const Search = () => {
  const [keyword, setKeyword] = useState("");
  const [debounceKeyword, setDebounceKeyword] = useState("")
  const navigate = useNavigate();

  useEffect(() => {
    const debounceKeyword = setTimeout(() => {
        setDebounceKeyword(keyword)
    }, 1000);
    return () => {
        clearTimeout(debounceKeyword);
    }
  }, [keyword])
  

  const submitHandler = (e) => {
    e.preventDefault();

    if (debounceKeyword?.trim()) {
      navigate(`/?keyword=${debounceKeyword}`);
    } else {
      navigate(`/`);
    }
  };

  return (
    <>
      <form onSubmit={submitHandler}>
        <div className="input-group">
          <input
            type="text"
            id="search_field"
            aria-describedby="search_btn"
            className="form-control"
            placeholder="Enter Product Name ..."
            name={keyword}
            value={keyword}
            onChange={(e) => setKeyword(e.target.value)}
          />
          <button id="search_btn" className="btn" type="submit">
            <i className="fa fa-search" aria-hidden="true"></i>
          </button>
        </div>
      </form>
    </>
  );
};

export default Search;
