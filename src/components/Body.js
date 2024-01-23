import React, { useState, useEffect } from "react";
import RestaurantCard from "./RestaurantCard";
import Shimmer from "./ShimmerUI";
import { filterData } from "../utils/helper";  // Make sure filterData is imported
import useRestaurantData from "../utils/CustomHooks/useRestaurantData";
import { Link } from "react-router-dom";
const Body = () => {
  // Custom Hook
  const restaurant = useRestaurantData([]);
  const [searchText, setSearchText] = useState("");
  const [filteredRestaurant, setFilteredRestaurant] = useState([]);

  useEffect(() => {
    setFilteredRestaurant(restaurant);
    console.log("------");
    //console.log(restaurant);
  }, [restaurant]);

  const handleSearch = async () => {
    const data = await filterData(searchText, restaurant);
    setFilteredRestaurant(data);
  };

  // Conditional Rendering
  return (
    <>
   {console.log(restaurant)}
      {filteredRestaurant && filteredRestaurant.length === 0 ? (
        <Shimmer />
      ) : (
        <>
          <div className="searchContainer p-4 m-4">
            <input
              type="text"
              className="border border-s-pink-50id rounded-lg hover:bg-gray-100 p-2"
              placeholder="Search"
              value={searchText}
              onChange={(e) => setSearchText(e.target.value)}
            />
            <button
              className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-700 focus:outline-white focus:ring focus:border-blue-300 m-4"
              onClick={handleSearch}
            >
              Search
            </button>
          </div>


          <div className="flex flex-wrap px-4">
            {/* Map over the array of restaurants and render each RestaurantCard */}
            {filteredRestaurant.map((restaurantData, index) => (
              <Link to={"/restaurant/"+restaurantData.id}><RestaurantCard {...restaurantData} key={index} /></Link>
            ))}
          </div>
        </>
      )}
    </>
  );
};

export default Body;
