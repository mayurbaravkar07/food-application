import { useState, useEffect } from "react";
import RestaurantCard from "./RestaurantCard";
import { restaurantObject } from "../contant";
import Shimmer from "./ShimmerUI";  

const Body = () => {
  const [restaurant, setRestaurant] = useState([]); // Assuming fetched data will be an array
  const [searchText, setSearchText] = useState("");
  const [filteredRestaurant, setfilteredRestaurant] = useState([]);

  useEffect(() => {
    
    fetchData(); 
  
  }, []); // Empty dependency array ensures it runs once after mounting
  


  async function filterData(searchText, restaurant) {
    const filteredRestaurant = restaurant.filter((res) =>
      res.name.toLowerCase().includes(searchText.toLowerCase())
    );
    return filteredRestaurant;
  }async function fetchData() {
    try {
      const response = await fetch('https://www.swiggy.com/mapi/homepage/getCards?lat=18.1519403&lng=74.5697617');
  
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
  
      const jsonData = await response.json();
      console.log('API Response:', jsonData);
  
      const restaurantsData = jsonData?.data?.success?.cards[1]?.gridWidget?.gridElements?.infoWithStyle?.restaurants?.map(restaurant => restaurant.info);
  
      // Update state with the array of restaurants
      setRestaurant(restaurantsData || []);
      setfilteredRestaurant(restaurantsData || []);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  }
  

  const handleSearch = async () => {
    const data = await filterData(searchText, restaurant);
    setfilteredRestaurant(data);
  };


  //Condtional  Rendereing 
  //if restaturant is empty ==> shimmer ui
  //if restaurant has the  data then==> actual UI
  //
  
  //early return 


  return (restaurant.length===0)?<Shimmer/>:(
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
        <button
          className="search-btn"
          onClick={handleSearch}
        >
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
  );
};

export default Body;
