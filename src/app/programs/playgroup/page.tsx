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
      {/* Header */}
      <header className="relative bg-[#FFEE54] p-4 flex justify-between items-center shadow-md border-b-4 border-[#D70654]">
        <div className="flex items-center space-x-4">
          <Image src="/images/logo.png" alt="Brahmaputra Gurukul Logo" width={120} height={60} className="drop-shadow-lg" />
        </div>
        <nav className="hidden md:flex space-x-6 font-medium">
          {[{ name: "Home", href: "/" }, { name: "Our Programs", href: "/programs/our-programs" }, { name: "Contact", href: "#contact" }].map((link, index) => (
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
        <button className="md:hidden bg-[#FFD95F] p-2 rounded-full border-4 border-[#D70654] shadow-lg" onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? <X size={28} className="text-[#D70654]" /> : <Menu size={28} className="text-[#D70654]" />}
        </button>
      </header>
      <section className="relative w-full h-[500px] bg-fixed bg-center bg-cover" style={{ backgroundImage: "url('/images/playgroup-header.jpg')" }}>
        <div className="absolute inset-0 bg-black bg-opacity-40 flex flex-col items-center justify-center text-white text-center p-6">
          <h1 className="text-4xl md:text-5xl font-bold">Playgroup Program</h1>
          <p className="text-lg md:text-xl mt-2">A safe and nurturing space for early learners</p>
        </div>
      </section>
      <section className="py-16 px-6 text-center max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold text-gray-900">About Playgroup</h2>
        <p className="text-gray-800 mt-4">
          Our Playgroup program is designed for children aged <strong>1.5 - 2.5 years</strong>, focusing on interactive learning through
          <strong> play, music, and exploration</strong>.
        </p>
      </section>
      <section className="py-16 px-6 text-center bg-gradient-to-r from-[#5753ff] via-[#c7c5ff] to-[#5753ff]">
        <h2 className="text-2xl font-bold text-gray-900 text-center">Key Features</h2>
        <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
          <div className="p-6 bg-[#FFD95F] text-white rounded-lg shadow-md hover:shadow-lg transition duration-300">
            <h3 className="text-lg font-semibold">Interactive Play</h3>
            <p className="mt-2">Hands-on activities to boost creativity & curiosity.</p>
          </div>
          <div className="p-6 bg-[#B8D576] text-white rounded-lg shadow-md hover:shadow-lg transition duration-300">
            <h3 className="text-lg font-semibold">Social Development</h3>
            <p className="mt-2">Encourages teamwork & communication with peers.</p>
          </div>
          <div className="p-6 bg-[#D70654] text-white rounded-lg shadow-md hover:shadow-lg transition duration-300">
            <h3 className="text-lg font-semibold">Safe Environment</h3>
            <p className="mt-2">Child-friendly spaces designed for comfort & learning.</p>
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
      
      <footer className="bg-gray-900 text-white text-center p-6 mt-16">
        <p>&copy; {new Date().getFullYear()} Brahmaputra Gurukul. All rights reserved.</p>
      </footer>
    </div>
  );
}
