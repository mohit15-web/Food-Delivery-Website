/* eslint-disable no-inner-declarations */
import { useEffect, useState } from "react";
import Card from "../../components/Card";
import getRestaurants from "../../utils/FetchApi";
import { FaMagnifyingGlass } from "react-icons/fa6";
import Loader from "../../Loader/Loader";
function Food() {
  const [count, setCount] = useState(12);
  const [allRestaurants, setAllRestaurants] = useState([]);
  const[name,setName]=useState("")
  useEffect(() => {
    async function getData() {
      let data = await getRestaurants();
      setAllRestaurants(data);
    }

    getData();
  }, []);

  console.log(allRestaurants);
  return allRestaurants.length === 0 ? <Loader /> : (
    <div className="pt-40">
      <div className="mb-6">
        <div className="relative">
          <input
            type="text"
            placeholder="Search for restaurant.."
            className="py-2 px-4 border border-gray-300 rounded-lg shadow-sm  ml-48 w-96"
            value={name}
            onChange={(e)=>setName(e.target.value)}
          />
          <FaMagnifyingGlass className="ml-2 text-gray-500 absolute left-[530px] top-[14px]" />
        </div>
      </div>
      <Card count={count} allRestaurants={allRestaurants} name={name}/>
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
  );
}

export default Food;
