import burgerKing from "../contant";
const RestaurantCard = () => {
  return (
    <div className="card">
      <img src={burgerKing.image} alt="Burger" />
      <h2>{burgerKing.name}</h2>
      <h3>{burgerKing.cusines.join(",")}</h3>
      <h4>{burgerKing.rating}</h4>
    </div>
  );
};

export default RestaurantCard;
