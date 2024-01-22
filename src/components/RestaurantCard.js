import { ImageUrl } from "../contant";

const RestaurantCard = ({ name, cuisines, cloudinaryImageId, avgRating }) => {
  const imageUrl = cloudinaryImageId ? `${ImageUrl}${cloudinaryImageId}` : null;

  // Check if essential information is available
  if (!ImageUrl || !name) {
    console.error("Invalid data for restaurant:", { name, imageUrl });
    return null; // Skip rendering this card
  }

  console.log("Image URL:", imageUrl);
  console.log("Restaurant Name:", name);

  return (
    <div className="m-4 p-4 w-[250px]  rounded-lg bg-gray-100 hover:bg-gray-300" >
      {imageUrl && <img className="rounded-lg" src={imageUrl} alt={`${name} - Image not found`} />}
      <h2 className="font-bold py-4 text-lg">{name}</h2>
      <h3>{cuisines?.join(", ")}</h3>
      <h4>{avgRating}</h4>
    </div>
  );
};

export default RestaurantCard;
