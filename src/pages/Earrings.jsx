import Navbar from "../components/Navbar";
import "../components/Hero.css";
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../firebase";

function Earrings() {
  const navigate = useNavigate();
  const [firebaseEarrings, setFirebaseEarrings] = useState([]);

  useEffect(() => {
  const fetchEarrings = async () => {
    const snap = await getDocs(collection(db, "products"));

    const  earrings = snap.docs
      .map(doc => ({
        id: doc.id,
        ...doc.data()
      }))
     .filter(item => item.category === "earrings");

    setFirebaseEarrings(earrings);
  };

  fetchEarrings();
}, []);
const handleBuy = (name, price) => {
  const product = {
    name,
    price,
    time: new Date().toLocaleString()
  };

  localStorage.setItem(
    "selectedProduct",
    JSON.stringify(product)
  );

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

  return (
    <>
      <Navbar />

      <div className="collection-page">
        <h1>Luxury Earrings Collection</h1>
        <p>Discover our finest handcrafted earrings.</p>

        <div className="collection-grid">

          <div className="collection-card">
            <img src="/images/earring1.jpg" />
            <h3>Diamond Earrings</h3>
            <p>₹29,999</p>
            <button className="luxury-btn" onClick={() => handleBuy("Diamond Earrings", 29999)}>
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
            <img src="/images/earring2.jpg" />
            <h3>Gold Earrings</h3>
            <p>₹19,999</p>
            <button className="luxury-btn" onClick={() => handleBuy("Gold Earrings", 19999)}>
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
            <img src="/images/earring3.jpg" />
            <h3>Diamond Earrings</h3>
            <p>₹29,999</p>
            <button className="luxury-btn" onClick={() => handleBuy("Diamond Earrings", 29999)}>
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
            <img src="/images/earring4.jpg" />
            <h3>Diamond Earrings</h3>
            <p>₹29,999</p>
            <button className="luxury-btn" onClick={() => handleBuy("Diamond Earrings", 29999)}>
              Buy Now
            </button>
            <br /><br />

            <button
              className="luxury-btn"
              onClick={() => addToCart("Diamond Earrings", 49999)}
            >
              Add to Cart
            </button>
          </div>
          <div className="collection-card">
            <img src="/images/earring5.jpg" />
            <h3>Diamond Earrings</h3>
            <p>₹29,999</p>
            <button className="luxury-btn" onClick={() => handleBuy("Diamond Earrings", 29999)}>
              Buy Now
            </button>
            <br /><br />

            <button
              className="luxury-btn"
              onClick={() => addToCart("DiamondEarrings", 49999)}
            >
              Add to Cart
            </button>
          </div>
          <div className="collection-card">
            <img src="/images/earring6.jpg" />
            <h3>Diamond Earrings</h3>
            <p>₹29,999</p>
            <button className="luxury-btn" onClick={() => handleBuy("Diamond Earrings", 29999)}>
              Buy Now
            </button>
            <br /><br />

            <button
              className="luxury-btn"
              onClick={() => addToCart("Diamond Earrings", 49999)}
            >
              Add to Cart
            </button>
          </div>
          <div className="collection-card">
            <img src="/images/earring7.jpg" />
            <h3>gold Earrings</h3>
            <p>₹29,999</p>
            <button className="luxury-btn" onClick={() => handleBuy("Diamond Earrings", 29999)}>
              Buy Now
            </button>
            <br /><br />

            <button
              className="luxury-btn"
              onClick={() => addToCart("Diamond Earrings", 49999)}
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
  {firebaseEarrings.map((earring) => (
    <div
      className="collection-card"
      key={earring.id}
      style={{
        maxWidth: "350px",
        margin: "0 auto"
      }}
    >
      <img
        src={earring.image}
        alt={earring.name}
        style={{
          width: "100%",
          height: "250px",
          objectFit: "cover",
          borderRadius: "10px"
        }}
      />

     <h3>{earring.name}</h3>

<p
  style={{
    textDecoration: "line-through",
    color: "gray"
  }}
>
  ₹{earring.price}
</p>

<p
  style={{
    fontSize: "20px",
    fontWeight: "bold"
  }}
>
  ₹{Math.round(earring.price * (1 - earring.discount / 100))}
</p>

<p
  style={{
    color: "green",
    fontWeight: "bold"
  }}
>
  {earring.discount}% OFF
</p>

<button
  className="luxury-btn"
  onClick={() =>
    handleBuy(
      earring.name,
      Math.round(earring.price * (1 - earring.discount / 100))
    )
  }
>
  Buy Now
</button>
      
      <br /><br />

      <button
        className="luxury-btn"
        onClick={() => addToCart(earring.name, earring.price)}
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

export default Earrings;