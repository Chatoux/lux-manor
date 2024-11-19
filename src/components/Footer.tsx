'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

const Footer = () => {
  return (
    <footer className="bg-[#F472B6] text-[#FFFFFF] py-8">
      <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center">
        <div className="flex flex-col md:flex-row items-center text-center md:text-left mb-4 md:mb-0">
          <Image
            src="/logo.png"
            alt="Company Logo"
            width={50}
            height={50}
            className="mb-2 md:mb-0"
          />
          <p className="ml-2">Your Company, Inc.</p>
        </div>
        
        <div className="flex space-x-4 mb-4 md:mb-0">
          <Link href="https://www.facebook.com" aria-label="Facebook">
            <Image
              src="/facebook-icon.svg"
              alt="Facebook Icon"
              width={24}
              height={24}
              className="hover:text-[#FED7E2] transition"
            />
          </Link>
          <Link href="https://www.twitter.com" aria-label="Twitter">
            <Image
              src="/twitter-icon.svg"
              alt="Twitter Icon"
              width={24}
              height={24}
              className="hover:text-[#FED7E2] transition"
            />
          </Link>
          <Link href="https://www.instagram.com" aria-label="Instagram">
            <Image
              src="/instagram-icon.svg"
              alt="Instagram Icon"
              width={24}
              height={24}
              className="hover:text-[#FED7E2] transition"
            />
          </Link>
        </div>

        <div className="text-center md:text-left">
          <p>Contact us at: <span className="text-[#FED7E2]">email@example.com</span></p>
          <p>Phone: <span className="text-[#FED7E2]">123-456-7890</span></p>
        </div>
      </div>

      <div className="container mx-auto px-4 text-center mt-8">
        <p className="text-[#FED7E2]">&copy; 2023 Your Company, Inc. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;