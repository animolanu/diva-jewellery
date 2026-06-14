import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";
import "../components/Hero.css";

function Success() {
  const navigate = useNavigate();

  useEffect(() => {
    // auto redirect after 5 seconds (optional)
    const timer = setTimeout(() => {
      navigate("/");
    }, 5000);

    return () => clearTimeout(timer);
  }, [navigate]);

  return (
    <>
      <Navbar />

      <div className="success-page">
        <div className="success-box">
          <h1>🎉 Payment Successful</h1>
          <p>Thank you for your purchase!</p>

          <img
            src="/images/success.gif"
            alt="success"
            className="success-img"
          />

          <button className="luxury-btn" onClick={() => navigate("/")}>
            Back to Home
          </button>
        </div>
      </div>
    </>
  );
}

export default Success;