"use client";
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { useRouter } from "next/navigation";

export default function HomePage() {
  const [menuOpen, setMenuOpen] = useState(false);
  const router = useRouter();

  const handleContactClick = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
    e.preventDefault();
    if (window.location.pathname === "/") {
      document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
    } else {
      router.push("/#contact");
    }
  };

  return (
    <div className="bg-gradient-to-r from-[#5753ff] via-[#c7c5ff] to-[#5753ff] text-gray-900 min-h-screen">
      {/* Notification Ticker */}
      <div className="w-full bg-black text-neon-green py-2 overflow-hidden">
        <div className="whitespace-nowrap animate-marquee text-lg font-bold uppercase">
          🔔 School Reopening Soon! &nbsp; | &nbsp; 🎓 Admissions Open for 2025! &nbsp; | &nbsp; 🏆 New Competitions Coming Soon!
        </div>
      </div>

      {/* Header */}
      <header className="relative bg-[#FFEE54] p-4 flex justify-between items-center shadow-md border-b-4 border-[#D70654]">
        <div className="flex items-center space-x-4">
          <Image src="/images/logo.png" alt="Brahmaputra Gurukul Logo" width={120} height={60} className="drop-shadow-lg" />
        </div>

        {/* Desktop Nav */}
        <nav className="hidden md:flex space-x-6 font-medium">
          {[{ name: "Home", href: "/" }, { name: "Our Programs", href: "/programs/our-programs" }, { name: "Contact", href: "#contact" }].map((link, index) => (
            <Link
              key={index}
              href={link.href}
              onClick={link.name === "Contact" ? handleContactClick : undefined}
              className="relative group text-[#D70654] hover:text-white transition-colors duration-300"
            >
              <span className="px-3 py-2 text-xl">{link.name}</span>
              {/* Underline effect */}
              <span className="absolute left-0 bottom-[-4px] w-full h-[2px] bg-[#D70654] scale-x-0 group-hover:scale-x-100 transform transition-all duration-300"></span>
            </Link>
          ))}
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden flex items-center justify-center bg-[#FFD95F] p-2 rounded-full border-4 border-[#D70654] shadow-md hover:bg-[#FFEE54] transform transition duration-300"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <X size={28} className="text-[#D70654]" /> : <Menu size={28} className="text-[#D70654]" />}
        </button>

        {/* Mobile Nav (Sliding Drawer) */}
        <div className={`fixed top-0 left-0 w-full h-full bg-[#FFD95F] transition-transform transform ${menuOpen ? "translate-x-0" : "-translate-x-full"} duration-300 z-50 flex flex-col items-center pt-20 shadow-lg`}>
          <button onClick={() => setMenuOpen(false)} className="absolute top-4 right-6 bg-[#D70654] text-white p-2 rounded-full">
            <X size={28} />
          </button>

          <nav className="flex flex-col space-y-6 text-xl font-bold text-[#D70654]">
            {[{ name: "Home", href: "/" }, { name: "Our Programs", href: "/programs/our-programs" }, { name: "Contact", href: "#contact" }].map((link, index) => (
              <Link
                key={index}
                href={link.href}
                onClick={(e) => {
                  if (link.name === "Contact") {
                    handleContactClick(e);
                  }
                  setMenuOpen(false);
                }}
                className="px-6 py-3 text-[#D70654] hover:text-white transition-colors duration-300 relative group"
              >
                {link.name}
                {/* Candy-colored underline for mobile */}
                <span className="absolute left-0 bottom-[-4px] w-full h-[2px] bg-gradient-to-r from-pink-500 to-yellow-500 scale-x-0 group-hover:scale-x-100 transform transition-all duration-300"></span>
              </Link>
            ))}
          </nav>
        </div>
      </header>

      {/* Hero Section with Parallax */}
      <section className="relative w-full h-[500px] bg-fixed bg-center bg-cover" style={{ backgroundImage: "url('/images/program-header.jpg')" }}>
        <div className="absolute inset-0 bg-black bg-opacity-40 flex flex-col items-center justify-center text-white text-center p-6">
          <h1 className="text-4xl md:text-5xl font-bold">What We Offer</h1>
          <p className="text-lg md:text-xl mt-2">A Safe Space for your Child that helps them blossom</p>
        </div>
      </section>

      <div className="bg-gradient-to-r from-[#5753ff] via-[#c7c5ff] to-[#5753ff] text-gray-900 min-h-screen">
        {/* Programs Section */}
        <section className="py-16 px-6 text-center bg-gradient-to-r from-[#5753ff] via-[#c7c5ff] to-[#5753ff]">
          <h2 className="text-4xl font-bold text-[#D70654] uppercase">Our Programs</h2>
          <p className="mt-4 text-lg text-gray-700 max-w-2xl mx-auto">
            We provide age-appropriate programs designed to nurture young minds and help them grow.
          </p>
          <div className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { name: "Playgroup", age: "1.5 - 2.5 years", image: "/images/playgroup.jpg", link: "/programs/playgroup" },
              { name: "Nursery", age: "2.5 - 3.5 years", image: "/images/nursery.jpg", link: "/programs/nursery" },
              { name: "LKG", age: "3.5 - 4.5 years", image: "/images/lkg.jpg", link: "/programs/lkg" },
              { name: "UKG", age: "4.5 - 5.5 years", image: "/images/ukg.jpg", link: "/programs/ukg" }
            ].map((program, index) => (
              <Link key={index} href={program.link} className="group block overflow-hidden rounded-lg shadow-lg transform hover:scale-105 transition duration-300">
                <div className="relative w-full h-64"> 
                  <Image src={program.image} alt={program.name} layout="fill" objectFit="cover" className="group-hover:opacity-80 transition duration-300" />
                </div>
                <div className="p-3 bg-white text-gray-800">
                  <h3 className="text-lg font-semibold text-[#D70654]">{program.name}</h3>
                  <p className="mt-1 text-gray-600">For children aged {program.age}</p>
                </div>
              </Link>
            ))}
          </div>
        </section>
      </div>

      {/* Footer */}
      <footer className="bg-gray-900 text-white text-center p-6 mt-16">
        <p>&copy; {new Date().getFullYear()} Brahmaputra Gurukul. All rights reserved.</p>
      </footer>
    </div>
  );
}
