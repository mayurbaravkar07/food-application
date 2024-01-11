async function testApi() {
    try {
      const response = await fetch('https://www.swiggy.com/mapi/homepage/getCards?lat=18.1519403&lng=74.5697617&page_type=DESKTOP_WEB_LISTING');
  
      if (response.ok) {
        const data = await response.json();
        console.log(data);
        // Use optional chaining to access nested properties
        const naadbramhaInfo = data.data?.success?.cards?.[1]?.gridWidget?.gridElements?.infoWithStyle?.restaurants?.[1]?.info;
      console.log("area");
      console.log(naadbramhaInfo.areaName);
        // Check if 'kfcInfo' is defined
        if (naadbramhaInfo) {
          console.log('API response:', data);
          console.log('KFC Info:', naadbramhaInfo);
        } else {
          console.error('API response structure is not as expected.');
        }
  
      } else {
        console.error('Error:', response.status, response.statusText);
      }
    } catch (error) {
      console.error('An error occurred:', error);
    }
  }
  
  // Call the function to test the API
  testApi();
  