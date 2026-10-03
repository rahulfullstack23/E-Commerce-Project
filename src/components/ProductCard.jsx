import { useContext } from "react";

import { CartContext } from "../context/CartContext";

const ProductCard = ({ product }) => {

  const { addToCart } =
    useContext(CartContext);

  return (
    <div className="product-card">

      <h2>
        {product.title}
      </h2>

      <img
        src={product.imageUrl}
        alt={product.title}
      />

      <div className="product-bottom">

        <span>
          ${product.price}
        </span>

        <button
          onClick={() => addToCart(product)}
        >
          ADD TO CART
        </button>

      </div>

    </div>
  );
};

export default ProductCard;