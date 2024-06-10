/* eslint-disable no-inner-declarations */
import bikeImg from "../../assets/bike.png";
import "../../index.css";
import { Car, Shield } from "lucide-react";
import Card from "../../components/Card";
import Slider from "../../components/Carousel";
import { useEffect, useState } from "react";
import Loader from "../../Loader/Loader";
import getRestaurants from "../../utils/FetchApi";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const [count, setCount] = useState(12);
  const [allRestaurants, setAllRestaurants] = useState([]);
  const navigate = useNavigate()
  useEffect(() => {
    async function getData() {
      let data = await getRestaurants();
      setAllRestaurants(data);
    }

    getData();
  }, []);

  console.log(allRestaurants);

  return allRestaurants.length === 0 ? (
    <Loader />
  ) : (
    <main>
      <div
        className="flex px-10 xl:px-36 flex-wrap justify-between pb-20 xl:pb-10
      dark:bg-black dark:text-white pt-20"
      >
        {/* left section  */}
        <div className=" pt-20">
          <p className="text-xl mb-3">Easy way to make an order</p>
          <h1 className="text-4xl mb-5 font-bold spain leading-normal">
            <span className="text-red-500">HUNGRY?</span> Just wait <br /> food
            at <span className="text-red-500">your door</span>
          </h1>
          <p className="text-gray-500">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Qui <br />{" "}
            magni delectus tenetur autem, sint veritatis!
          </p>
          <div className="my-10 flex gap-6">
            <button className="bg-red-600 rounded-lg text-white px-6 py-3"
            onClick={()=>navigate("/food")}
            >
              Order now {">"}{" "}
            </button>
            <a href="#popular">
              <button className="text-red-600 rounded-lg border border-red-600 px-6 py-3">
                See all foods{" "}
              </button>
            </a>
          </div>
          <div className="flex gap-5 ">
            <div className="flex items-center gap-2">
              <span className="bg-red-700 text-white p-1 rounded-full">
                <Car />
              </span>
              <h1>No shipping charge</h1>
            </div>
            <div className="flex items-center gap-2">
              <span className="bg-red-700 text-white p-1 rounded-full">
                <Shield />
              </span>
              <h1>100% secure checkout</h1>
            </div>
          </div>
        </div>

        {/* right section  */}
        <div className="hidden lg:block">
          <img
            src={bikeImg}
            alt="bike"
            className=" h-[300px] xl:h-[700px] object-cover"
          />
        </div>
      </div>
      <div className="py-10 xl:px-32 dark:bg-black dark:text-white">
        <h1 className="text-3xl pl-10 xl:pl-16 py-12">Whats on your mind?</h1>
        <Slider allRestaurants={allRestaurants} />
      </div>
      <div id="popular" className="dark:bg-black dark:text-white py-10">
        <h1 className="text-3xl pl-10 xl:pl-48 py-8">Popular Foods</h1>
        <Card count={count} allRestaurants={allRestaurants} />
        {count === 12 ? (
        <div className="flex justify-center items-center py-10">
          <h1
            className="text-center text-lg py-3 px-6 bg-red-600 rounded-lg cursor-pointer text-white"
            onClick={() => {
              console.log("clicked");
              setCount((prev) => prev + 8);
            }}
          >
            View Full Menu
          </h1>
        </div>
      ) : null}
      </div>
    </main>
  );
};

export default Home;
