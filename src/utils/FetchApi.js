
const PROXY_URL = `https://api.allorigins.win/get?url=${encodeURIComponent(import.meta.env.VITE_SWIGGY_API_URL)}`;

async function getRestaurants() {
  try {
    const cachedData = localStorage.getItem(import.meta.env.VITE_CACHE_KEY);
    if (cachedData) {
      console.log("Using cached data");
      return JSON.parse(cachedData);
    }

    const response = await fetch(PROXY_URL);
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data = await response.json();
    const json = JSON.parse(data.contents);

    console.log("Response JSON:", json); // Log the response to debug

    const resData = extractRestaurantData(json);
    console.log("Filtered Data:", resData); // Log the filtered data to debug

    localStorage.setItem(import.meta.env.VITE_CACHE_KEY, JSON.stringify(resData));
    return resData;
  } catch (error) {
    console.error("Error fetching restaurant data:", error);
    return [];
  }
}

function extractRestaurantData(jsonData) {
  for (let i = 0; i < jsonData?.data?.cards?.length; i++) {
    const restaurants =
      jsonData?.data?.cards[i]?.card?.card?.gridElements?.infoWithStyle?.restaurants;
    if (restaurants) {
      return restaurants;
    }
  }
  return [];
}

export default getRestaurants;
