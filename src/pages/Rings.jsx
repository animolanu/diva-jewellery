import Navbar from "../components/Navbar";
import "../components/Hero.css";
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../firebase";

function Rings() {
  const navigate = useNavigate();
  const [firebaseRings, setFirebaseRings] = useState([]);

  useEffect(() => {
  const fetchRings = async () => {
    const snap = await getDocs(collection(db, "products"));

    const rings = snap.docs
      .map(doc => ({
        id: doc.id,
        ...doc.data()
      }))
      .filter(item => item.category === "ring");

    setFirebaseRings(rings); // ✅ FIXED
  };

  fetchRings();
}, []);

  // BUY NOW
  const handleBuy = (name, price) => {
    const user = JSON.parse(localStorage.getItem("currentUser"));

    if (!user) {
      alert("Please login first");
      navigate("/login");
      return;
    }

    const product = {
      name,
      price,
      user: user.name,
      time: new Date().toLocaleString()
    };

    localStorage.setItem("selectedProduct", JSON.stringify(product));

    navigate("/checkout");
  };

  // ADD TO CART
  const addToCart = (name, price) => {
    const user = JSON.parse(localStorage.getItem("currentUser"));

    if (!user) {
      alert("Please login first");
      navigate("/login");
      return;
    }

    const cart = JSON.parse(localStorage.getItem("cart")) || [];

    cart.push({
      name,
      price,
       quantity: 1
    });

    localStorage.setItem("cart", JSON.stringify(cart));

    alert(`${name} added to cart`);
  };
     console.log(firebaseRings);

 return (
  <>
    <Navbar />

    <div className="collection-page">
      <h1>Luxury Rings Collection</h1>
      <p>Discover our finest handcrafted rings.</p>

      {/* Existing Rings */}
      <div className="collection-grid">

        <div className="collection-card">
          <img src="/images/ring1.jpg" alt="Diamond Ring" />
          <h3>Diamond Ring</h3>
          <p>₹49,999</p>
          <button
            className="luxury-btn"
            onClick={() => handleBuy("Diamond Ring", 49999)}
          >
            Buy Now
          </button>
          <br /><br />
          <button
            className="luxury-btn"
            onClick={() => addToCart("Diamond Ring", 49999)}
          >
            Add to Cart
          </button>
        </div>

        <div className="collection-card">
          <img src="/images/ring2.jpg" alt="Gold Ring" />
          <h3>Gold Ring</h3>
          <p>₹34,999</p>
          <button
            className="luxury-btn"
            onClick={() => handleBuy("Gold Ring", 34999)}
          >
            Buy Now
          </button>
          <br /><br />
          <button
            className="luxury-btn"
            onClick={() => addToCart("Gold Ring", 34999)}
          >
            Add to Cart
          </button>
        </div>

        <div className="collection-card">
          <img src="/images/ring3.jpg" alt="Rose Gold Ring" />
          <h3>Rose Gold Ring</h3>
          <p>₹39,999</p>
          <button
            className="luxury-btn"
            onClick={() => handleBuy("Rose Gold Ring", 39999)}
          >
            Buy Now
          </button>
          <br /><br />
          <button
            className="luxury-btn"
            onClick={() => addToCart("Rose Gold Ring", 39999)}
          >
            Add to Cart
          </button>
        </div>

        <div className="collection-card">
          <img src="/images/ring4.jpg" alt="Wedding Ring" />
          <h3>Wedding Ring</h3>
          <p>₹59,999</p>
          <button
            className="luxury-btn"
            onClick={() => handleBuy("Wedding Ring", 59999)}
          >
            Buy Now
          </button>
          <br /><br />
          <button
            className="luxury-btn"
            onClick={() => addToCart("Wedding Ring", 59999)}
          >
            Add to Cart
          </button>
        </div>

      </div>

      {/* Firebase Rings Section */}
      <h2 style={{ marginTop: "60px", textAlign: "center" }}>
        New Arrivals
      </h2>

     <div
  style={{
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(350px, 350px))",
    justifyContent: "center",
    gap: "30px",
    marginTop: "20px"
  }}
>
        {firebaseRings.map((ring) => (
          //<div className="collection-card" key={ring.id}>
          <div
  className="collection-card"
  key={ring.id}
  style={{
    maxWidth: "350px",
    margin: "0 auto"
  }}
>
            <img
  src={ring.image}
  alt={ring.name}
  style={{
    width: "100%",
    height: "250px",
    objectFit: "cover",
    borderRadius: "10px"
  }}
/>
<h3>{ring.name}</h3>

<p
  style={{
    textDecoration: "line-through",
    color: "gray"
  }}
>
  ₹{ring.price}
</p>

<p
  style={{
    fontSize: "20px",
    fontWeight: "bold"
  }}
>
  ₹{Math.round(ring.price * (1 - ring.discount / 100))}
</p>

<p
  style={{
    color: "green",
    fontWeight: "bold"
  }}
>
  {ring.discount}% OFF
</p>

<button
  className="luxury-btn"
  onClick={() =>
    handleBuy(
      ring.name,
      Math.round(ring.price * (1 - ring.discount / 100))
    )
  }
>
  Buy Now
</button>

            <br /><br />

            <button
              className="luxury-btn"
              onClick={() => addToCart(ring.name, ring.price)}
            >
              Add To Cart
            </button>
          </div>
        ))}
      </div>

    </div>
  </>
);
}

export default Rings;