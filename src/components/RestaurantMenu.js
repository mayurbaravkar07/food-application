import { useParams } from "react-router-dom";


const RestaurantMenu=()=>{
    const params=useParams();
    const {id}=params;
    return(
        <div>
      <h1>Restaurant id:{id}</h1>
      <h2>Namasate </h2>
        </div>
    );
}

export default RestaurantMenu;