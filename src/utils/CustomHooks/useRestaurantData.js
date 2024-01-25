import { useState, useEffect } from "react";

const useRestaurantData = () => {
  const [restaurant, setRestaurant] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://corsproxy.io/?https://www.swiggy.com/dapi/restaurants/list/v5?lat=18.1519403&lng=74.5697617&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING');
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }

        const jsonData = await response.json();
        console.log('API Response:', jsonData);
       // const nadbramhaIdliInfo = apiResponse?.data?.success?.cards[1]?.gridWidget?.gridElements?.infoWithStyle?.restaurants?.[0]?.info;

        const restaurantsData = jsonData?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants?.map(restaurant => restaurant.info);

        // Update state with the array of restaurants
        setRestaurant(restaurantsData || []);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();

    // Cleanup function
    return () => {
      // Any cleanup logic if needed
    };
  }, []); // Empty dependency array ensures it runs once after mounting

  return restaurant;
};

export default useRestaurantData;
