import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Shimmer from "./ShimmerUI";
import { MENU_API_URL } from "../contant";



const RestaurantMenu = () => {
  const { id } = useParams();
  console.log(id);
  const URL=`${MENU_API_URL}${id}`
  const [resInfo, setResInfo] = useState(null);

  useEffect(() => {
    getRestaurantMenu();
  }, []);

  const getRestaurantMenu = async () => {
    try {
      const response = await fetch(URL);
      if (!response.ok) {
        throw new Error("Failed to fetch data");
      }
      const json = await response.json();
      console.log(json);
      setResInfo(json.data);
    } catch (error) {
      console.error("Error fetching data:", error.message);
    }
  };
   if(resInfo==null) return <Shimmer/>
console.log(resInfo);
  const { id: restaurantId, name, cuisines, costForTwoMessage } =
    resInfo?.cards[0]?.card?.card?.info || {};

    const {itemCards}=resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card;
    console.log(itemCards);
    console.log(itemCards);

  return (
<div className="text-center bg-gray-50 p-8 rounded-lg shadow-lg">
  <h1 className="text-4xl font-extrabold mb-4 text-black-600 border-b-2 border-gray-300-600 pb-2">Welcome to  - {name}</h1>
  <p className="text-lg mb-2 text-gray-700">Cuisines: {cuisines?.join(", ") || "Not available"}</p>
  <p className="text-lg mb-2 text-gray-700">Cost for Two: {costForTwoMessage || "Not available"}</p>
  <div>
      <p className="text-4xl font-extrabold mb-4 text-black-600 border-b-2 border-gray-300-600 pb-2 text-pretty text-left m-4 p-4">Menu</p>
        <ul>
           {itemCards.map((item)=>(
            <li  className=" text-left  ml-14"key={item.card.info.id}>{item.card.info.name} - Rs.{item.card.info.price|| item.card.info.defaultPrice} </li>
           ))}
        </ul>
  </div>
  
  {/* Display additional information as needed */}
</div>


  );
};

export default RestaurantMenu;
