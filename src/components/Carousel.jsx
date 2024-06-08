import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import PropTypes from "prop-types";
import { restaurants } from "../Restaurant";
const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 4,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 5,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  },
};

function Slider() {
    
  let IMG_CDN_URL = `https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/`;
  return (
    <div className=" dark:bg-black dark:text-white">
      <Carousel responsive={responsive}>
          {restaurants.map((item) => (
            <div
              key={item.info.id}
              className="flex flex-col justify-center items-center"
            >
              <img
                className="h-40 w-40 object-cover rounded-full"
                src={IMG_CDN_URL + item.info.cloudinaryImageId}
                alt={item.info.name}
              />
                <h3 className="text-lg mt-6">{item.info.name}</h3>
            </div>
          ))}
      </Carousel>
    </div>
  );
}
Slider.propTypes = {
  data: PropTypes.object,
};

export default Slider;
