import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Register() {
  const navigate = useNavigate();

  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");

  const handleRegister = () => {
    if (!name || !phone || !password) {
      alert("Fill all fields");
      return;
    }

    let users = JSON.parse(localStorage.getItem("users")) || [];

    const exists = users.find((u) => u.phone === phone);

    if (exists) {
      alert("User already exists");
      return;
    }

    users.push({ name, phone, password });

    localStorage.setItem("users", JSON.stringify(users));

    alert("Registration successful");
    navigate("/login");
  };

  return (
    <div className="auth-page">
      <div className="auth-box">
        <h2>Register</h2>

        <input placeholder="Name" onChange={(e) => setName(e.target.value)} />
        <input placeholder="Phone" onChange={(e) => setPhone(e.target.value)} />
        <input type="password" placeholder="Password" onChange={(e) => setPassword(e.target.value)} />

        <button onClick={handleRegister}>Create Account</button>

        <p onClick={() => navigate("/login")}>
          Already have account? Login
        </p>
      </div>
    </div>
  );
}