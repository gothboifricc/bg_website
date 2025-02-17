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

      {/* Header Image with Parallax */}
      <section className="relative w-full h-[500px] bg-fixed bg-center bg-cover" style={{ backgroundImage: "url('/images/lkg-header.jpg')" }}>
        <div className="absolute inset-0 bg-black bg-opacity-40 flex flex-col items-center justify-center text-white text-center p-6">
          <h1 className="text-4xl md:text-5xl font-bold">Lower Kindergarten (LKG)</h1>
          <p className="text-lg md:text-xl mt-2">Encouraging curiosity & early academic skills</p>
        </div>
      </section>

      {/* About LKG */}
      <section className="py-16 px-6 text-center max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold text-gray-900">About LKG</h2>
        <p className="text-gray-800 mt-4">
          Our <strong>Lower Kindergarten (LKG)</strong> program is designed for children aged <strong>3.5 - 4.5 years</strong>, fostering <strong>language, numeracy, and cognitive skills</strong> through interactive activities.
        </p>
      </section>

      {/* Key Features */}
      <section className="py-16 px-6 text-center bg-gradient-to-r from-[#5753ff] via-[#c7c5ff] to-[#5753ff]">
        <h2 className="text-2xl font-bold text-gray-900 text-center">Key Features</h2>
        <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
          <div className="p-6 bg-[#FFD95F] text-white rounded-lg shadow-md hover:shadow-lg transition duration-300">
            <h3 className="text-lg font-semibold">Early Literacy</h3>
            <p className="mt-2">Phonics, storytelling, and reading exercises.</p>
          </div>
          <div className="p-6 bg-[#B8D576] text-white rounded-lg shadow-md hover:shadow-lg transition duration-300">
            <h3 className="text-lg font-semibold">Math & Logical Thinking</h3>
            <p className="mt-2">Numbers, shapes, and basic problem-solving.</p>
          </div>
          <div className="p-6 bg-[#D70654] text-white rounded-lg shadow-md hover:shadow-lg transition duration-300">
            <h3 className="text-lg font-semibold">Creative Activities</h3>
            <p className="mt-2">Drawing, music, and craft projects to develop creativity.</p>
          </div>
        </div>
      </section>

      {/* Teaching Process Section */}
      <section className="py-16 px-6 text-center bg-[#FFEFC8]">
        <h2 className="text-3xl font-bold text-[#D70654]">Learning Through Play & Exploration!</h2>
        <div className="mt-8 max-w-4xl mx-auto text-gray-900 text-left space-y-4">
          {[
            "We start by making sure every child feels comfortable and excited about their new school! 🏫😊",
            "The teachers help the kids get to know the space, friends, and fun learning areas. 💕👩‍🏫",
            "Games like sand play and water play are super fun and help build strong muscles and attention! 🏖💦",
            "Fine motor skills are developed through activities like stacking blocks, stringing beads, and squishing playdough! 🧱🎨🖍",
            "Puzzles and storybooks with pictures help our little learners start thinking and imagining! 🧩📖💡",
            "We sing fun rhymes and dance along with the music, learning rhythm and new words! 🎶💃🎤",
            "Outdoor games like throwing balls, running, and balancing beams make our bodies strong and steady! ⚽🏃‍♀️🎯",
            "As the child adjusts, we introduce fun activities like identifying colors, scribbling, and painting! 🎨🖍✨",
            "Each child gets their very own special learning kit with books, worksheets, and exciting play materials! 🎁📚"
          ].map((text, index) => (
            <p 
              key={index} 
              className="mt-4 p-4 rounded-lg bg-white shadow-md flex items-center space-x-4 transform transition duration-300 hover:scale-105 hover:bg-[#FFD95F] hover:shadow-lg"
            >
              <span className="text-2xl">🐼</span>
              <span>{text}</span>
            </p>
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
