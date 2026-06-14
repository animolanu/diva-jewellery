import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const navigate = useNavigate();

  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    // 👑 ADMIN LOGIN
    if (phone === "9999999999" && password === "admin123") {
      localStorage.setItem("currentUser", JSON.stringify({ role: "admin" }));
      navigate("/admin");
      return;
    }

    // 👤 USER LOGIN
    let users = JSON.parse(localStorage.getItem("users")) || [];

    const user = users.find(
      (u) => u.phone === phone && u.password === password
    );

    if (user) {
      localStorage.setItem("currentUser", JSON.stringify(user));
      navigate("/");
    } else {
      alert("Invalid credentials");
    }
  };

  return (
    <div className="auth-page">
      <div className="auth-box">
        <h2>Login</h2>

        <input placeholder="Phone" onChange={(e) => setPhone(e.target.value)} />
        <input type="password" placeholder="Password" onChange={(e) => setPassword(e.target.value)} />

        <button onClick={handleLogin}>Login</button>

        <p onClick={() => navigate("/register")}>
          Create new account
        </p>
      </div>
    </div>
  );
}