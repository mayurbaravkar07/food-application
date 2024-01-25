import { useState } from "react";
import ItemList from "./ItemList";

const RestaurantCategory=({data,showItems,setShowIndex})=>{
     
    const handleClick=()=>{
        setShowIndex();
    }

return(
<div>
 
    <div className="w-6/12 mx-auto my-6 bg-gray-50 shadow-lg p-4  ">
        <div className="flex justify-between" onClick={handleClick}>
           {/* Accordion Header */}
        <span className="text-xl font-bold">{data.title} ({data.itemCards.length})</span>
        <span>🔃</span>
        </div>
        {/*Accordion Body */}
        
       {showItems&& <ItemList items={data?.itemCards}/>}
    </div>



</div>
);
}
export default RestaurantCategory;