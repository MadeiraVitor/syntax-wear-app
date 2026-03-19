import IconCart from "@/assets/images/icon-cart.png";
import { useContext, useState } from "react";

import { formatCurrency } from "../../utils/format-currency";
import { CartContext } from "../../contexts/CartContext";

export const ShoppingCart = () => {
  const [cartIsOpen, setCartIsOpen] = useState<boolean>(false);
  const {
    cart,
    cartItemsCount,
    removeFromCart,
    incrementInCart,
    decrementInCart,
  } = useContext(CartContext);

  return (
    <>
      <button
        className="relative cursor-pointer"
        onClick={() => setCartIsOpen(!cartIsOpen)}
      >
        <img src={IconCart} alt="Ícone Carrinho" />
        {cartItemsCount > 0 && (
          <span className="absolute -top-2 -right-2 flex h-5 min-w-5 items-center justify-center rounded-full bg-error px-1 text-[10px] font-semibold text-white">
            {cartItemsCount}
          </span>
        )}
      </button>

      <div
        className={`${cartIsOpen ? "bg-black/70 visible" : "bg-transparent invisible"} fixed top-0 bottom-0 left-0 right-0`}
        onClick={() => setCartIsOpen(!cartIsOpen)}
      >
        <div
          className={`${cartIsOpen ? "translate-x-0" : "translate-x-full"} absolute top-0 right-0 bottom-0 bg-white pt-6 transition-all duration-500 ease-in-out w-75 md:w-106`}
          onClick={(e) => e.stopPropagation()}
        >
          <header className="flex justify-between items-center px-5">
            <p className="text-2xl font-bold">Carrinho ({cartItemsCount})</p>
            <button
              className="text-xl cursor-pointer"
              onClick={() => setCartIsOpen(!cartIsOpen)}
            >
              X
            </button>
          </header>

          <ul className="p-4 overflow-y-auto scrollbar-hide h-[calc(100%-140px)] flex flex-col gap-3">
            {cart.map((product) => (
              <li key={product.id} className="flex flex-col gap-1 px-6">
                <button
                  className="self-end text-xs cursor-pointer"
                  onClick={() => removeFromCart(product.id)}
                >
                  X
                </button>

                <div className="flex gap-4">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-16 h-16"
                  />

                  <div className="flex flex-col items-start">
                    <p className="mb-1 text-sm">{product.name}</p>
                    <p className="mb-1 text-sm">
                      Quantidade: {product.quantity}
                    </p>
                    <p className="mb-3.5">
                      <span className="font-bold">
                        {formatCurrency(product.price)}
                      </span>{" "}
                      à vista
                    </p>

                    <div className="border flex gap-6 py-1 px-3">
                      <button
                        className="cursor-pointer"
                        onClick={() => decrementInCart(product)}
                      >
                        -
                      </button>
                      <p>{product.quantity}</p>
                      <button
                        className="cursor-pointer"
                        onClick={() => incrementInCart(product)}
                      >
                        +
                      </button>
                    </div>
                  </div>
                </div>
              </li>
            ))}
          </ul>

          <footer className="absolute bottom-0 w-full h-25 p-4">
            <button className="w-full h-full bg-green-600 hover:bg-green-500 text-white rounded-md cursor-pointer">
              Finalizar Compra
            </button>
          </footer>
        </div>
      </div>
    </>
  );
};
