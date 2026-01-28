import { LiaBookSolid } from "react-icons/lia";

function Header() {
  return (
    <header className="w-full flex justify-between items-center px-10 py-4 bg-transparent">
      <div className="flex items-center gap-8">
        <div className="flex items-center gap-2 font-bold text-xl">
          <LiaBookSolid className="text-black" size={28} />
        </div>

        <nav className="flex gap-6 text-black font-medium">
          <a href="/" className="">
            Home
          </a>
          <a href="/books">Books</a>
          <a href="/about">About us</a>
        </nav>
      </div>

      <div className="flex items-center gap-4">
        <button className="bg-[#e91e63] text-white px-6 py-1.5 rounded-md font-medium">
          Log in
        </button>
        <button className="text-gray-400 font-medium">Sign Up</button>
      </div>
    </header>
  );
}

export default Header;
