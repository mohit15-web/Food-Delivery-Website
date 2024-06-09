import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useNavigate} from "react-router-dom";
import loadRazorpayScript from "../utils/loadRazorpayScript";
import PropTypes from "prop-types";
const Payment = ({total}) => {
  const navigate = useNavigate()
  const handlePayment = async (total) => {
    const res = await loadRazorpayScript(
      "https://checkout.razorpay.com/v1/checkout.js"
    );

    if (!res) {
      toast.error("Razorpay SDK failed to load. Are you online?", {
        position: "top-center",
      });
      return;
    }

    const options = {
      key: "rzp_test_d6c3GOjzsdGdZC", // Replace with your Razorpay key ID
      amount: total * 100, // Razorpay requires the amount in paise (smallest currency unit)
      currency: "INR",
      name: "Food Delivery",
      description: "Test Transaction",
      image: "https://example.com/your_logo",
      handler: (response) => {
        toast.success("Payment Successful!", {
          position: "top-center",
        });
        console.log(response);

        // Further process the response here (e.g., store it in a state or send to your server for verification)
      },
      prefill: {
        name: "Your Name",
        email: "email@example.com",
        contact: "7249395578",
      },
      notes: {
        address: "Your Address",
      },
      theme: {
        color: "#F37254",
      },
    };

    const paymentObject = new window.Razorpay(options);
    paymentObject.open();

    navigate('/')
  };

  return (
    <button
      type="button"
      className="rounded-md bg-black px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
      onClick={() => handlePayment(total)}
    >
      Make payment
    </button>
  );
};

Payment.propTypes = {
  total: PropTypes.Number,
};

export default Payment;
