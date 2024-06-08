import { useState } from "react";
import loginImage from "../assets/loginImage.avif";
import { X } from "lucide-react";
import PropTypes from 'prop-types'
const SidebarDemo = ({ open, setOpen }) => {
  const [showSignUp, setShowSignUp] = useState(false);
  return (
    <div className="absolute dark:bg-black dark:text-white top-0 right-0 text-black border z-20 bg-white">
      <button
        className="absolute left-0 top-0 z-50 pt-4 pl-4"
        onClick={() => {
          console.log("clicked");
          setOpen(false);
        }}
      >
        {" "}
        <X />
      </button>
      <div className={` ${open ? "w-[250px] md:w-[330px] lg:w-[350px] xl:w-[400px]" : "w-20 "}  h-screen mt-20`}>
        <div className="flex justify-between items-center px-10 my-10">
          <div>
            <p className="text-xl font-bold text-left">
              {showSignUp ? "Sign Up" : "Login"}
            </p>
            <p>
              or{" "}
              <span onClick={() => setShowSignUp(!showSignUp)}
                className="text-orange-600 cursor-pointer"
                >
                {showSignUp ? "login to your account" : "create an account"}
              </span>
            </p>
          </div>
          <div>
            <img
              src={loginImage}
              alt="loginImage"
              className="w-20 h-20 object-cover hidden xl:block"
            />
          </div>
        </div>

        <div className="flex flex-col gap-4 justify-center items-center">
          {showSignUp ? (
            <input
              placeholder="Name"
              type="text"
              name="text"
              className="input"
            />
          ) : null}

          <input
            placeholder="Email"
            type="text"
            name="text"
            className="input"
          />
          <input
            placeholder="Password"
            type="text"
            name="text"
            className="input"
          />
          {!showSignUp ? (
            <button className="bg-orange-600 hover:bg-orange-700 rounded-lg border text-white  px-6 py-3">
              Login{" "}
            </button>
          ) : (
            <button className="bg-orange-600 hover:bg-orange-700 rounded-lg border text-white  px-6 py-3">
              Sign Up{" "}
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

SidebarDemo.propTypes = {
  open: PropTypes.bool,
  setOpen: PropTypes.func,
}
export default SidebarDemo;
