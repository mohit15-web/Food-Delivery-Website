import { useNavigate } from "react-router-dom";
import PropTypes from "prop-types";
import {restaurants} from '../Restaurant'
import { toast } from "react-toastify";
import { useDispatch } from "react-redux";
import { ADD_TO_CART } from "../store/Reducers";
const Restaurants = ({ count }) => {
  let IMG_CDN_URL = `https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/`;

  const dispatch = useDispatch()
  const navigate = useNavigate();
  const handleAddCart = (item) => {
    const user = JSON.parse(localStorage.getItem("user"));
    if (!user) {
      toast.error("Please login to add item to cart", {
        position: "bottom-right",
        theme: "colored",
      });
      return;
    }
    dispatch(ADD_TO_CART(item));
    toast.success("Item added to cart!", {
      position: "bottom-right",
      theme: "colored",
    });
  };
  return (
    <div
      className="flex flex-wrap justify-center items-center px-10 xl:px-32 gap-16
       dark:bg-[rgb(32,33,36)] dark:text-white "
    >
      {
      restaurants?.slice(0, count).filter((item) => item?.info?.name?.toLowerCase().includes(name?.toLowerCase())).map((item) => (
        <div
          key={item.info.id}
          className=" w-80 dark:bg-[rgb(32,33,36)] dark:text-white bg-white rounded-lg shadow-md overflow-hidden m-4 hover:shadow-2xl hover:cursor-pointer hover:scale-105 ease-in-out duration-200 dark:border
        dark:border-gray-400 flex flex-col items-center"
        >
          <img
            className="h-48 object-cover rounded-lg"
            src={IMG_CDN_URL + item.info.cloudinaryImageId}
            alt={item.info.name}
          />
          <div className="p-4">
            <h3 className="text-xl font-semibold">
              {item.info.name.slice(0, 20)}
            </h3>

            <h4 className="text-gray-600 mt-2">Price: {item.info.costForTwo.slice(0,4)} / serving</h4>
            <div className="mt-2 flex items-center">
              <span className="inline-block bg-yellow-400 text-white text-sm font-semibold mr-2 px-2.5 py-0.5 rounded">
                {item.info.avgRating} ★
              </span>
              <span className="text-gray-600 text-sm">
                {item.info.totalRatingsString} ratings
              </span>
            </div>
            <p className="text-gray-600 mt-2">
             Free Delivery: {item.info.sla.slaString}
            </p>
            {/* <p className="text-gray-600 text-md mt-2">{item.info.locality}</p> */}
          </div>
          <div className="my-4 flex gap-2">
            <button className="px-4 py-2 text-white bg-orange-400 rounded-lg"
            onClick={() => handleAddCart(item.info)}
            >Add to Cart</button>
            <button className="px-4 py-2 text-white bg-orange-400 rounded-lg"
            onClick={() => navigate('/cart')}
            >Go to Cart</button>
          </div>
        </div>
      ))}
    </div>
  );
};

Restaurants.propTypes = {
  count: PropTypes.number,
};

export default Restaurants;
