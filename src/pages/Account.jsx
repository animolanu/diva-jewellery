import Navbar from "../components/Navbar";
import "../components/Hero.css";
import { useState } from "react";

function Account() {
  const currentUser =
    JSON.parse(localStorage.getItem("currentUser")) || {};

  const [user, setUser] = useState(currentUser);

  const handleChange = (e) => {
    setUser({
      ...user,
      [e.target.name]: e.target.value,
    });
  };

  const saveProfile = () => {
    localStorage.setItem(
      "currentUser",
      JSON.stringify(user)
    );

    alert("Profile Updated Successfully");
  };

  return (
    <>
      <Navbar />

      <div className="account-page">
        <div className="account-container">

          {/* ACCOUNT CARD */}
          <div className="account-box">

            <div className="profile-circle">
              {user?.name
                ? user.name.charAt(0).toUpperCase()
                : "U"}
            </div>

            <h2>My Account</h2>

            <input
              name="name"
              value={user.name || ""}
              placeholder="Full Name"
              onChange={handleChange}
            />

            <input
              name="phone"
              value={user.phone || ""}
              placeholder="Phone"
              onChange={handleChange}
            />

            <input
              name="email"
              value={user.email || ""}
              placeholder="Email"
              onChange={handleChange}
            />

            <textarea
              name="address"
              value={user.address || ""}
              placeholder="Address"
              rows="4"
              onChange={handleChange}
            />

            <button
              className="account-btn"
              onClick={saveProfile}
            >
              Update Profile
            </button>
          </div>

          {/* HELP CENTER */}
          <div className="help-box">

            <h2>Help Center</h2>

            <div className="help-item">
              <h4>Email Support</h4>
              <p>support@divajewellery.com</p>
            </div>

            <div className="help-item">
              <h4>Customer Care</h4>
              <p>+91 98765 43210</p>
            </div>

            <div className="help-item">
              <h4>Office Address</h4>
              <p>
                Diva Jewellery<br />
                MG Road, Kochi<br />
                Kerala - 682011
              </p>
            </div>

            <div className="faq">
              <h3>Frequently Asked Questions</h3>

              <div className="faq-item">
                <strong>How long is delivery?</strong>
                Usually 3-7 business days.
              </div>

              <div className="faq-item">
                <strong>Can I return jewellery?</strong>
                Returns accepted within 7 days.
              </div>

              <div className="faq-item">
                <strong>Is payment secure?</strong>
                Yes, all payments are secured.
              </div>
            </div>

            <button className="help-btn">
              Contact Support
            </button>

          </div>

        </div>
      </div>
    </>
  );
}

export default Account;