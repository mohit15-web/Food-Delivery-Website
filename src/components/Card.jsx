import { useNavigate } from 'react-router-dom';
import PropTypes from 'prop-types';
import { useEffect } from 'react';
const Card = ( {count , allRestaurants}) => {
  const navigate  = useNavigate()
  let IMG_CDN_URL = `https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/`;

  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, [allRestaurants]);

  return (
    <div className="flex flex-wrap justify-center items-center px-10 xl:px-32 gap-16
       dark:bg-black dark:text-white ">
      {allRestaurants?.slice(0,count).map((item) => (
        <div key={item.info.id} className=" w-72 dark:bg-black dark:text-white bg-white rounded-lg shadow-md overflow-hidden m-4 hover:shadow-2xl hover:cursor-pointer hover:scale-105 ease-in-out duration-200 dark:border
        dark:border-gray-400"
        onClick={() => {
          navigate(`/ReastaurantDetail/${item.info.id}`)
        }}
        >
          <img
            className="h-48 object-cover"
            src={IMG_CDN_URL + item.info.cloudinaryImageId} 
            alt={item.info.name}
          />
          <div className="p-4">
            <h3 className="text-xl font-semibold">{item.info.name.slice(0,20)}</h3>
        
            {/* <p className="text-gray-600 mt-2">Price:{item.info.costForTwo.slice(0,4)}</p> */}
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
            <p className='text-gray-600 text-md mt-2'>{item.info.locality}</p>
            {/* <div className='flex gap-2'>
              
            <button
              className="mt-4 w-full bg-orange-500 text-white py-2 rounded-md hover:bg-orange-600"
              onClick={() => window.open(item.info.cta.link, "_blank")}
            >
              Add to Cart
            </button>
            <button
              className="mt-4 w-full bg-orange-500 text-white py-2 rounded-md hover:bg-orange-600"
              onClick={() => window.open(item.info.cta.link, "_blank")}
            >
              Go to Cart
            </button>
            </div> */}
          </div>
        </div>
      ))}
    </div>
  );
};

Card.propTypes = {
  allRestaurants: PropTypes.func,
  count: PropTypes.number,
}

export default Card;
