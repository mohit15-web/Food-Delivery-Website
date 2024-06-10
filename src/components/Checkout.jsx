import { X } from "lucide-react";
import { useDispatch, useSelector } from "react-redux";
import { IMG_CDN_URL } from "../constants";
import { useEffect, useState,} from "react";
import Payment from "./Payment";
import Loader from "../Loader/Loader"; // Assuming you have a Loader component
import { toast } from "react-toastify";
import { REMOVE_FORM_CART } from "../store/Reducers";

export function Checkout() {
  const cart = useSelector((state) => state.cart.cartItems);
  const dispatch = useDispatch();
  const [total, setTotal] = useState(0);
  // const [loading, setLoading] = useState(true);
  const [name, setName] = useState("");
  const [address, setAddress] = useState("");
  const [contact, setContact] = useState("");

  useEffect(() => {
    let sum = cart.reduce((acc, curr) => {
      console.log(curr.price);
      return (acc += (curr.price || curr.defaultPrice) / 100);
    }, 0);

    console.log("sum is", sum);

    setTotal(sum);
  }, [cart]);
  const handleRemove = (id) => {
    dispatch(REMOVE_FORM_CART(id));
    toast.success("Item removed from cart!", {
      position: "top-center",
    });
  };

  return (
    <div className="py-40">
      <div className="mx-auto my-4 max-w-4xl md:my-6">
        {cart.length === 0 ? (
          <Loader /> // Display a loader while the data is being fetched
        ) : (
          <div className="rounded-xl shadow">
            <div className="grid grid-cols-1 md:grid-cols-2">
              {/* Contact Info */}
              <div className="px-5 py-6 text-gray-900 md:px-8">
                <div className="flow-root">
                  <div className="-my-6 divide-y divide-gray-200">
                    <div className="py-6">
                      <form>
                        <div className="mx-auto max-w-2xl px-4 lg:max-w-none lg:px-0">
                          <div>
                            <h3
                              id="contact-info-heading"
                              className="text-lg font-semibold text-gray-900"
                            >
                              Contact information
                            </h3>
                            <div className="mt-4 w-full">
                              <label
                                className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                                htmlFor="name"
                              >
                                Full Name
                              </label>
                              <input
                                className="flex h-10 w-full rounded-md border border-black/30 bg-transparent px-3 py-2 text-sm placeholder:text-gray-600 focus:outline-none focus:ring-1 focus:ring-black/30 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                                type="text"
                                placeholder="Enter your name"
                                id="name"
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                              />
                            </div>
                          </div>

                          <div className="mt-10">
                            <h3 className="text-lg font-semibold text-gray-900">
                              Shipping address
                            </h3>
                            <div className="mt-6 grid grid-cols-1 gap-x-4 gap-y-6 sm:grid-cols-3">
                              <div className="sm:col-span-3">
                                <label
                                  htmlFor="address"
                                  className="block text-sm font-medium text-gray-700"
                                >
                                  Address
                                </label>
                                <div className="mt-1">
                                  <input
                                    type="text"
                                    id="address"
                                    name="address"
                                    autoComplete="street-address"
                                    className="flex h-10 w-full rounded-md border border-black/30 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-black/30 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                                    value={address}
                                    onChange={(e) => setAddress(e.target.value)}
                                  />
                                </div>
                              </div>
                              <div>
                                <label
                                  htmlFor="city"
                                  className="block text-sm font-medium text-gray-700"
                                >
                                  City
                                </label>
                                <div className="mt-1">
                                  <input
                                    type="text"
                                    id="city"
                                    name="city"
                                    autoComplete="address-level2"
                                    className="flex h-10 w-full rounded-md border border-black/30 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-black/30 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                                  />
                                </div>
                              </div>

                              <div>
                                <label
                                  htmlFor="postal-code"
                                  className="block text-sm font-medium text-gray-700"
                                >
                                  Postal code
                                </label>
                                <div className="mt-1">
                                  <input
                                    type="text"
                                    id="postal-code"
                                    name="postal-code"
                                    autoComplete="postal-code"
                                    className="flex h-10 w-full rounded-md border border-black/30 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-black/30 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                                  />
                                </div>
                              </div>
                              <div className="sm:col-span-3">
                                <label
                                  htmlFor="country"
                                  className="block text-sm font-medium text-gray-700"
                                >
                                  Contact
                                </label>
                                <div className="mt-1">
                                  <input
                                    type="number"
                                    id="country"
                                    name="country"
                                    autoComplete="country"
                                    className="flex h-10 w-full rounded-md border border-black/30 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-black/30 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                                    value={contact}
                                    onChange={(e) => setContact(e.target.value)}
                                  />
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="mt-6">
                            <Payment
                              name={name}
                              address={address}
                              contact={contact}
                              total={total}
                            />
                          </div>
                        </div>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
              {/* Summary */}
              <div className="bg-gray-50 px-5 py-6 text-gray-900 md:px-8">
                <h3 className="text-lg font-semibold">Order Summary</h3>
                <ul className="mt-6 space-y-6">
                  {cart.map((product) => (
                    <li
                      key={product.id}
                      className="flex items-stretch justify-between space-x-5 py-7"
                    >
                      <div className="flex flex-1 items-stretch">
                        <div className="flex-shrink-0">
                          <img
                            className="h-20 w-20 object-cover rounded-lg border border-gray-200 bg-white"
                            src={IMG_CDN_URL + product.imageId}
                            alt={product.imageSrc}
                          />
                        </div>
                        <div className="ml-5 flex flex-col justify-between">
                          <div className="flex-1">
                            <p className="text-sm font-bold">{product.name}</p>
                            <p className="mt-1.5 text-sm font-medium text-gray-500">
                              {product.color}
                            </p>
                          </div>
                          <p className="mt-4 text-xs font-medium ">x 1</p>
                        </div>
                      </div>
                      <div className="ml-auto flex flex-col items-end justify-between">
                        <p className="text-right text-sm font-bold text-gray-900">
                          {product.price}
                        </p>
                        <button
                          type="button"
                          className="-m-2 inline-flex rounded p-2 text-gray-400 transition-all duration-200 hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-gray-900 focus:ring-offset-2"
                          onClick={handleRemove}
                        >
                          <span className="sr-only">Remove</span>
                          <X className="h-5 w-5" />
                        </button>
                      </div>
                    </li>
                  ))}
                </ul>
                <div className="mt-6 border-t border-gray-200 pt-6">
                  <div className="flex justify-between">
                    <p className="text-sm font-medium text-gray-900">Total</p>
                    <p className="text-sm font-medium text-gray-900">
                      ₹{total.toFixed(2)}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
