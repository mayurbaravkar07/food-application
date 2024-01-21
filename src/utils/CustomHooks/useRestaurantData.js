import { useState, useEffect } from "react";

const useRestaurantData = () => {
  const [restaurant, setRestaurant] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://corsproxy.io/?https://www.swiggy.com/mapi/homepage/getCards?lat=18.1519403&lng=74.5697617');
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }

        const jsonData = await response.json();
        console.log('API Response:', jsonData);

        const restaurantsData = jsonData?.data?.success?.cards[1]?.gridWidget?.gridElements?.infoWithStyle?.restaurants?.map(restaurant => restaurant.info);

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
