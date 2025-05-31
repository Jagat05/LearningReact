"use client";
import Link from "next/link";

export default function HomePage() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-teal-100 to-white text-slate-800">
      {/* Navbar */}
      <header className="relative flex items-center justify-between px-6 py-4 bg-white shadow-md">
        {/* Left - Logo */}
        <div className="z-10">
          <h1 className="text-2xl font-bold text-teal-700">Jagat</h1>
        </div>
        {/* Center - Nav Links */}
        {/* <nav className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 flex gap-6 text-sm sm:text-base font-medium">
          <Link href="/" className="text-slate-700 hover:text-teal-700">
            Home
          </Link>
          <Link href="/Products" className="text-slate-700 hover:text-teal-700">
            Products
          </Link>
          <Link href="/contact" className="text-slate-700 hover:text-teal-700">
            Contact Us
          </Link>
        </nav> */}
        {/* Right - Login/Register */}
        <div className="z-10 flex gap-4 items-center">
          <Link
            href="/"
            className="text-teal-600 hover:text-teal-800 font-semibold"
          >
            GitHub
          </Link>
          {/* <Link
            href="/signup"
            className="bg-teal-600 text-white px-4 py-2 rounded-lg hover:bg-teal-700 font-semibold transition"
          >
            Register
          </Link> */}
        </div>
      </header>

      {/* Hero Section */}
      {/* <section className="flex flex-col items-center justify-center text-center py-24 px-6">
        <h2 className="text-4xl sm:text-5xl font-bold mb-6">
          Welcome to SikshyaNet
        </h2>
        <p className="text-lg sm:text-xl text-slate-700 max-w-xl mb-8">
          Discover top quality gadgets, lifestyle products, and more. Curated
          just for you.
        </p>
        <Link href="/Products">
          <button className="bg-teal-600 hover:bg-teal-700 text-white font-semibold px-6 py-3 rounded-lg shadow-lg transition">
            Browse Products
          </button>
        </Link>
      </section> */}
    </main>
  );
}
