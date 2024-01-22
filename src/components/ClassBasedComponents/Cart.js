import React from "react";
import RestaurantCard from '../RestaurantCard'; // Import RestaurantCard component

class Cart extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      cartItems: [],
    };
  }

  async componentDidMount() {
    
    const restaurants = await this.fetchData();
    this.setState({
      cartItems: restaurants || [],
    });
  }

  componentDidUpdate(){
  
  }
  async fetchData() {
    const response = await fetch('https://corsproxy.io/?https://www.swiggy.com/mapi/homepage/getCards?lat=18.1519403&lng=74.5697617');
    const jsonData = await response.json();
    const restaurantsData = jsonData?.data?.success?.cards[1]?.gridWidget?.gridElements?.infoWithStyle?.restaurants?.map(restaurant => restaurant.info);
    return restaurantsData || [];
  }

  render() {
    return (
      <>
        <div>
          <h1 className="font-bold py-4 text-2xl ">Cart Items</h1>
        </div>
        <div className="flex flex-wrap px-4">
          {this.state.cartItems.map((restaurantData, index) => (
            <RestaurantCard {...restaurantData} key={index} />
          ))}
        </div>
      </>
    );
  }
}

export default Cart;
