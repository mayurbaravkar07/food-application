import { useState } from "react";
import RestaurantCard from "./RestaurantCard";

const Body = () => {
  const [searchText, setSearchText] = useState();
  return (
    <>
      <div className="searchContainer">
        <input
          type="text"
          className="search-input"
          placeholder="search "
          value={searchText}
          onChange={(e) => {
            setSearchText(e.target.value);
          }}
        ></input>
        <button>Search</button>
      </div>

      <div className="restaurant-list">
        <RestaurantCard />
        <RestaurantCard />
        <RestaurantCard />
        <RestaurantCard />
        <RestaurantCard />
      </div>
    </>
  );
};

export default Body;
