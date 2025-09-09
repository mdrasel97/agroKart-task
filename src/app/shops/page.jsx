"use client";

import { useEffect, useState } from "react";
import ProductCard from "@/components/productCard/ProductCard";
import Loading from "../loading";

export default function Shops() {
  const [shops, setShops] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    fetch("/api/agri-products")
      .then((res) => res.json())
      .then((data) => {
        setShops(data);
        setLoading(false);
      });
  }, []);
  // console.log(shops);

  if (loading) {
    return <Loading />;
  }
  return (
    <div className="mt-16 max-w-7xl mx-auto px-4">
      <h2 className="text-3xl font-bold text-center mb-10">Our Shops</h2>

      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6 w-11/12 mx-auto">
        {shops.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
}
