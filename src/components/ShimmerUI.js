// Shimmer is the UI loaded when we are loading something and when we want to show the layout of the component
const Shimmer = () => {
    return (
      <div className="restaurant-list">
        {Array(16).fill("").map((e, index) => (
          <div className="shimmer-card" key={index}></div>
        ))}
      </div>
    );
  };
  
  
  export default Shimmer;
  