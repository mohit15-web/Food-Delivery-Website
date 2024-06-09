import { API_URL } from "../constants";

/* eslint-disable no-inner-declarations */
async function getRestaurants() {
    try {
      const response = await fetch(API_URL);
      const json = await response.json();

      function checkJsonData(jsonData) {
        for (let i = 0; i < jsonData?.data?.cards.length; i++) {
          let checkData =
            json?.data?.cards[i]?.card?.card?.gridElements?.infoWithStyle
              ?.restaurants;

          if (checkData !== undefined) {
            return checkData;
          }
        }
      }

      const resData = checkJsonData(json);
      return resData;
    } catch (error) {
      console.error("Error fetching restaurant data:", error);
      return [];
    }
  }

  export default getRestaurants;