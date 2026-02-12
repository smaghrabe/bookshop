import { NavLink } from "react-router-dom";

function NavLinks() {
  // كلاسات التنسيق الموحدة
  const linkStyles = ({ isActive }) =>
    `transition-colors font-bold text-sm ${
      isActive
        ? "text-pink-600 border-b-2 border-pink-600 pb-1"
        : "text-gray-600 hover:text-pink-600"
    }`;

  return (
    <nav className="hidden md:flex gap-8 items-center">
      <NavLink to="/" className={linkStyles}>
        Home
      </NavLink>
      <NavLink to="/books" className={linkStyles}>
        Books
      </NavLink>
      <NavLink to="/about" className={linkStyles}>
        About us
      </NavLink>
    </nav>
  );
}

export default NavLinks;
