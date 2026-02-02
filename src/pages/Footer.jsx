import { FaFacebookF, FaInstagram, FaYoutube, FaTwitter } from "react-icons/fa";
import { LiaBookSolid } from "react-icons/lia";

const Footer = () => {
  return (
    <footer className="bg-[#2d2a3e] text-gray-300 py-10 px-6 md:px-20">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6 border-b border-gray-600 pb-8">
          <div className="flex items-center gap-2 text-white font-bold ">
            <div className="flex flex-col md:flex-row md:items-center gap-6 ">
              <LiaBookSolid className="text-white text-xl" size={28} />
              <span>Bookshop</span>

              <nav className="flex  gap-5 text-sm">
                <a href="/" className="hover:text-white transition">
                  Home
                </a>
                <a href="/books" className="hover:text-white transition">
                  Books
                </a>
                <a href="/about" className="hover:text-white transition">
                  About us
                </a>
              </nav>
            </div>
          </div>

          <div className="flex gap-5">
            <a href="#" className="hover:text-pink-500 transition">
              <FaFacebookF size={18} />
            </a>
            <a href="#" className="hover:text-pink-500 transition">
              <FaInstagram size={18} />
            </a>
            <a href="#" className="hover:text-pink-500 transition">
              <FaYoutube size={18} />
            </a>
            <a href="#" className="hover:text-pink-500 transition">
              <FaTwitter size={18} />
            </a>
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center pt-6 text-xs text-gray-500 gap-4">
          <p>© Developed By: EraaSoft - All Copy Rights Reserved @2024</p>

          <div className="flex items-center gap-2 border border-gray-600 px-3 py-1 rounded cursor-pointer">
            <span>English</span>
            <span className="text-[10px]">▼</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
