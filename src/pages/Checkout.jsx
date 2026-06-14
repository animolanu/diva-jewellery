import { useState, useEffect } from "react";
import Navbar from "../components/Navbar";
import { useNavigate } from "react-router-dom";
import "../components/Hero.css";

function Checkout() {
  const navigate = useNavigate();

  const [product, setProduct] = useState(null);
  const [step, setStep] = useState(1);

  const [loading, setLoading] = useState(false);
  const [showQR, setShowQR] = useState(false);

  // USER DETAILS
  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    phone: "",
    address: "",
    city: "",
    pincode: "",
    district: "",
  });

  // Load product
  useEffect(() => {
    const data = localStorage.getItem("selectedProduct");
    if (data) {
      setProduct(JSON.parse(data));
    }
  }, []);

  // Input change
  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  // Proceed to form
  const handleProceed = () => {
    setStep(2);
  };

  // Submit details
  const handleSubmit = (e) => {
    e.preventDefault();

    if (
      !form.firstName ||
      !form.lastName ||
      !form.phone ||
      !form.address ||
      !form.city ||
      !form.pincode ||
      !form.district
    ) {
      alert("Please fill all details");
      return;
    }

    setStep(3);
  };

  // Payment loading
  const handlePayment = () => {
    setLoading(true);

    setTimeout(() => {
      setLoading(false);
      setShowQR(true);
    }, 1500);
  };

  return (
    <>
      <Navbar />

      <div className="checkout-page">
        <h1 className="checkout-title">Secure Checkout</h1>

        {/* STEP 1 - PRODUCT */}
        {step === 1 && product && (
          <div className="checkout-box">
            <h2>Order Summary</h2>

            <div className="item">
              <span>Product</span>
              <span>{product.name}</span>
            </div>

            <div className="item">
              <span>Price</span>
              <span>₹{product.price}</span>
            </div>

            <button className="pay-btn" onClick={handleProceed}>
              Proceed to Pay
            </button>
          </div>
        )}

        {/* STEP 2 - USER FORM */}
        {step === 2 && (
          <div className="checkout-box modern-form">
            <h2>Enter Delivery Details</h2>

            <form onSubmit={handleSubmit} className="form-grid">

              <div className="row">
                <input
                  name="firstName"
                  placeholder="First Name"
                  onChange={handleChange}
                />

                <input
                  name="lastName"
                  placeholder="Last Name"
                  onChange={handleChange}
                />
              </div>

              <input
                name="phone"
                placeholder="Phone Number"
                onChange={handleChange}
              />

              <input
                name="address"
                placeholder="Address"
                onChange={handleChange}
              />

              <div className="row">
                <input
                  name="city"
                  placeholder="City"
                  onChange={handleChange}
                />

                <input
                  name="district"
                  placeholder="District"
                  onChange={handleChange}
                />
              </div>

              <input
                name="pincode"
                placeholder="Pincode"
                onChange={handleChange}
              />

              <p className="disclaimer">
                ⚠ Only Scan & Pay is available. Never share your OTP, UPI PIN,
                or banking credentials with anyone.
              </p>

              <button className="pay-btn" type="submit">
                Continue to Payment
              </button>

            </form>
          </div>
        )}
      </div>

      {/* LOADING */}
      {loading && (
        <div className="popup">
          <div className="popup-box">
            <h2>Processing Payment...</h2>
          </div>
        </div>
      )}

      {/* STEP 3 */}
      {step === 3 && !showQR && (
        <div className="popup" onClick={handlePayment}>
          <div className="popup-box">
            <h2>Tap to Generate QR</h2>
            <p>Click anywhere to continue</p>
          </div>
        </div>
      )}

      {/* QR CODE */}
      {showQR && (
        <div className="popup" onClick={() => navigate("/success")}>
          <div className="popup-box">
            <h2>Scan & Pay</h2>
            <img src="/images/gpay-qr.png" alt="QR Code" />
            <p>Tap to complete order</p>
          </div>
        </div>
      )}
    </>
  );
}

export default Checkout;