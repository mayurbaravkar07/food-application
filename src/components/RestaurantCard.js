import { ImageUrl } from "../contant";

const RestaurantCard = ({ name, cuisines, cloudinaryImageId, avgRating }) => {
  const imageUrl = cloudinaryImageId ? `${ImageUrl}${cloudinaryImageId}` : null;

  // Check if essential information is available
  if (!name) {
    console.error("Invalid data for restaurant:", { name, imageUrl });
    return null; // Skip rendering this card if name is missing
  }

  console.log("Image URL:", imageUrl);
  console.log("Restaurant Name:", name);

  return (
    <div className="m-4 p-4 w-[250px] rounded-lg bg-gray-100 hover:bg-gray-300">
      <div className="mb-4">
        {imageUrl && <img className="rounded-lg h-40 w-full object-cover mb-2" src={imageUrl} alt={`${name} - Image not found`} />}
        <h2 className="font-bold text-lg">{name}</h2>
      </div>
      <div className="text-sm text-gray-600">
        <p>{cuisines?.join(", ")}</p>
        <p>Avg Rating: {avgRating}</p>
      </div>
    </div>
  );
};

export default RestaurantCard;
