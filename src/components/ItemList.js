import { useDispatch } from "react-redux";
import { addItem } from "../utils/cartSlice";

const ItemList = ({ items }) => {
    const ImageUrl = 'https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/';
  
    const dispatch=useDispatch();

    const handleAddItem=(item)=>{
      //Dispatch an action over here
      dispatch(addItem(item));
    }
    return (
      <div>
        {items.map((item) => (
          <div
            key={item?.card?.info?.id}
            className="p-2 m-2 border-gray-200 border-b-2 text-left flex justify-between"
          >
            <div>
              <div className="py-2 font-medium text-base">
                <span>{item?.card?.info?.name}</span>
                <br />
                <span>₹{item?.card?.info?.price/100}</span>
              </div>
              <p className="text-sm text-gray-600">{item?.card?.info?.description}</p>
            </div>
  
            <div>
              
            {item?.card?.info?.imageId && (
  <div className="absolute">
    <button className="p-2 bg-black shadow-lg mx-8 my-auto rounded-md text-white font-medium" 
    onClick={()=>handleAddItem(item)}>ADD</button>
  </div>
)}

{item?.card?.info?.imageId && (
  <img
    src={ImageUrl + item.card.info.imageId}
    className="w-[118] h-[96] scroll-px-3"
    alt="Card Image"
  />
)}

            </div>
          </div>
        ))}
      </div>
    );
  };
  
  export default ItemList;
  