import Navbar from "../components/Navbar";
import "../components/Hero.css";

function HelpCenter() {
  return (
    <>
      <Navbar />

      <div className="checkout-page">
        <div className="help-box">
          <h2>Help Center</h2>

          <p>
            <strong>Email:</strong>
            support@divajewellery.com
          </p>

          <p>
            <strong>Phone:</strong>
            +91 9876543210
          </p>

          <p>
            <strong>Address:</strong>
            Diva Jewellery,
            MG Road,
            Kochi,
            Kerala,
            India
          </p>

          <p>
            Working Hours:
            Mon - Sat
            9:00 AM - 6:00 PM
          </p>
        </div>
      </div>
    </>
  );
}

export default HelpCenter;