import { useEffect, useState } from "react";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../firebase";

function Products() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const snap = await getDocs(collection(db, "products"));

        const list = snap.docs.map((doc) => ({
          id: doc.id,
          ...doc.data()
        }));

        console.log("Firebase Data:", list);

        setProducts(list);
      } catch (error) {
        console.log("Error fetching products:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) {
    return <h2>Loading products...</h2>;
  }

  return (
    <div style={{ padding: "20px" }}>
      <h1>Products from Firebase</h1>

      {products.length === 0 ? (
        <p>No products found in Firebase</p>
      ) : (
        <div style={{ display: "flex", gap: "20px", flexWrap: "wrap" }}>
          {products.map((p) => (
            <div
              key={p.id}
              style={{
                border: "1px solid #ccc",
                padding: "10px",
                width: "200px"
              }}
            >
              <img
                src={p.image}
                width="150"
                height="150"
                style={{ objectFit: "cover" }}
                alt={p.name}
              />
              <h3>{p.name}</h3>
              <p>₹{p.price}</p>
              <p>{p.discount}% off</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default Products;