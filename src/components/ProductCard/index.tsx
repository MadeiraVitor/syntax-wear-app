import { MdAddShoppingCart } from "react-icons/md";
import type { Product } from "../../interfaces/product";
import { Link } from "@tanstack/react-router";
import { useContext } from "react";
import { CartContext } from "../../contexts/CartContext/CartContext";
import { formatCurrency } from "../../utils/format-currency";

interface ProductCardProps {
  product: Product;
}

export const ProductCard = ({ product }: ProductCardProps) => {

    const { addToCart } = useContext(CartContext);

  return (
    <div className="bg-white rounded-2xl shadow-md">
      <Link to="/products/$productId" params={{ productId: String(product.id) }}>
        <img
          className="w-full max-h-100 object-cover rounded-md mb-2"
          src={product.images[0]}
          alt={product.name}
        />
      </Link>

      <div className="rounded-2xl p-4">
        <h3 className="text-lg font-semibold">{product.name}</h3>

        <p>{product.colors.join(", ")}</p>

        <div className="flex justify-between mt-2.5">
          <p className="font-bold">{formatCurrency(product.price)}</p>

          <button className="cursor-pointer" onClick={() => addToCart(product)}>
            <MdAddShoppingCart className="h-7 w-7" />
          </button>
        </div>
      </div>
    </div>
  );
};
