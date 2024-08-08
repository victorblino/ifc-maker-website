import { useState } from 'react';
import Image from 'next/image';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="flex justify-between items-center p-4 bg-gradient-to-r from-primary to-primary-light shadow-md">
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
            <a href="#mao-robotica" className="text-white font-bold hover:text-accent">Mão Robótica</a>
          </li>
          <li>
            <a href="#lego-mindstorms" className="text-white font-bold hover:text-accent">LEGO Mindstorms</a>
          </li>
          <li>
            <a href="#casinha-bonecas" className="text-white font-bold hover:text-accent">Casinha de Bonecas</a>
          </li>
          <li>
            <a href="#reservatorio-agua" className="text-white font-bold hover:text-accent">Reservatório de Água</a>
          </li>
          <li>
            <a href="#carrinho-controle" className="text-white font-bold hover:text-accent">Carrinho de Controle Remoto</a>
          </li>
          <li>
            <a href="#irrigador-inteligente" className="text-white font-bold hover:text-accent">Irrigador Inteligente</a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
