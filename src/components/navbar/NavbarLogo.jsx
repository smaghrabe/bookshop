import { LiaBookSolid } from "react-icons/lia";
import { Link } from "react-router-dom";

function Logo() {
  return (
    <Link
      to="/"
      className="flex items-center gap-2 font-bold text-xl text-[#3B2F4A]"
    >
      <LiaBookSolid size={28} />
    </Link>
  );
}

export default Logo;
