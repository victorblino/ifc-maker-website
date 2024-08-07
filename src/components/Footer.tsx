import React from 'react';
import Image from 'next/image';

const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-primary to-primary-light text-[#04a4b4] p-6">
      <div className="container mx-auto flex flex-col items-center justify-between ">
        <div className="mb-4 md:mb-0 pb-2">
          <Image
            src="/imgs/logo-vertical.png"
            alt="Site Logo"
            width={100}
            height={100}
            className=""
          />
        </div>
        <div className="text-center md:text-right text-white ">
          <p className="text-lg">Site feito por Victor Barroso Lino</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
