import React from "react";
import "./Navbar.css";
import { Link, useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();

  const user = JSON.parse(localStorage.getItem("currentUser"));

  // CART ITEMS
  const cart = JSON.parse(localStorage.getItem("cart")) || [];

  const handleLogout = () => {
    localStorage.removeItem("currentUser");
    navigate("/login");
    window.location.reload();
  };

  return (
    <nav className="navbar">

      {/* LEFT MENU */}
      <ul className="nav-left">
        <li><Link to="/rings">Rings</Link></li>
        <li><Link to="/necklaces">Necklaces</Link></li>
        <li><Link to="/earrings">Earrings</Link></li>
      </ul>

      {/* CENTER LOGO */}
      <div className="logo">
        <Link to="/">DIVA</Link>
      </div>

      {/* RIGHT MENU */}
      <ul className="nav-right">

        <li>
          <Link to="/cart">
            🛒 Cart ({cart.length})
          </Link>
        </li>

        
    
        <Link to="/contact">Contact</Link>

        {!user ? (
          <li>
            <Link to="/login">Login</Link>
          </li>
        ) : (
          <>
           <li>
  <Link
    to="/account"
    style={{
      color: "#b48a5a",
      fontWeight: "bold",
      textDecoration: "none"
    }}
  >
    {user.name || user.phone}
  </Link>
</li>

            {user.role === "admin" && (
              <li style={{ color: "red", fontWeight: "bold" }}>
                Admin
              </li>
            )}

            <li
              onClick={handleLogout}
              style={{ cursor: "pointer", color: "gray" }}
            >
              Logout
            </li>
          </>
        )}
      </ul>
    </nav>
  );
};

export default Navbar;