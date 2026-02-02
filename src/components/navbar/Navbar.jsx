import { Link } from "react-router-dom";

function NavLinks() {
  return (
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
  );
}

export default NavLinks;
