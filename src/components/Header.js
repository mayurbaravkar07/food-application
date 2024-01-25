import { Link } from "react-router-dom";

export const Title = () => {
  return (
    <>
    <div className="logo-container shadow-2xl">
    <div className="rounded-md overflow-hidden">
    
        <img
          className="w-full h-auto"
          src="https://files.yappe.in/place/small/the-food-villa-5873411.webp"
          alt="Food Villa"
        />
  
    </div>
  </div>
  </>
  );
};

export const HeaderComponent = () => {
  return (
    <div className="flex justify-between   bg-green-100 shadow-lg m-3 shadow-2xl mb-3">
      <Title />
      <div className="flex  items-center">
        <ul className="flex p-4 m-4">
        <li className="px-4"><Link  to="/">Home</Link></li>
          <li className="px-4"><Link  to="/about">About</Link></li>
          <li className="px-4"><Link  to="/contact">Contact</Link></li>
          <li className="px-4"><Link to="/cart">Cart</Link></li>
        </ul>
      </div>
    </div>
  );
};

// export default can only export one thing
//export default  Title;
