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
    e.preventDefault(); // Prevent default anchor behavior
    if (window.location.pathname === "/") {
      // If already on home page, just scroll
      document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
    } else {
      // Navigate to home page and scroll after load
      router.push("/#contact");
    }
  };

  return (
    <div className="bg-gradient-to-r from-[#5753ff] via-[#c7c5ff] to-[#5753ff] text-gray-900 min-h-screen">
      {/* Header */}
      <header className="relative bg-[#FFEE54] p-4 flex justify-between items-center shadow-md border-b-4 border-[#D70654]">
        <div className="flex items-center space-x-4">
          <Image src="/images/logo.png" alt="Brahmaputra Gurukul Logo" width={120} height={60} className="drop-shadow-lg" />
        </div>

        {/* Desktop Nav */}
        <nav className="hidden md:flex space-x-6 font-medium">
          {[
            { name: "Home", href: "/" },
            { name: "Our Programs", href: "/programs/our-programs" },
            { name: "Contact", href: "#contact" }
          ].map((link, index) => (
            <Link
              key={index}
              href={link.href}
              onClick={link.name === "Contact" ? handleContactClick : undefined}
              className="text-[#D70654] bg-[#FFFFFF] px-4 py-2 rounded-full border-4 border-[#D70654] shadow-lg hover:bg-[#C0DFFF] transition-transform transform hover:scale-110"
            >
              {link.name}
            </Link>
          ))}
        </nav>

        {/* Mobile Menu Button */}
        <button className="md:hidden bg-[#FFD95F] p-2 rounded-full border-4 border-[#D70654] shadow-lg" onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? <X size={28} className="text-[#D70654]" /> : <Menu size={28} className="text-[#D70654]" />}
        </button>

        {/* Mobile Nav (Sliding Drawer) */}
        <div className={`fixed top-0 left-0 w-full h-full bg-[#FFD95F] transition-transform transform ${menuOpen ? "translate-x-0" : "-translate-x-full"} duration-300 z-50 flex flex-col items-center pt-20 shadow-lg`}>
          <button onClick={() => setMenuOpen(false)} className="absolute top-4 right-6 bg-[#D70654] text-white p-2 rounded-full">
            <X size={28} />
          </button>

          <nav className="flex flex-col space-y-6 text-xl font-bold text-[#D70654]">
            {[
              { name: "Home", href: "/" },
              { name: "Our Programs", href: "/programs/our-programs" },
              { name: "Contact", href: "#contact" }
            ].map((link, index) => (
              <Link
                key={index}
                href={link.href}
                onClick={(e) => {
                  if (link.name === "Contact") {
                    handleContactClick(e);
                  }
                  setMenuOpen(false);
                }}
                className="px-6 py-3 bg-[#FFEE54] rounded-full border-4 border-[#D70654] shadow-lg hover:bg-white transition-transform transform hover:scale-110"
              >
                {link.name}
              </Link>
            ))}
          </nav>
        </div>
      </header>

      {/* Hero Section with Parallax */}
      <section className="relative w-full h-[500px] bg-fixed bg-center bg-cover" style={{ backgroundImage: "url('/images/home-bg.jpg')" }}>
        <div className="absolute inset-0 bg-black bg-opacity-40 flex flex-col items-center justify-center text-white text-center p-6">
          <h1 className="text-4xl md:text-5xl font-bold">What We Offer</h1>
          <p className="text-lg md:text-xl mt-2">A Safe Space for your Child that helps them blossom</p>
        </div>
      </section>


      {/* Programs Section */}
      <section className="py-16 px-6 text-center bg-gradient-to-r from-[#5753ff] via-[#c7c5ff] to-[#5753ff]">
        <h2 className="text-3xl font-bold text-gray-800">Our Programs</h2>
        <div className="mt-8 grid grid-cols-1 md:grid-cols-4 gap-6">
          {[
            { name: "Playgroup", age: "1.5 - 2.5 years", color: "bg-[#E3F2FD]", link: "/programs/playgroup" },
            { name: "Nursery", age: "2.5 - 3.5 years", color: "bg-[#FFD95F]", link: "/programs/nursery" },
            { name: "LKG", age: "3.5 - 4.5 years", color: "bg-[#B8D576]", link: "/programs/lkg" },
            { name: "UKG", age: "4.5 - 5.5 years", color: "bg-[#FF96B5]", link: "/programs/ukg" }
          ].map((program, index) => (
            <Link 
              key={index} 
              href={program.link} 
              className={`${program.color} relative p-6 text-[#0019BD] font-bold rounded-lg shadow-lg border-4 border-[#FF4500] transition-transform transform hover:scale-105 hover:shadow-xl`}
            >
              <h3 className="text-xl">{program.name}</h3>
              <p className="mt-2 text-gray-700 font-medium">For children aged {program.age}</p>
            </Link>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white text-center p-6 mt-16">
        <p>&copy; {new Date().getFullYear()} Brahmaputra Gurukul. All rights reserved.</p>
      </footer>
    </div>
  );
}
