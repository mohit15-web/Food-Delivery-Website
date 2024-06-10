/* eslint-disable no-inner-declarations */
// No need to import any dependencies for using cors-anywhere
const SWIGGY_API_URL = 'https://www.swiggy.com/dapi/restaurants/list/v5?lat=21.11610&lng=79.07060&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING';
const PROXY_URL = `https://api.allorigins.win/get?url=${encodeURIComponent(SWIGGY_API_URL)}`;

async function getRestaurants() {
  try {
    const response = await fetch(PROXY_URL);
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const data = await response.json();
    const json = JSON.parse(data.contents);
    console.log("Response JSON:", json); // Log the response to debug

    function checkJsonData(jsonData) {
      for (let i = 0; i < jsonData?.data?.cards.length; i++) {
        let checkData =
          jsonData?.data?.cards[i]?.card?.card?.gridElements?.infoWithStyle
            ?.restaurants;

        if (checkData !== undefined) {
          return checkData;
        }
      }
    }

    const resData = checkJsonData(json);
    console.log("Filtered Data:", resData); // Log the filtered data to debug
    return resData;
  } catch (error) {
    console.error("Error fetching restaurant data:", error);
    return [];
  }
}

export default getRestaurants;
