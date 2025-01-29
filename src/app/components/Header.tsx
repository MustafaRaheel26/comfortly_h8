"use client";

import { useState, useEffect } from "react";
import { FaShoppingCart } from "react-icons/fa";
import Image from "next/image";
import Link from "next/link";

const Header = () => {
  const [cartCount, setCartCount] = useState<number>(0);

  useEffect(() => {
    // Function to update cart count from localStorage
    const updateCartCount = () => {
      const cart = JSON.parse(localStorage.getItem("cart") || "[]");
      setCartCount(cart.length);
    };

    // Initial cart count update when the component mounts
    updateCartCount();

    // Set up an event listener to listen for cart updates
    window.addEventListener("cart-updated", updateCartCount);

    // Clean up event listener when the component unmounts
    return () => {
      window.removeEventListener("cart-updated", updateCartCount);
    };
  }, []);

  return (
    <header className="w-full bg-[#F0F2F3] py-5 sticky top-0 z-50">
      <div className="max-w-screen-xl mx-auto flex justify-between items-center px-6 sm:px-8">
        {/* Desktop Header */}
        <div className="hidden sm:flex justify-between items-center w-full">
          {/* Logo and Brand Name */}
          <div className="flex items-center space-x-4">
            <Image
              src="/Vector.png"
              alt="Comforty Logo"
              width={40}
              height={23.34}
              className="ml-2"
            />
            <h2 className="text-2xl font-semibold text-[#333]">Comforty</h2>
          </div>

          {/* Cart Section */}
          <div className="flex items-center space-x-4">
            <Link
              href="/cart"
              className="flex items-center space-x-3 bg-white py-2 px-4 rounded-md shadow-sm hover:shadow-lg transition-all duration-300"
            >
              <FaShoppingCart className="text-xl text-[#007580]" />
              <span className="hidden sm:inline-block text-[#007580]">Cart</span>
              <div className="flex items-center justify-center w-6 h-6 bg-[#007580] text-white text-xs rounded-full">
                {cartCount}
              </div>
            </Link>
          </div>
        </div>

        {/* Mobile Header */}
        <div className="sm:hidden px-6 mt-3">
          <div className="flex justify-between items-center">
            <div className="flex items-center space-x-2">
              <Image
                src="/Vector.png"
                alt="Comforty Logo"
                width={30}
                height={18}
                className="ml-2"
              />
              <h2 className="text-lg font-semibold text-[#333]">Comforty</h2>
            </div>

            <Link
              href="/cart"
              className="flex items-center space-x-2 bg-white py-2 px-4 rounded-md shadow-sm hover:shadow-lg transition-all duration-300"
            >
              <FaShoppingCart className="text-lg text-[#007580]" />
              <div className="flex items-center justify-center w-5 h-5 bg-[#007580] text-white text-xs rounded-full">
                {cartCount}
              </div>
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
