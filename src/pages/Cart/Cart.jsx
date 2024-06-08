import { Trash,IndianRupee } from 'lucide-react'
import { useDispatch, useSelector } from 'react-redux'
import { IMG_CDN_URL } from '../../constants';
import { REMOVE_FORM_CART } from '../../store/Reducers';
import cartLogo from '../../assets/SVG/cart.svg'
import { toast } from 'react-toastify';


export function Cart() {
    const cart = useSelector(state => state.cart.cartItems)
    const dispatch = useDispatch()
    console.log(cart);
    const handleRemove = (id) => {
        dispatch(REMOVE_FORM_CART(id))
        toast.success("Item removed from cart!", {
            position: "top-center",
          });
    }
  return cart.length === 0 ? <div className='py-60 flex flex-col justify-center items-center'><img src={cartLogo} alt="cartLogo" 
  className='h-60 w-60'
  />
  <h1>Cart is empty</h1></div> : (
    <div className='pt-20'>
        <div className="mx-auto flex max-w-3xl flex-col space-y-4 p-6 px-2 sm:p-10 sm:px-2">
      <h2 className="text-3xl font-bold">Your cart</h2>
      
      <ul className="flex flex-col divide-y divide-gray-200">
        {cart.map((product) => (
          <li key={product.id} className="flex flex-col py-6 sm:flex-row sm:justify-between">
            <div className="flex w-full space-x-2 sm:space-x-4">
              <img
                className="h-20 w-20 object-cover rounded-xl sm:h-32 sm:w-32"
                src={IMG_CDN_URL + product.imageId} 
                alt={product.name}
              />
              <div className="flex w-full flex-col justify-between pb-4">
                <div className="flex w-full justify-between space-x-2 pb-2">
                  <div className="space-y-1">
                    <h3 className="text-lg font-semibold leading-snug sm:pr-8">{product.name}</h3>
                    <p className="text-sm">{product.color}</p>
                  </div>
                  <div className="text-right flex justify-center items-center">
                  <IndianRupee/>
                    <p className="text-xl font-semibold">{product?.defaultPrice / 100}</p>
                  </div>
                </div>
                <div className="flex divide-x text-sm">
                  <button type="button" className="flex items-center space-x-2 px-2 py-1 pl-0"
                  onClick={() => handleRemove(product.id)}
                  >
                    <Trash size={16} />
                    <span>Remove</span>
                  </button>
                  {/* <button type="button" className="flex items-center space-x-2 px-2 py-1">
                    <Heart size={16} />
                    <span>Add to favorites</span>
                  </button> */}
                </div>
              </div>
            </div>
          </li>
        ))}
      </ul>
      <div className="space-y-1 text-right">
        <p>
          Total amount:
          <span className="font-semibold"> ₹48,967</span>
        </p>
      </div>
      <div className="flex justify-end space-x-4">
        <button
          type="button"
          className="rounded-md border border-black px-3 py-2 text-sm font-semibold text-black shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
        >
          Back to shop
        </button>
        <button
          type="button"
          className="rounded-md border border-black px-3 py-2 text-sm font-semibold text-black shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
        >
          Checkout
        </button>
      </div>
    </div>
    </div>
  )
}
