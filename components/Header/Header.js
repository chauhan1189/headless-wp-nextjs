"use client";

import Link from "next/link";
import Image from "next/image";

export default function Header() {
  return (
    <header className="bg-white border-b">

      <div className="max-w-[1300px] mx-auto px-4">

        <div className="flex items-center justify-between h-[80px]">

          {/* Logo */}

          <Link href="/" className="flex items-center">
            <Image
              src="/images/logo.png"
              alt="Logo"
              width={150}
              height={40}
            />
          </Link>

          {/* Menu */}

          <nav className="hidden md:flex gap-8 font-medium">

            <Link href="/" className="hover:text-blue-600">
              Home
            </Link>

            <Link href="/about" className="hover:text-blue-600">
              About
            </Link>

            <Link href="/doctors" className="hover:text-blue-600">
              Doctors
            </Link>

            <Link href="/contact" className="hover:text-blue-600">
              Contact
            </Link>

          </nav>

          {/* Button */}

          <Link
            href="/contact"
            className="bg-blue-600 text-white px-5 py-2 rounded-lg hover:bg-blue-700"
          >
            Book Appointment
          </Link>

        </div>

      </div>

    </header>
  );
}