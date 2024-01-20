
export async function filterData(searchText, restaurant) {
    const filteredRestaurant = restaurant.filter((res) =>
      res.name.toLowerCase().includes(searchText.toLowerCase())
    );
    return filteredRestaurant;
  }

