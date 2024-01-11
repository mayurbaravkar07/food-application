import { useState, useEffect } from "react";
import RestaurantCard from "./RestaurantCard";

const Body = () => {
  const [restaurant, setRestaurant] = useState([]);
  const [searchText, setSearchText] = useState([]);

  async function getRestaurants() {
  
const response = await fetch('https://www.swiggy.com/mapi/homepage/getCards?lat=18.1519403&lng=74.5697617&page_type=DESKTOP_WEB_LISTING');
      const jsonData = await response.json();
      console.log(jsonData);
      const restaurantsData = jsonData?.data?.success?.cards[1]?.gridWidget?.gridElements?.infoWithStyle?.restaurants?.map(restaurant => restaurant.info);


      // Update state with the array of restaurants
      setRestaurant(restaurantsData);
  
  }

  useEffect(() => {
    getRestaurants();
  }, []);

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
        />
        <button>Search</button>
      </div>

      <div className="restaurant-list">
        {/* Map over the array of restaurants and render each RestaurantCard */}
        {restaurant.map((restaurantData, index) => (
  <RestaurantCard {...restaurantData} key={restaurantData.id || index} />
))}
      </div>
    </>
  );
};

export default Body;
