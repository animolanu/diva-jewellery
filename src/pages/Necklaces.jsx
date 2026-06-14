import Navbar from "../components/Navbar";
import "../components/Hero.css";
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../firebase";

function Necklaces() {
  const navigate = useNavigate();
  const [firebaseNecklaces, setFirebaseNecklaces] = useState([]);
  useEffect(() => {
 const fetchNecklaces = async () => {
    const snap = await getDocs(collection(db, "products"));

    const necklaces = snap.docs
      .map(doc => ({
        id: doc.id,
        ...doc.data()
      }))
     .filter(item => item.category === "necklace");
    setFirebaseNecklaces(necklaces);
  };

  fetchNecklaces();
}, []);
  const handleBuy = (name, price) => {
    const product = {
      name,
      price,
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

  return (
    <>
      <Navbar />

      <div className="collection-page">
        <h1>Luxury Necklaces Collection</h1>
        <p>Elegant handcrafted necklaces for every occasion.</p>

        <div className="collection-grid">

          <div className="collection-card">
            <img src="/images/necklace1.jpg" />
            <h3>Diamond Necklace</h3>
            <p>₹79,999</p>
            <button className="luxury-btn" onClick={() => handleBuy("Diamond Necklace", 79999)}>
              Buy Now
            </button>
            <br /><br />

            <button
              className="luxury-btn"
              onClick={() => addToCart("Diamond Necklaces", 49999)}
            >
              Add to Cart
            </button>
          </div>

          <div className="collection-card">
            <img src="/images/necklace2.jpg" />
            <h3>Gold Necklace</h3>
            <p>₹65,999</p>
    
            <button className="luxury-btn" onClick={() => handleBuy("Gold Necklace", 65999)}>
              Buy Now
            </button>
            <br /><br />

            <button
              className="luxury-btn"
              onClick={() => addToCart("Diamond Necklaces", 49999)}
            >
              Add to Cart
            </button>
          </div>
          <div className="collection-card">
            <img src="/images/necklace3.jpg" />
            <h3>Gold Necklace</h3>
            <p>₹23,999</p>
            <button className="luxury-btn" onClick={() => handleBuy("Gold Necklace", 65999)}>
              Buy Now
            </button>
            <br /><br />

            <button
              className="luxury-btn"
              onClick={() => addToCart("Diamond Necklaces", 49999)}
            >
              Add to Cart
            </button>
          </div>
          <div className="collection-card">
            <img src="/images/necklace4.jpg" />
            <h3>Gold Necklace</h3>
            <p>₹45,999</p>
            
            <button className="luxury-btn" onClick={() => handleBuy("Gold Necklace", 65999)}>
              Buy Now
            </button>
            <br /><br />

            <button
              className="luxury-btn"
              onClick={() => addToCart("Diamond Necklaces", 49999)}
            >
              Add to Cart
            </button>
          </div>
          <div className="collection-card">
            <img src="/images/necklace5.jpg" />
            <h3>Gold Necklace</h3>
            <p>₹33,999</p>
            <button className="luxury-btn" onClick={() => handleBuy("Gold Necklace", 65999)}>
              Buy Now
            </button>
            <br /><br />

            <button
              className="luxury-btn"
              onClick={() => addToCart("Diamond Necklaces", 49999)}
            >
              Add to Cart
            </button>
          </div>
          <div className="collection-card">
            <img src="/images/necklace6.jpg" />
            <h3>Gold Necklace</h3>
            <p>₹65,999</p>
            
            <button className="luxury-btn" onClick={() => handleBuy("Gold Necklace", 65999)}>
              Buy Now
            </button>
            <br /><br />

            <button
              className="luxury-btn"
              onClick={() => addToCart("Diamond Necklaces", 49999)}
            >
              Add to Cart
            </button>
          </div>
          <div className="collection-card">
            <img src="/images/necklace7.jpg" />
            <h3>Gold Necklace</h3>
            <p>₹45,999</p>
            
            <button className="luxury-btn" onClick={() => handleBuy("Gold Necklace", 65999)}>
              Buy Now
            </button>
            <br /><br />

            <button
              className="luxury-btn"
              onClick={() => addToCart("Diamond Necklaces", 49999)}
            >
              Add to Cart
            </button>
          </div>
          <div className="collection-card">
            <img src="/images/necklace8.jpg" />
            <h3>Gold Necklace</h3>
            <p>₹85,999</p>
            
            <button className="luxury-btn" onClick={() => handleBuy("Gold Necklace", 65999)}>
              Buy Now
            </button>
            <br /><br />

            <button
              className="luxury-btn"
              onClick={() => addToCart("Diamond Necklaces", 49999)}
            >
              Add to Cart
            </button>
          </div>
          <div className="collection-card">
            <img src="/images/necklace9.jpg" />
            <h3>Gold Necklace</h3>
            <p>₹65,999</p>
            
            <button className="luxury-btn" onClick={() => handleBuy("Gold Necklace", 65999)}>
              Buy Now
            </button>
            <br /><br />

            <button
              className="luxury-btn"
              onClick={() => addToCart("Diamond Necklaces", 49999)}
            >
              Add to Cart
            </button>
          </div>
          <div className="collection-card">
            <img src="/images/necklace10.jpg" />
            <h3>Gold Necklace</h3>
            <p>₹85,999</p>
           
            <button className="luxury-btn" onClick={() => handleBuy("Gold Necklace", 65999)}>
              Buy Now
            </button>
            <br /><br />

            <button
              className="luxury-btn"
              onClick={() => addToCart("Diamond Necklaces", 49999)}
            >
              Add to Cart
            </button>
          </div>
          <div className="collection-card">
            <img src="/images/necklace11.jpg" />
            <h3>Gold Necklace</h3>
            <p>₹85,999</p>
           
            <button className="luxury-btn" onClick={() => handleBuy("Gold Necklace", 65999)}>
              Buy Now
            </button>
            <br /><br />

            <button
              className="luxury-btn"
              onClick={() => addToCart("Diamond Necklaces", 49999)}
            >
              Add to Cart
            </button>
          </div>
          <div className="collection-card">
            <img src="/images/necklace12.jpg" />
            <h3>Gold Necklace</h3>
            <p>₹85,999</p>
            
            <button className="luxury-btn" onClick={() => handleBuy("Gold Necklace", 65999)}>
              Buy Now
            </button>
            <br /><br />

            <button
              className="luxury-btn"
              onClick={() => addToCart("Diamond Necklaces", 49999)}
            >
              Add to Cart
            </button>
          </div>
          <div className="collection-card">
            <img src="/images/necklace13.jpg" />
            <h3>Gold Necklace</h3>
            <p>₹85,999</p>
            
            <button className="luxury-btn" onClick={() => handleBuy("Gold Necklace", 65999)}>
              Buy Now
            </button>
            <br /><br />

            <button
              className="luxury-btn"
              onClick={() => addToCart("Diamond Necklaces", 49999)}
            >
              Add to Cart
            </button>
          </div>
          <div className="collection-card">
            <img src="/images/necklace14.jpg" />
            <h3>Gold Necklace</h3>
            <p>₹85,999</p>
           
            <button className="luxury-btn" onClick={() => handleBuy("Gold Necklace", 65999)}>
              Buy Now
            </button>
            <br /><br />

            <button
              className="luxury-btn"
              onClick={() => addToCart("Diamond Necklaces", 49999)}
            >
              Add to Cart
            </button>
          </div>
          <div className="collection-card">
            <img src="/images/necklace15.jpg" />
            <h3>Gold Necklace</h3>
            <p>₹85,999</p>
            
            <button className="luxury-btn" onClick={() => handleBuy("Gold Necklace", 65999)}>
              Buy Now
            </button>
            <br /><br />

            <button
              className="luxury-btn"
              onClick={() => addToCart("Diamond Necklaces", 49999)}
            >
              Add to Cart
            </button>
          </div>
</div> {/* closes collection-grid */}

          <h2 style={{ marginTop: "60px", textAlign: "center" }}>
  New Necklace Arrivals
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
  {firebaseNecklaces.map((item) => (
    <div
      className="collection-card"
      key={item.id}
      style={{
        maxWidth: "350px",
        margin: "0 auto"
      }}
    >
     <img
  src={item.image}
  alt={item.name}
  style={{
    width: "100%",
    height: "250px",
    objectFit: "cover"
  }}
/>


      <h3>{item.name}</h3>

<p
  style={{
    textDecoration: "line-through",
    color: "gray"
  }}
>
  ₹{item.price}
</p>

<p
  style={{
    fontSize: "20px",
    fontWeight: "bold"
  }}
>
  ₹{Math.round(item.price * (1 - item.discount / 100))}
</p>

<p
  style={{
    color: "green",
    fontWeight: "bold"
  }}
>
  {item.discount}% OFF
</p>

<button
  className="luxury-btn"
  onClick={() =>
    handleBuy(
      item.name,
      Math.round(item.price * (1 - item.discount / 100))
    )
  }
>
  Buy Now
</button>


      <br /><br />

      <button
        className="luxury-btn"
        onClick={() => addToCart(item.name, item.price)}
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

export default Necklaces; 