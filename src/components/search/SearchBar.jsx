import React from "react";
import { useSearchParams } from "react-router-dom";
import SearchInput from "./SearchInput";


function SearchBar() {
  const [searchParams, setSearchParams] = useSearchParams();
  const keyword = searchParams.get("keyword") || "";

  const handleChange = (e) => {
    const newKeyword = e.target.value.trim();
    if (newKeyword === "") {
      searchParams.delete("keyword");
      setSearchParams(searchParams, { replace: true });

    } else {
      setSearchParams({ keyword: newKeyword });
    }
  }

  return <SearchInput value={keyword} onChange={handleChange} />;
}

export default SearchBar;