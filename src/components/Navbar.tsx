'use client';

import Link from 'next/link';
import { useState } from 'react';
import Image from 'next/image';

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-[#F472B6] text-[#FFFFFF] p-4">
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex items-center">
          {/* Logo Example */}
          <Image
            src="/logo.png"
            alt="Logo"
            width={50}
            height={50}
            className="rounded-full"
          />
          <span className="ml-3 text-lg font-semibold">Brand</span>
        </div>

        <div className="hidden md:flex space-x-4">
          <Link href="/" className="text-[#FFFFFF] hover:text-[#000000] px-4 py-2">
            Home
          </Link>
          <Link href="/about-us" className="text-[#FFFFFF] hover:text-[#000000] px-4 py-2">
            About Us
          </Link>
          <Link href="/projects" className="text-[#FFFFFF] hover:text-[#000000] px-4 py-2">
            Projects
          </Link>
          <Link href="/sustainability" className="text-[#FFFFFF] hover:text-[#000000] px-4 py-2">
            Sustainability
          </Link>
          <Link href="/contact-us" className="text-[#FFFFFF] hover:text-[#000000] px-4 py-2">
            Contact Us
          </Link>
        </div>

        <div className="md:hidden">
          <button onClick={toggleMenu} className="text-[#FFFFFF]">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} />
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-[#F9A8D4] text-[#000000]">
          <Link href="/" className="block px-4 py-2 hover:bg-[#FED7E2]">
            Home
          </Link>
          <Link href="/about-us" className="block px-4 py-2 hover:bg-[#FED7E2]">
            About Us
          </Link>
          <Link href="/projects" className="block px-4 py-2 hover:bg-[#FED7E2]">
            Projects
          </Link>
          <Link href="/sustainability" className="block px-4 py-2 hover:bg-[#FED7E2]">
            Sustainability
          </Link>
          <Link href="/contact-us" className="block px-4 py-2 hover:bg-[#FED7E2]">
            Contact Us
          </Link>
        </div>
      )}
    </nav>
  );
}

export default Navbar;