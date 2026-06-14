import Navbar from "../components/Navbar";

export default function Admin() {
  return (
    <>
      <Navbar />
      <div style={{ padding: "120px", textAlign: "center" }}>
        <h1>👑 Admin Panel</h1>
        <p>Manage products and users here</p>
      </div>
    </>
  );
}