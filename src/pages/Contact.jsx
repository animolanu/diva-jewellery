import Navbar from "../components/Navbar";
import "../components/Hero.css";

function Contact() {
  return (
    <>
      <Navbar />

      <div className="contact-page">
        <h1>Contact Us</h1>

        <p>
          We'd love to hear from you. Reach out to us for any inquiries about our jewellery collections.
        </p>

        <div className="contact-box">
          <h3>Diva Jewellery</h3>

          <p>📍 Kochi, Kerala, India</p>

          <p>📞 +91 9876543210</p>

          <p>✉️ divajewellery@gmail.com</p>

          <p>🕒 Mon - Sat : 9:00 AM - 7:00 PM</p>
        </div>
      </div>
    </>
  );
}

export default Contact;