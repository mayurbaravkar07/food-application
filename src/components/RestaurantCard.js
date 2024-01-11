import { ImageUrl } from "../contant";

const RestaurantCard = ({ name, cuisines, cloudinaryImageId, avgRating }) => {
  const imageUrl = cloudinaryImageId ? `${ImageUrl}${cloudinaryImageId}` : null;

  // Check if essential information is available
  if (!imageUrl || !name) {
    console.error("Invalid data for restaurant:", { name, imageUrl });
    return null; // Skip rendering this card
  }

  console.log("Image URL:", imageUrl);
  console.log("Restaurant Name:", name);

  return (
    <div className="card">
      {imageUrl && <img src={imageUrl} alt="Image not found" />}
      <h2>{name}</h2>
      <h3>{cuisines?.join(",")}</h3>
      <h4>{avgRating}</h4>
    </div>
  );
};

export default RestaurantCard;
