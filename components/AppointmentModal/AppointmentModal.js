"use client";

import { useState } from "react";

export default function AppointmentModal({ isOpen, onClose }) {

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center z-50">

      {/* Background Overlay */}
      <div
        className="absolute inset-0 bg-black/50"
        onClick={onClose}
      ></div>

      {/* Modal Box */}
      <div className="relative bg-white rounded-xl shadow-lg w-full max-w-lg p-8 z-10">

        <h2 className="text-2xl font-semibold mb-4">
          Book Appointment
        </h2>

        <form className="space-y-4">

          <input
            type="text"
            placeholder="Your Name"
            className="w-full border p-3 rounded"
          />

          <input
            type="email"
            placeholder="Your Email"
            className="w-full border p-3 rounded"
          />

          <input
            type="tel"
            placeholder="Phone Number"
            className="w-full border p-3 rounded"
          />

          <textarea
            placeholder="Message"
            rows="4"
            className="w-full border p-3 rounded"
          ></textarea>

          <button
            type="submit"
            className="bg-blue-600 text-white px-6 py-3 rounded w-full"
          >
            Submit
          </button>

        </form>

        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-3 right-3 text-gray-500"
        >
          ✕
        </button>

      </div>
    </div>
  );
}