import { useState } from "react";
import { LiaBookSolid } from "react-icons/lia";
import { useNavigate, Link } from "react-router-dom"; // استخدمنا Link و useNavigate
import { CiHeart, CiShoppingCart } from "react-icons/ci";

function Header() {
  // غير دي لـ true يدوياً عشان تشوف شكل البروفايل (image_434198.jpg)
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const navigate = useNavigate();

  return (
    <header className="w-full flex justify-between items-center px-10 md:px-24 py-4 bg-white shadow-sm sticky top-0 z-50">
      {/* الجزء الشمال: اللوجو والروابط */}
      <div className="flex items-center gap-8">
        <Link
          to="/"
          className="flex items-center gap-2 font-bold text-xl text-[#3B2F4A]"
        >
          <LiaBookSolid size={28} />
          <span>Bookshop</span>
        </Link>

        <nav className="hidden md:flex gap-6 text-gray-600 font-medium text-sm">
          <Link to="/" className="hover:text-pink-600 transition-colors">
            Home
          </Link>
          <Link to="/books" className="hover:text-pink-600 transition-colors">
            Books
          </Link>
          <Link to="/about" className="hover:text-pink-600 transition-colors">
            About us
          </Link>
        </nav>
      </div>

      {/* الجزء اليمين: الـ Conditional Rendering */}
      <div className="flex items-center gap-4">
        {isLoggedIn ? (
          /* الحالة الأولى: بعد تسجيل الدخول (image_434198.jpg) */
          <div className="flex items-center gap-5 text-gray-600">
            <CiHeart size={24} className="cursor-pointer hover:text-pink-600" />
            <div className="relative">
              <CiShoppingCart
                size={24}
                className="cursor-pointer hover:text-pink-600"
              />
              <span className="absolute -top-1 -right-1 bg-pink-600 text-white text-[10px] w-4 h-4 rounded-full flex items-center justify-center">
                0
              </span>
            </div>
            {/* البروفايل كما في الفيجما */}
            <div className="flex items-center gap-2 border-l pl-5 ml-2">
              <div className="text-right hidden sm:block">
                <p className="text-[11px] font-bold text-gray-800">
                  John Smith
                </p>
                <p
                  className="text-[9px] text-gray-400 cursor-pointer hover:text-pink-600"
                  onClick={() => setIsLoggedIn(false)}
                >
                  Logout
                </p>
              </div>
              <img
                src="https://ui-avatars.com/api/?name=John+Smith&background=db2777&color=fff"
                className="w-8 h-8 rounded-full object-cover"
                alt="user"
              />
            </div>
          </div>
        ) : (
          /* الحالة الثانية: قبل تسجيل الدخول (image_434235.jpg) */
          <div className="flex items-center gap-4">
            <button
              onClick={() => navigate("/login")}
              className="bg-pink-600 text-white px-6 py-1.5 rounded-md font-bold text-sm hover:bg-pink-700 transition-all shadow-sm"
            >
              Log in
            </button>
            <button
              onClick={() => navigate("/register")}
              className="text-gray-400 font-bold text-sm hover:text-pink-600 transition-colors"
            >
              Sign Up
            </button>
          </div>
        )}
      </div>
    </header>
  );
}

export default Header;
