import { useState } from "react";
import { Menu, MoonIcon, Sun, X } from "lucide-react";
import { Link } from "react-router-dom";
import logo from "../assets/logo.png";
import profileSvg from "../assets/SVG/profile.svg";
import SidebarDemo from "./SidebarDemo";
import { useTheme } from "../ThemeContext/ThemseContext"; // Make sure the file path is correct
import { toast } from "react-toastify";

const menuItems = [
  {
    name: "Home",
    href: "/",
  },
  {
    name: "Food",
    href: "/food",
  },
  {
    name: "Ask AI",
    href: "/askai",
  },
];

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [showSidebar, setShowSidebar] = useState(false);
  const { darkMode, setDarkMode } = useTheme();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const toggleSidebar = () => {
    setIsMenuOpen(false);
    setShowSidebar(!showSidebar);
  };

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };
  const user = JSON.parse(localStorage.getItem("user"));
  console.log(user?.displayName, "user");

  // Conditionally add the Cart item if the user is logged in
  const conditionalMenuItems = [...menuItems];
  if (user !== null) {
    conditionalMenuItems.push({
      name: "Cart",
      href: "/cart",
    });
  }

  return (
    <nav className="fixed z-50 w-full bg-white pb-6 px-10 xl:p-0 dark:bg-black dark:text-white">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-6 sm:px-6 lg:px-8">
        <Link to="/">
          <div className="flex gap-2  justify-center items-center">
            <img src={logo} alt="logo" className="h-10 w-10" />
            <h1 className="text-lg">EatsExpress</h1>
          </div>
        </Link>
        <div className="hidden lg:block">
          <ul className="inline-flex space-x-8">
            {menuItems.map((item) => (
              <li key={item.name}>
                <Link to={item.href}>
                  <p className="text-lg hover:underline">{item.name}</p>
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div className="hidden lg:flex justify-center items-center gap-3">
          <button onClick={toggleDarkMode} className="mx-4">
            {!darkMode ? <Sun /> : <MoonIcon />}
          </button>
          <button type="button" onClick={toggleSidebar}>
            {!user ? (
              <img src={profileSvg} alt="profile" className="h-10 w-8" />
            ) : (
              <p>{user.displayName}</p>
            )}
          </button>
          {user && (
            <>
              <button className="px-6 py-2 bg-red-500 rounded-md text-white"
              onClick={() => {
                localStorage.removeItem('user')
                window.location.reload()
                toast.success("Logout successfully",{
                  position: "top-center",
                })
              }}
              >logout</button>
            </>
          )}
        </div>
        <div className="lg:hidden">
          <Menu onClick={toggleMenu} className="h-6 w-6 cursor-pointer" />
        </div>
      </div>
      {isMenuOpen && (
        <div className="absolute inset-x-0 top-0 z-50 origin-top-right transform p-2 transition lg:hidden">
          <div className="divide-y-2 divide-gray-50 rounded-lg bg-white shadow-lg ring-1 ring-black ring-opacity-5">
            <div className="px-5 pb-6 pt-5">
              <div className="flex items-center justify-between">
                <div className="inline-flex items-center space-x-2">
                  <span className="font-bold text-xl">EatsExpress</span>
                </div>
                <div className="-mr-2">
                  <button
                    type="button"
                    onClick={toggleMenu}
                    className="inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
                  >
                    <span className="sr-only">Close menu</span>
                    <X className="h-6 w-6" aria-hidden="true" />
                  </button>
                </div>
              </div>
              <div className="mt-6">
                <nav className="grid gap-y-4">
                  {menuItems.map((item) => (
                    <Link key={item.name} to={item.href}>
                      <p className="-m-3 flex items-center rounded-md p-3 text-sm font-semibold hover:bg-gray-50">
                        <span className="ml-3 text-base font-medium text-gray-900">
                          {item.name}
                        </span>
                      </p>
                    </Link>
                  ))}
                </nav>
              </div>
              <button
                className="bg-red-600 rounded-lg mt-4 text-white px-6 py-2"
                onClick={toggleSidebar}
              >
                Login
              </button>
            </div>
          </div>
        </div>
      )}
      {showSidebar && (
        <SidebarDemo open={showSidebar} setOpen={setShowSidebar} />
      )}
    </nav>
  );
}

export default Navbar;
