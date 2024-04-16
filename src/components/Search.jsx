import { useState, useEffect } from "react";
import PropTypes from "prop-types";

function Search(props) {
  const [search, SetSearch] = useState("");

  const onSearchChange = () => {
    props.onSearchChange(search);
  };

  const searchKeydown = (e) => {
    if (e.key == "Enter") {
      onSearchChange();
    }
  };

  useEffect(() => {
    console.log("render");
  }, []);

  return (
    <>
      <div>
        Cari Artikel :
        <input
          type="text"
          onChange={(e) => SetSearch(e.target.value)}
          onKeyDown={searchKeydown}
        />
        <button onClick={onSearchChange}>Cari</button>
      </div>
      <small>
        Ditemukan {props.totalPosts} data dengan pencarian kata {search}
      </small>
    </>
  );
}

export default Search;

Search.propTypes = {
  onSearchChange: PropTypes.func.isRequired,
  totalPosts: PropTypes.number.isRequired,
};
