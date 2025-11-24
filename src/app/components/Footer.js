import { FaInstagram, FaEnvelope, FaFacebook } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="text-gray-300 py-10 px-6 bg-gray-900">
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 gap-52 items-start">

        {/* Logo + About */}
        <div className="min-w-[220px]">
          <h2 className="text-white text-2xl font-extrabold mb-3">
            Bhargavi Arts
          </h2>
          <p className="text-gray-400 leading-relaxed">
            Creating expressive, timeless artwork—where imagination meets color.
            Custom art, portraits, and creative illustrations made with love.
          </p>
        </div>

        

        {/* Social Media */}
        <div className="min-w-[150px]">
          <h3 className="text-white text-xl font-semibold mb-3">Follow Me</h3>

          <div className="flex space-x-6 text-2xl">
            <a
              href="https://www.instagram.com/"
              target="_blank"
              className="text-gray-400 hover:text-pink-500 transition"
            >
              <FaInstagram />
            </a>

            <a
              href="mailto:example@gmail.com"
              className="text-gray-400 hover:text-blue-400 transition"
            >
              <FaEnvelope />
            </a>

            <a
              href="https://www.facebook.com/"
              target="_blank"
              className="text-gray-400 hover:text-blue-500 transition"
            >
              <FaFacebook />
            </a>
          </div>
        </div>
      </div>

      {/* Divider */}
      <div className="border-t border-gray-700 mt-8 pt-6 text-center text-gray-500 text-sm">
        © {new Date().getFullYear()} Bhargavi Arts. All rights reserved.
        <br />
        Made with ❤️ by Bhavana
      </div>
    </footer>
  );
}
