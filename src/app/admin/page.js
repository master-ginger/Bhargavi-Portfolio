"use client";
import { useState } from "react";

export default function Admin() {
  const [authenticated, setAuthenticated] = useState(false);
  const [pass, setPass] = useState("");
  const [selectedImageFile, setSelectedImageFile] = useState(null);


  const correctPassword = "bhargavi0509"; // change this

  const handleLogin = () => {
    if (pass === correctPassword) {
      setAuthenticated(true);
    } else {
      alert("Incorrect password");
    }
  };
const handleSubmit = async (e) => {
  e.preventDefault();
  
  const imageUrl = await uploadImage(selectedImageFile);

  console.log("Uploaded to Cloudinary:", imageUrl);

  // Then save imageUrl + name + cost to MongoDB OR anywhere you want
};

  const uploadImage = async (file) => {
  const formData = new FormData();
  formData.append("file", file);

  const res = await fetch("/api/upload", {
    method: "POST",
    body: formData
  });

  const data = await res.json();
  return data.url; // ✅ Cloudinary URL
};


  // ✅ LOGIN SCREEN
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

  // ✅ MAIN ADMIN PAGE (visible only after login)
  return (
    <div className="min-h-screen bg-gray-900 flex items-center justify-center p-4">
      <div className="w-full max-w-md bg-gray-800 rounded-2xl shadow-lg p-6 border border-gray-700">
        <h2 className="text-2xl font-semibold text-white mb-6 text-center">
          Add New Product
        </h2>

        <form className="space-y-5">

          <div className="flex flex-col">
            <label className="text-gray-300 mb-1">Product Name</label>
            <input
              type="text"
              className="px-4 py-2 rounded-lg bg-gray-700 text-white outline-none border border-gray-600"
            />
          </div>

          <div className="flex flex-col">
            <label className="text-gray-300 mb-1">Product Cost</label>
            <input
              type="text"
              className="px-4 py-2 rounded-lg bg-gray-700 text-white outline-none border border-gray-600"
            />
          </div>

          <div className="flex flex-col">
            <label className="text-gray-300 mb-2">Product Image</label>
            <input
              type="file"
              accept="image/*"
              className="block w-full text-sm text-gray-300 cursor-pointer
                        file:mr-4 file:py-2 file:px-4 file:rounded-lg
                        file:bg-blue-600 file:text-white"
            onChange={(e) => {
                    setSelectedImageFile(e.target.files[0]); 
                    // setPreview(URL.createObjectURL(e.target.files[0])); 
            }}
            />
          </div>

          <button className="w-full py-2 bg-blue-600 hover:bg-blue-700 transition-all rounded-lg text-white font-semibold" onClick={handleSubmit}>
            Submit Product
          </button>
        </form>
      </div>
    </div>
  );
}
