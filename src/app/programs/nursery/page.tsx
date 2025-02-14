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
      <header className="relative bg-[#FFEE54] p-4 flex justify-between items-center shadow-md rounded-b-[30px] border-b-4 border-[#D70654]">
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

      {/* Header Image with Parallax */}
      <section className="relative w-full h-[500px] bg-fixed bg-center bg-cover" style={{ backgroundImage: "url('/images/nursery-header.jpg')" }}>
        <div className="absolute inset-0 bg-black bg-opacity-40 flex flex-col items-center justify-center text-white text-center p-6">
          <h1 className="text-4xl md:text-5xl font-bold">Nursery Program (LKG)</h1>
          <p className="text-lg md:text-xl mt-2">Building strong foundations for lifelong learning</p>
        </div>
      </section>

      {/* About Nursery */}
      <section className="py-16 px-6 text-center max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold text-gray-900">About Nursery</h2>
        <p className="text-gray-800 mt-4">
          Our Nursery program is designed for children aged <strong>2.5 - 3.5 years</strong>, focusing on structured learning through
          <strong> storytelling, group activities, and creative play</strong>.
        </p>
      </section>

      {/* Key Features */}
      <section className="py-16 px-6 text-center bg-gradient-to-r from-[#5753ff] via-[#c7c5ff] to-[#5753ff]">
        <h2 className="text-2xl font-bold text-gray-900 text-center">Key Features</h2>
        <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
          <div className="p-6 bg-[#FFD95F] text-white rounded-lg shadow-md hover:shadow-lg transition duration-300">
            <h3 className="text-lg font-semibold">Structured Learning</h3>
            <p className="mt-2">Developing basic cognitive and motor skills.</p>
          </div>
          <div className="p-6 bg-[#B8D576] text-white rounded-lg shadow-md hover:shadow-lg transition duration-300">
            <h3 className="text-lg font-semibold">Social & Emotional Growth</h3>
            <p className="mt-2">Encouraging independence and teamwork.</p>
          </div>
          <div className="p-6 bg-[#D70654] text-white rounded-lg shadow-md hover:shadow-lg transition duration-300">
            <h3 className="text-lg font-semibold">Creative Exploration</h3>
            <p className="mt-2">Arts, music, and movement to enhance creativity.</p>
          </div>
        </div>
      </section>

      {/* Teaching Process Section */}
      <section className="py-16 px-6 text-center bg-[#FFEFC8]">
        <h2 className="text-3xl font-bold text-[#D70654]">Teaching Process</h2>
        <div className="mt-8 max-w-4xl mx-auto text-gray-900 text-left space-y-4">
          {[
            "Initially, a lot of time is given to the child to adjust with the teachers, caregivers, and other children.",
            "The child is first made comfortable with the new school environment.",
            "Games like sand play and water play are introduced for motor skill development and improving attention and focus.",
            "To help develop fine motor skills, various teaching-learning aids like hammer and peg, blocks, beads and strings, and play dough are used for structured play activities.",
            "Puzzles and stories with pictures are introduced for cognitive development.",
            "Rhymes are taught with music, rhythm, and action.",
            "Outdoor games like throwing and catching a ball, walking backwards, walking on a balancing beam, running, and rope climbing are played to help develop gross motor skills.",
            "As the child adjusts, indoor activities like identification of colors, scribbling, painting, and finger tracing activities are introduced.",
            "Each child is given a kit comprising books, worksheets, and play material designed and curated by the Kid Veda research team."
          ].map((text, index) => (
            <p 
              key={index} 
              className="mt-4 p-4 rounded-lg bg-white shadow-md flex items-center space-x-4 transform transition duration-300 hover:scale-105 hover:bg-[#FFD95F] hover:shadow-lg"
            >
              <span className="text-2xl">🐰</span>
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
