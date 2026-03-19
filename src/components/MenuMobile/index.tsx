import IconMenu from "@/assets/images/icon-menu.png";
import { Link } from "@tanstack/react-router";
import { useState } from "react";
import { FaRegUserCircle } from "react-icons/fa";
import type { NavLink } from "../Header";
import { IoMdClose } from "react-icons/io";

interface MenuMobileProps {
  navLinks: NavLink[];
}

export const MenuMobile = ({ navLinks }: MenuMobileProps) => {
  const [menuIsOpen, setMenuIsOpen] = useState<boolean>(false);

  return (
    <>
      <button
        className="cursor-pointer flex items-center"
        onClick={() => setMenuIsOpen(!menuIsOpen)}
      >
        <img src={IconMenu} alt="Ícone menu" />
      </button>

      <div
        className={`${menuIsOpen ? "bg-black/70 visible" : "bg-transparent invisible"} fixed top-0 bottom-0 left-0 right-0 z-30 transition-all duration-600 ease-in-out`}
        onClick={() => setMenuIsOpen(!menuIsOpen)}
      >
        <div
          className={`${menuIsOpen ? "translate-x-0" : "-translate-x-full"} absolute top-0 bottom-0 bg-white pt-6 transition-all duration-500 ease-in-out w-full`}
          onClick={(e) => e.stopPropagation()}
        >
          <header className="bg-black text-white py-5 px-5">
            <nav className="flex justify-between">
              <Link to="/signin" className="flex items-center gap-3">
                <FaRegUserCircle className="h-6 w-6" />
                <p>Olá! Faça seu login</p>
              </Link>

              <IoMdClose className="cursor-pointer text-2xl" onClick={() => setMenuIsOpen(!menuIsOpen)} />
            </nav>
          </header>

          <ul className="p-4 overflow-y-auto scrollbar-hide h-[calc(100%-140px)] flex flex-col gap-3">
            {navLinks.map((link) => (
              <li key={link.name} onClick={() => setMenuIsOpen(!menuIsOpen)}>
                <Link to={link.href}>{link.name}</Link>
              </li>
            ))}

            <li onClick={() => setMenuIsOpen(!menuIsOpen)}>
              <Link to="/our-stores">Nossas Lojas</Link>
            </li>
            <li onClick={() => setMenuIsOpen(!menuIsOpen)}>
              <Link to="/about">Sobre</Link>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};
