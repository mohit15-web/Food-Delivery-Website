import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import {
  ITEM_IMG_CDN_URL,
  MENU_ITEM_TYPE_KEY,
} from "../constants";
import Loader from "../Loader/Loader";
import { toast } from "react-toastify";
import { useDispatch } from "react-redux";
import { ADD_TO_CART } from "../store/Reducers";
import { IndianRupee } from "lucide-react";

function RestaurantDetails() {
  const { id } = useParams();
  const [menuItems, setMenuItems] = useState([]);

  useEffect(() => {
    getRestaurantInfo();
  }, [id]);

  async function getRestaurantInfo() {
    try {
      const response = await fetch(
        `https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=21.11610&lng=79.07060&restaurantId=${id}`
      );
      const json = await response.json();
      const menuItemsData =
        json?.data?.cards
          ?.find((x) => x.groupedCard)
          ?.groupedCard?.cardGroupMap?.REGULAR?.cards?.map((x) => x.card?.card)
          ?.filter((x) => x["@type"] === MENU_ITEM_TYPE_KEY)
          ?.map((x) => x.itemCards)
          ?.flat()
          ?.map((x) => x.card?.info) || [];

      const uniqueMenuItems = [];
      menuItemsData.forEach((item) => {
        if (!uniqueMenuItems.find((x) => x.id === item.id)) {
          uniqueMenuItems.push(item);
        }
      });
      setMenuItems(uniqueMenuItems);
    } catch (error) {
      setMenuItems([]);
    }
  }
  const dispatch = useDispatch();

  const handleAddToCart = (item) => {
    console.log(item);
    dispatch(ADD_TO_CART(item));
    toast.success("Item added to cart!", {
      position: "top-center",
      theme: "colored",
    });
  };

  
  const user = JSON.parse(localStorage.getItem("user"));
  console.log(user?.displayName, "user");

  console.log(menuItems);

  return menuItems?.length === 0 ? (
    <Loader />
  ) : (
    <div className="pt-44 flex flex-col items-center relative">
      <h1 className="text-black text-xl xl:text-2xl absolute left-20 xl:left-96 top-32">
        Recommended ({menuItems?.length})
      </h1>
      <div>
        {menuItems.map((item) => (
          <div
            key={item?.id}
            className="flex justify-between shadow-lg px-6 py-12 mb-10 w-[400px] sm:w-[550px] xl:w-[750px] rounded-xl md:w-[700px]"
          >
            <div>
              <h3 className="text-2xl">{item?.name?.slice(0, 30)} .....</h3>
              <p className="flex mt-3">
                  <IndianRupee/> {(item?.price || item?.defaultPrice) / 100}
              </p>
              <span className="inline-block bg-yellow-400 text-white text-sm font-semibold mr-2 px-2.5 py-0.5 rounded mt-2">
                {item?.ratings?.aggregatedRating?.rating} ★
              </span>
              <p className="text-gray-500 mt-3 w-[300px] xl:w-[450px]">
                {item?.description?.slice(0, 100)}
              </p>
            </div>
            <div className="relative">
              {item?.imageId && (
                <img
                  className=" w-40 h-32 xl:w-48 xl:h-40 object-cover rounded-xl"
                  src={ITEM_IMG_CDN_URL + item?.imageId}
                  alt={item?.name}
                />
              )}
              <button
                className="absolute right-4 bg-white text-green-600 font-bold shadow-xl px-6 py-3 rounded-lg top-32 w-32 xl:w-32"
                onClick={() => {
                  if(user === null){
                    toast.error("Please login to add item to cart",{
                      position: "top-center",
                      theme: "colored",
                    });
                    return
                  }
                  handleAddToCart(item)
                }}
              >
                ADD +
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default RestaurantDetails;
