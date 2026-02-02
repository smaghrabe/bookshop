import { useNavigate } from "react-router-dom";
import { CiHeart, CiShoppingCart } from "react-icons/ci";
import { HiOutlineLogout } from "react-icons/hi";
import useAuthStore from "../store";
import NavbarLogo from "../components/navbar/NavbarLogo";
import Navbar from "../components/navbar/Navbar";

function Header() {
  const navigate = useNavigate();
  const { isLoggedIn, user, logout } = useAuthStore();

  const handleLogout = () => {
    logout();
    navigate("/login");
  };

  return (
    <header className="w-full flex justify-between items-center px-10 md:px-24 py-4 bg-white shadow-sm sticky top-0 z-50">
      <div className="flex items-center gap-8">
        <NavbarLogo />
        <Navbar />
      </div>

      <div className="flex items-center gap-4">
        {isLoggedIn ? (
          <div className="flex items-center gap-5 text-gray-600">
            <CiHeart
              size={24}
              className="cursor-pointer hover:text-pink-600 transition-colors"
            />
            <div className="relative">
              <CiShoppingCart
                size={24}
                className="cursor-pointer hover:text-pink-600 transition-colors"
              />
              <span className="absolute -top-1 -right-1 bg-pink-600 text-white text-[10px] w-4 h-4 rounded-full flex items-center justify-center">
                0
              </span>
            </div>

            <div className="flex items-center gap-3 border-l pl-5 ml-2">
              <div className="text-right hidden sm:block">
                <p className="text-[11px] font-bold text-gray-800">
                  {user?.name || "joh"}
                </p>
              </div>

              <div className="relative group">
                <img
                  src="../../public/book1.png"
                  className="w-9 h-9 rounded-full object-cover border border-gray-100 shadow-sm"
                  alt="user avatar"
                />
              </div>

              <button
                onClick={handleLogout}
                className="flex items-center justify-center p-2 rounded-full hover:bg-red-50 text-gray-400 hover:text-red-600 transition-all"
                title="Logout"
              >
                <HiOutlineLogout size={20} />
              </button>
            </div>
          </div>
        ) : (
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
