import { useNavigate } from "react-router-dom";
import PropTypes from "prop-types";
const Card = ({ count, allRestaurants, name = "" }) => {
  const navigate = useNavigate();
  let IMG_CDN_URL = `https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/`;

  
  return (
    <div
      className="flex flex-wrap justify-center items-center px-10 xl:px-32 gap-16
       dark:bg-black dark:text-white "
    >
      {allRestaurants?.slice(0, count).filter((item) => item?.info?.name?.toLowerCase().includes(name?.toLowerCase())).map((item) => (
        <div
          key={item.info.id}
          className=" w-80 dark:bg-black dark:text-white bg-white rounded-lg shadow-md overflow-hidden m-4 hover:shadow-2xl hover:cursor-pointer hover:scale-105 ease-in-out duration-200 dark:border
        dark:border-gray-400 flex flex-col items-center"
          onClick={() => {
            navigate(`/ReastaurantDetail/${item.info.id}`);
          }}
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

            <div className="mt-4 flex items-center">
              <span className="inline-block bg-yellow-400 text-white text-sm font-semibold mr-2 px-2.5 py-0.5 rounded">
                {item.info.avgRating} ★
              </span>
              <span className="text-gray-600 text-sm">
                {item.info.totalRatingsString} ratings
              </span>
            </div>
            <p className="text-gray-600 mt-2">
              Delivery Time: {item.info.sla.slaString}
            </p>
            <p className="text-gray-600 text-md mt-2">{item.info.locality}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

Card.propTypes = {
  allRestaurants: PropTypes.func,
  count: PropTypes.number,
  name: PropTypes.string
};

export default Card;
