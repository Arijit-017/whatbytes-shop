"use client";

import Link from "next/link";
import { FaFacebookF, FaTwitter, FaInstagram } from "react-icons/fa";
import { categories } from "../data/products";

export default function Footer() {
  return (
    <footer className="bg-brand-navy text-white mt-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          <div className="text-center sm:text-left">
            <h3 className="font-bold text-xl mb-4">Filters</h3>

            <div className="flex flex-wrap justify-center sm:justify-start gap-3 text-sm text-gray-300">
              {categories.map((c) => (
                <Link
                  key={c}
                  href={`/?category=${c}`}
                  className="hover:text-white transition-colors"
                >
                  {c}
                </Link>
              ))}
            </div>

            <p className="text-gray-400 text-xs mt-8">© 2026 American</p>
          </div>

          <div className="text-center sm:text-left">
            <h3 className="font-bold text-xl mb-4">About Us</h3>

            <ul className="text-sm text-gray-300 space-y-3">
              <li>
                <Link href="#" className="hover:text-white transition-colors">
                  About Us
                </Link>
              </li>

              <li>
                <Link href="#" className="hover:text-white transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div className="text-center sm:text-left">
            <h3 className="font-bold text-xl mb-4">Follow Us</h3>

            <div className="flex justify-center sm:justify-start gap-4">
              <a
                href="#"
                className="w-10 h-10 md:w-11 md:h-11 bg-blue-600 hover:bg-blue-700 rounded-full flex items-center justify-center transition"
              >
                <FaFacebookF />
              </a>

              <a
                href="#"
                className="w-10 h-10 md:w-11 md:h-11 bg-sky-500 hover:bg-sky-600 rounded-full flex items-center justify-center transition"
              >
                <FaTwitter />
              </a>

              <a
                href="#"
                className="w-10 h-10 md:w-11 md:h-11 bg-pink-600 hover:bg-pink-700 rounded-full flex items-center justify-center transition"
              >
                <FaInstagram />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
