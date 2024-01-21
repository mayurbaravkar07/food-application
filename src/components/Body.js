import { useState, useEffect } from "react";
import RestaurantCard from "./RestaurantCard";
import Shimmer from "./ShimmerUI";
import { filterData } from "../utils/helper";
import useRestaurantData from "../utils/CustomHooks/useRestaurantData";

const Body = () => {
  // Custom Hook
  const restaurant = useRestaurantData();
  const [searchText, setSearchText] = useState("");
  const [filteredRestaurant, setFilteredRestaurant] = useState([]);

  useEffect(() => {
    setFilteredRestaurant(restaurant);
  }, [restaurant]);

  const handleSearch = async () => {
    const data = await filterData(searchText, restaurant);
    setFilteredRestaurant(data);
  };

  // Conditional Rendering
  return (
    <>
      {filteredRestaurant && filteredRestaurant.length === 0 ? (
        <Shimmer />
      ) : (
        <>
          <div className="searchContainer">
            <input
              type="text"
              className="search-input"
              placeholder="search "
              value={searchText}
              onChange={(e) => setSearchText(e.target.value)}
            />
            <button className="search-btn" onClick={handleSearch}>
              Search
            </button>
          </div>

          <div className="restaurant-list">
            {/* Map over the array of restaurants and render each RestaurantCard */}
            {filteredRestaurant.map((restaurantData, index) => (
              <RestaurantCard {...restaurantData} key={index} />
            ))}
          </div>
        </>
      )}
    </>
  );
};

export default Body;
