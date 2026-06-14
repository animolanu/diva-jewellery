import { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import { useNavigate } from "react-router-dom";
import "../components/Hero.css";

function Cart() {
  const [cart, setCart] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const items = JSON.parse(localStorage.getItem("cart")) || [];
    setCart(items);
  }, []);

  const removeItem = (index) => {
    const updatedCart = [...cart];

    updatedCart.splice(index, 1);

    setCart(updatedCart);

    localStorage.setItem("cart", JSON.stringify(updatedCart));
  };

  const total = cart.reduce(
    (sum, item) => sum + Number(item.price),
    0
  );

  const checkoutCart = () => {
    if (cart.length === 0) {
      alert("Your cart is empty");
      return;
    }

    localStorage.setItem(
      "selectedProduct",
      JSON.stringify({
        name: `${cart.length} Items`,
        price: total,
        time: new Date().toLocaleString()
      })
    );

    navigate("/checkout");
  };

  return (
    <>
      <Navbar />

      <div className="cart-page">
        <h1 className="cart-title">Shopping Cart</h1>

        <div className="cart-box">

          {cart.length === 0 ? (
            <div className="empty-cart">
              Your cart is empty
            </div>
          ) : (
            <>
              {cart.map((item, index) => (
                <div className="cart-item" key={index}>
                  <div>
                    <h3>{item.name}</h3>
                    <p>₹{item.price}</p>
                  </div>

                  <button
                    className="remove-btn"
                    onClick={() => removeItem(index)}
                  >
                    Remove
                  </button>
                </div>
              ))}

              <div className="cart-total">
                Total: ₹{total}
              </div>

              <br />

              <button
                className="pay-btn"
                onClick={checkoutCart}
              >
                Proceed To Checkout
              </button>
            </>
          )}

        </div>
      </div>
    </>
  );
}

export default Cart;