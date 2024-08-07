import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="flex justify-between items-center p-4 bg-primary shadow-md">
      <div className="flex items-center">
        <Image src="/imgs/logo-horizontal.png" alt="Logo" width={120} height={120} />
      </div>
      <button
        className="text-white md:hidden"
        onClick={toggleMenu}
      >
        <svg
          className="w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d={isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16m-7 6h7"}
          ></path>
        </svg>
      </button>
      <nav className={`md:flex ${isMenuOpen ? 'block' : 'hidden'}`}>
        <ul className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-4">
          <li>
            <Link href="#mao-robotica" legacyBehavior>
              <a className="text-white font-bold hover:text-accent">Mão Robótica</a>
            </Link>
          </li>
          <li>
            <Link href="#lego-mindstorms" legacyBehavior>
              <a className="text-white font-bold hover:text-accent">LEGO Mindstorms</a>
            </Link>
          </li>
          <li>
            <Link href="#automacao-casinha" legacyBehavior>
              <a className="text-white font-bold hover:text-accent">Casinha de Bonecas</a>
            </Link>
          </li>
          <li>
            <Link href="#reservatorio-agua" legacyBehavior>
              <a className="text-white font-bold hover:text-accent"> Reservatório de Água</a>
            </Link>
          </li>
          <li>
            <Link href="#carrinho-controle" legacyBehavior>
              <a className="text-white font-bold hover:text-accent">Carrinho de Controle Remoto</a>
            </Link>
          </li>
          <li>
            <Link href="#irrigador-inteligente" legacyBehavior>
              <a className="text-white font-bold hover:text-accent">Irrigador Inteligente</a>
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
