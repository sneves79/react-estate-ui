import { useState } from "react";
import "./searchBar.scss";

function SearchBar() {
  const [query, setQuery] = useState({
    type: "buy",
    location: "",
    minPrice: "",
  });
  return (
    <div className="searchBar">
      <div className="type">
        <button>Buy</button>
        <button>Rent</button>
      </div>
      <form>
        <input type="text" name="location" placeholder="City Location" />
        <input
          type="number"
          name="minPrice"
          min={0}
          max={10000000}
          placeholder="Min Price"
        />
        <input
          type="number"
          name="maxPrice"
          min={0}
          max={10000000}
          placeholder="Max Price"
        />
        <button>
          <img src="/public/search.png" alt="" />
        </button>
      </form>
    </div>
  );
}

export default SearchBar;
