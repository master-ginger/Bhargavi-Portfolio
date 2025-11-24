"use client";
import { useState, useEffect } from "react";
import Image from "next/image";

export default function Admin() {
  const [authenticated, setAuthenticated] = useState(false);
  const [pass, setPass] = useState("");
  const [selectedImageFile, setSelectedImageFile] = useState(null);
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [products, setProducts] = useState([]);

  const correctPassword = "bhargavi0509";

  const handleLogin = () => {
    if (pass === correctPassword) {
      setAuthenticated(true);
    } else {
      alert("Incorrect password");
    }
  };

  // ✔ Cloudinary Upload
  const uploadImage = async (file) => {
    const formData = new FormData();
    formData.append("file", file);

    const res = await fetch("/api/upload", {
      method: "POST",
      body: formData,
    });

    const data = await res.json();
    return data.url;
  };

  // ✔ Submit Product
  const handleSubmit = async (e) => {
    e.preventDefault();

    const imageUrl = await uploadImage(selectedImageFile);

    const res = await fetch("/api/product", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        name,
        description,
        price: Number(price),
        image: imageUrl,
      }),
    });

    const data = await res.json();

    if (data.success) {
      alert("Product added!");
      fetchProducts(); // refresh list
    } else {
      alert("Error adding product");
    }
  };

  const handleDelete = async (id) => {
  if (!confirm("Delete this product?")) return;

  const res = await fetch(`/api/product/${id}`, {
    method: "DELETE",
  });

  const data = await res.json();

  if (data.success) {
    alert("Product deleted");
    fetchProducts(); // refresh table
  } else {
    alert("Error deleting product");
  }
};


  // ✔ Fetch Products (Outside effect)
  async function fetchProducts() {
    const res = await fetch("/api/product");
    const data = await res.json();
    setProducts(data.products || []); // safer
  }

  // ✔ useEffect (Safe)
  useEffect(() => {
    fetchProducts().then(() => {
      // prevents synchronous updates
      console.log("products: ",products)
    });
  }, []);

  // --- LOGIN SCREEN ---
  if (!authenticated) {
    return (
      <div className="min-h-screen bg-gray-900 flex items-center justify-center p-4">
        <div className="bg-gray-800 p-6 rounded-2xl shadow-lg w-full max-w-sm border border-gray-700">
          <h2 className="text-center text-xl text-white font-semibold mb-4">
            Admin Login
          </h2>

          <input
            type="password"
            placeholder="Enter Admin Password"
            value={pass}
            onChange={(e) => setPass(e.target.value)}
            className="w-full px-4 py-2 rounded-lg bg-gray-700 text-white outline-none border border-gray-600 focus:border-blue-500"
          />

          <button
            onClick={handleLogin}
            className="w-full mt-4 py-2 bg-blue-600 hover:bg-blue-700 transition-all text-white rounded-lg font-semibold"
          >
            Login
          </button>
        </div>
      </div>
    );
  }

  // --- MAIN PAGE ---
  return (
    <div className="min-h-screen bg-gray-900 flex items-center justify-center p-4">
      <div className="w-full max-w-lg bg-gray-800 rounded-2xl shadow-lg p-6 border border-gray-700">
        <h2 className="text-2xl font-semibold text-white mb-6 text-center">
          Add New Product
        </h2>

        <form className="space-y-5">
          <div className="flex flex-col">
            <label className="text-gray-300 mb-1">Product Name</label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="px-4 py-2 rounded-lg bg-gray-700 text-white outline-none border border-gray-600"
            />
          </div>

          <div className="flex flex-col">
            <label className="text-gray-300 mb-1">Product Description</label>
            <input
              type="text"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              className="px-4 py-2 rounded-lg bg-gray-700 text-white outline-none border border-gray-600"
            />
          </div>

          <div className="flex flex-col">
            <label className="text-gray-300 mb-1">Product Cost</label>
            <input
              type="number"
              value={price}
              onChange={(e) => setPrice(e.target.value)}
              className="px-4 py-2 rounded-lg bg-gray-700 text-white outline-none border border-gray-600"
            />
          </div>

          <div className="flex flex-col">
            <label className="text-gray-300 mb-2">Product Image</label>
            <input
              type="file"
              accept="image/*"
              className="block w-full text-sm text-gray-300 cursor-pointer file:mr-4 file:py-2 file:px-4 file:rounded-lg file:bg-blue-600 file:text-white"
              onChange={(e) => setSelectedImageFile(e.target.files[0])}
            />
          </div>

          <button
            className="w-full py-2 bg-blue-600 hover:bg-blue-700 transition-all rounded-lg text-white font-semibold"
            onClick={handleSubmit}
          >
            Submit Product
          </button>
        </form>

        <h2 className="text-xl text-white mt-10 mb-3 font-semibold">All Products</h2>

        <div className="overflow-x-auto rounded-lg border border-gray-700">
          <table className="w-full text-left text-gray-300">
            <thead className="bg-gray-700 text-gray-200">
              <tr>
                <th className="p-3">Image</th>
                <th className="p-3">Name</th>
                <th className="p-3">Price</th>
                <th className="p-3">Actions</th>
              </tr>
            </thead>
            <tbody>
              {products.length === 0 && (
                <tr>
                  <td colSpan="4" className="p-4 text-center text-gray-400">
                    No products yet
                  </td>
                </tr>
              )}

              {products.map((p) => (
                <tr key={p._id} className="border-b border-gray-700">
                  <td className="p-3">
                    <Image
                      src={p.image}
                      alt={p.name}
                      width={20}
                      height={20}
                      className="h-14 w-14 object-cover rounded"
                    />
                  </td>

                  <td className="p-3">{p.name}</td>
                  <td className="p-3">₹{p.price}</td>

                  <td className="p-3">
                    <button
                      onClick={() => handleDelete(p._id)}
                      className="px-3 py-1 bg-red-600 hover:bg-red-700 rounded text-white text-sm"
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

      </div>
    </div>
  );
}
