import { Link, useLocation } from "react-router-dom";
import { useContext } from "react";

import { CartContext } from "../context/CartContext";

const Header = () => {
  const location = useLocation();

  const {
    cartCount,
    showCart,
    setShowCart,
  } = useContext(CartContext);

  const isStorePage =
    location.pathname === "/store";

  return (
    <header className="header">

      <nav className="navigation">

        <Link to="/" className="nav-link">
          HOME
        </Link>

        <Link to="/store" className="nav-link">
          STORE
        </Link>

        <Link to="/about" className="nav-link">
          ABOUT
        </Link>

      </nav>

      {isStorePage && (
        <button
          className="cart-button"
          onClick={() => setShowCart(!showCart)}
        >
          cart
          <span className="cart-count">
            {cartCount}
          </span>
        </button>
      )}

    </header>
  );
};

export default Header;