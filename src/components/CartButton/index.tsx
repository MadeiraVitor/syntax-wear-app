import IconCart from "@/assets/images/icon-cart.png";
import { useContext } from "react";
import { CartContext } from "../../contexts/CartContext";

interface CartButtonProps {
  onClick?: () => void;
}

export const CartButton = ({ onClick }: CartButtonProps) => {
  const { cartItemsCount } = useContext(CartContext);

  return (
    <button className="relative cursor-pointer flex items-center" onClick={onClick}>
      <img src={IconCart} alt="Ícone Carrinho" />
      {cartItemsCount > 0 && (
        <span className="absolute -top-2 -right-2 flex h-5 min-w-5 items-center justify-center rounded-full bg-error px-1 text-[10px] font-semibold text-white">
          {cartItemsCount}
        </span>
      )}
    </button>
  );
};
