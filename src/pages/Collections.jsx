import Navbar from "../components/Navbar";
import "../components/Hero.css";
import { useNavigate } from "react-router-dom";

function Collections() {
  const navigate = useNavigate();

  return (
    <>
      <Navbar />

      <div className="collection-page">
        <h1>Explore Our Collections</h1>
        <p>
          Discover our luxurious Rings, Necklaces and Earrings.
        </p>

        <div className="collection-grid">

          <div className="collection-card">
            <img src="/images/ring_c.jpg" alt="Rings" />
            <h3>Luxury Rings</h3>
            <button
              className="luxury-btn"
              onClick={() => navigate("/rings")}
            >
              View Collection
            </button>
          </div>

          <div className="collection-card">
            <img src="/images/neck_c.jpg" alt="Necklaces" />
            <h3>Diamond Necklaces</h3>
            <button
              className="luxury-btn"
              onClick={() => navigate("/necklaces")}
            >
              View Collection
            </button>
          </div>

          <div className="collection-card">
            <img src="/images/earing_c.jpg" alt="Earrings" />
            <h3>Luxury Earrings</h3>
            <button
              className="luxury-btn"
              onClick={() => navigate("/earrings")}
            >
              View Collection
            </button>
          </div>

        </div>
      </div>
    </>
  );
}

export default Collections;