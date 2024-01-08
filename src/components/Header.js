export const Title = () => {
  return (
    <img
      src="https://files.yappe.in/place/small/the-food-villa-5873411.webp"
      alt="Food Villa"
      style={{ width: "150px", height: "auto" }}
    />
  );
};

export const HeaderComponent = () => {
  return (
    <div className="header">
      <Title />
      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>About</li>
          <li>Contact</li>
          <li>Cart</li>
        </ul>
      </div>
    </div>
  );
};

// export default can only export one thing
//export default  Title;
