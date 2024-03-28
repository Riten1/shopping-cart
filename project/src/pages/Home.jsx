import React, { useEffect } from "react";
import { useState } from "react";
import { Circles } from "react-loader-spinner";

const Home = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);

  async function fetchProducts() {
    setLoading(true);
    const res = await fetch("https://fakestoreapi.com/products");
    const data = await res.json();
    console.log(data);

    if (data) {
      setLoading(false);
      setProducts(data);
    }
  }

  useEffect(() => {
    try {
      fetchProducts();
    } catch (error) {
      console.log(error);
    }
  }, []);

  return (
    <>
      {loading ? (
        <div className="min-h-screen w-full flex justify-center items-center">
          <Circles
            height={"120"}
            width={"120"}
            color="rgb(127, 29, 29)"
            visible={true}
          />
        </div>
      ) : (
        products.map((item) => <div key={item.id}>{item.title}</div>)
      )}
    </>
  );
};

export default Home;
