"use client";
import { useState, useEffect } from "react";
import Image from "next/image";

export default function ProductPage() {
  const [products, setProducts] = useState([]);

   // ✔ Fetch Products (Outside effect)
  async function fetchProducts() {
    const res = await fetch("/api/product");
    const data = await res.json();
    setProducts(data.products || []); // safer
  }

  // ✔ useEffect (Safe)
  useEffect(() => {
    async function loadProducts() {
        const res = await fetch("/api/product");
        const data = await res.json();
        setProducts(data.products || []);
        console.log("products:", data.products);
    }

    loadProducts();
  }, []);

  return (
    <div className="min-h-screen bg-gray-900 p-6">
      <h1 className="text-3xl font-semibold text-white mb-6 text-center">
        Our Products
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {products.length === 0 && (
          <p className="text-center text-gray-400 col-span-full">
            No products available.
          </p>
        )}

        {products.map((p) => (
          <div
            key={p._id}
            className="bg-gray-800 rounded-xl shadow-lg p-4 border border-gray-700 hover:shadow-xl transition-all"
          >
            <div className="w-full h-48 bg-black/20 rounded-lg overflow-hidden">
              <Image
                src={p.image}
                alt={p.name}
                width={400}
                height={300}
                className="w-full h-full object-cover"
              />
            </div>

            <h2 className="text-xl font-semibold text-white mt-3">
              {p.name}
            </h2>

            <p className="text-gray-400 mt-1 text-sm line-clamp-2">
              {p.description}
            </p>

            <p className="text-blue-400 font-bold mt-3 text-lg">
              ₹{p.price}
            </p>

            <button className="w-full mt-4 py-2 bg-blue-600 hover:bg-blue-700 rounded-lg text-white font-medium">
              Buy Now
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
