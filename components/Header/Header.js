"use client";

import { useState } from "react";
import Link from "next/link";
import AppointmentModal from "../AppointmentModal/AppointmentModal";

export default function Header() {

  const [openModal, setOpenModal] = useState(false);

  return (
    <>
      <header className="bg-white shadow">
        <div className="max-w-[1300px] mx-auto flex items-center justify-between py-4">

          {/* Logo */}
          <div className="text-xl font-bold">
            Logo
          </div>

          {/* Menu */}
          <nav className="flex gap-8">
            <Link href="/">Home</Link>
            <Link href="/about">About</Link>
            <Link href="/doctors">Doctors</Link>
            <Link href="/contact">Contact</Link>
          </nav>

          {/* Button */}
          <button
            onClick={() => setOpenModal(true)}
            className="bg-blue-600 text-white px-6 py-2 rounded"
          >
            Book Appointment
          </button>

        </div>
      </header>

      {/* Modal */}
      <AppointmentModal
        isOpen={openModal}
        onClose={() => setOpenModal(false)}
      />
    </>
  );
}