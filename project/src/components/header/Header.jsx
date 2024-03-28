import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div>
      <nav className="flex items-center justify-between h-20 max-w-6xl mx-auto">
        <Link to="/">
          <div>
            <h1 className="text-red-900 font-bold text-xl sm:text-2xl md:text-3xl cursor-pointer tracking-wide decoration-none">
              React Shopping Cart
            </h1>
          </div>
        </Link>

        <ul className="flex list-none items-center space-x-6 text-gray-800 font-semibold">
          <li className="cursor-pointer">
            <Link to="/">Home</Link>
          </li>

          <li className="cursor-pointer">
            <Link to="/cart">Cart</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Header;
