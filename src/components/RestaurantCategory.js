import ItemList from "./ItemList";

const RestaurantCategory=({data})=>{

return(
<div>
 
    <div className="w-6/12 mx-auto my-6 bg-gray-50 shadow-lg p-4  ">
        <div className="flex justify-between">
           {/* Accordion Header */}
        <span className="text-xl font-bold">{data.title} ({data.itemCards.length})</span>
        <span>🔃</span>
        </div>
        {/*Accordion Body */}
        
        <ItemList items={data?.itemCards}/>
    </div>



</div>
);
}
export default RestaurantCategory;