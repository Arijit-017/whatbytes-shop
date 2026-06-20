'use client';

import Link from 'next/link';
import { FaFacebookF, FaTwitter, FaInstagram } from 'react-icons/fa';
import { categories } from '../data/products';

export default function Footer() {
  return (
    <footer className="bg-brand-navy text-white mt-12">

      <div className="max-w-7xl mx-auto px-4 py-10 grid grid-cols-1 md:grid-cols-3 gap-8">

        {/* Categories */}

        <div>

          <h3 className="font-bold text-lg mb-3">
            Filters
          </h3>

          <div className="flex flex-wrap gap-2 text-sm text-gray-300">

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

          <p className="text-gray-400 text-xs mt-6">

            © 2026 American

          </p>

        </div>

        {/* About */}

        <div>

          <h3 className="font-bold text-lg mb-3">

            About Us

          </h3>

          <ul className="text-sm text-gray-300 space-y-2">

            <li>

              <Link
                href="#"
                className="hover:text-white transition-colors"
              >

                About Us

              </Link>

            </li>

            <li>

              <Link
                href="#"
                className="hover:text-white transition-colors"
              >

                Contact

              </Link>

            </li>

          </ul>

        </div>

        {/* Social */}

        <div>

          <h3 className="font-bold text-lg mb-3">

            Follow Us

          </h3>

          <div className="flex gap-3">

            <a
              href="#"
              className="bg-blue-600 hover:bg-blue-700 w-9 h-9 rounded-full flex items-center justify-center"
            >

              <FaFacebookF />

            </a>

            <a
              href="#"
              className="bg-sky-500 hover:bg-sky-600 w-9 h-9 rounded-full flex items-center justify-center"
            >

              <FaTwitter />

            </a>

            <a
              href="#"
              className="bg-pink-600 hover:bg-pink-700 w-9 h-9 rounded-full flex items-center justify-center"
            >

              <FaInstagram />

            </a>

          </div>

        </div>

      </div>

    </footer>
  );
}