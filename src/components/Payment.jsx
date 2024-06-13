import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useNavigate} from "react-router-dom";
import loadRazorpayScript from "../utils/loadRazorpayScript";
import PropTypes from "prop-types";
import { useDispatch, } from "react-redux";
import { MAKE_CART_EMPTY } from "../store/Reducers";
const Payment = ({total , name , address , contact}) => {
  const navigate = useNavigate()
  const dispatch = useDispatch();

  const handlePayment = async (total) => {

    if(!total || !name || !address || !contact){
      toast.error("Please fill all the details", {
        position: "bottom-right",
        theme: "colored",
      });
      return;
    }
    const res = await loadRazorpayScript(
      "https://checkout.razorpay.com/v1/checkout.js"
    );

    if (!res) {
      toast.error("Razorpay SDK failed to load. Are you online?", {
        position: "bottom-right",
        theme: "colored",
      });
      return;
    }

    const options = {
      key: "rzp_test_d6c3GOjzsdGdZC", // Replace with your Razorpay key ID
      amount: total * 100, // Razorpay requires the amount in paise (smallest currency unit)
      currency: "INR",
      name: "EatsExpress",
      description: "Test Transaction",
      image: "https://example.com/your_logo",
      handler: (response) => {
        toast.success("Payment Successful!", {
          position: "bottom-right",
          theme: "colored",
        });
        console.log(response);

        // Further process the response here (e.g., store it in a state or send to your server for verification)
      },
      prefill: {
        name: {name},
        email: "email@example.com",
        contact: {contact},
      },
      notes: {
        address: {address},
      },
      theme: {
        color: "#F37254",
      },
    };

    const paymentObject = new window.Razorpay(options);
    paymentObject.open();

    dispatch(MAKE_CART_EMPTY())
    navigate('/')
  };

  return (
    <button
      type="button"
      className="rounded-md border dark:border-white bg-black px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
      onClick={() => handlePayment(total)}
    >
      Make payment
    </button>
  );
};

Payment.propTypes = {
  total: PropTypes.number,
  name: PropTypes.string,
  address: PropTypes.string,
  contact: PropTypes.number
};

export default Payment;
