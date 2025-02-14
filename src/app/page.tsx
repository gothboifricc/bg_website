// "use client";
// import React, { useState } from "react";
// import Image from "next/image";
// import Link from "next/link";
// import { Menu, X } from "lucide-react";

// export default function HomePage() {
//   const [menuOpen, setMenuOpen] = useState(false);

//   return (
//     <div className="bg-gradient-to-r from-[#5753ff] via-[#c7c5ff] to-[#5753ff] text-gray-900 min-h-screen">
//       {/* Header */}
//       <header className="relative bg-[#FFEE54] p-4 flex justify-between items-center shadow-md rounded-b-[30px] border-b-4 border-[#D70654]">
//         <div className="flex items-center space-x-4">
//           <Image src="/images/logo.png" alt="Brahmaputra Gurukul Logo" width={120} height={60} className="drop-shadow-lg" />
//         </div>

//         {/* Desktop Nav */}
//         <nav className="hidden md:flex space-x-6 font-medium">
//           {[
//             { name: "Home", href: "/" },
//             { name: "Our Programs", href: "/programs/our-programs" },
//             { name: "Contact", href: "#contact" }
//           ].map((link, index) => (
//             <Link
//               key={index}
//               href={link.href}
//               className="text-[#D70654] bg-[#FFFFFF] px-4 py-2 rounded-full border-4 border-[#D70654] shadow-lg hover:bg-[#C0DFFF] transition-transform transform hover:scale-110"
//             >
//               {link.name}
//             </Link>
//           ))}
//         </nav>

//         {/* Mobile Menu Button */}
//         <button className="md:hidden bg-[#FFD95F] p-2 rounded-full border-4 border-[#D70654] shadow-lg" onClick={() => setMenuOpen(!menuOpen)}>
//           {menuOpen ? <X size={28} className="text-[#D70654]" /> : <Menu size={28} className="text-[#D70654]" />}
//         </button>

//         {/* Mobile Nav (Sliding Drawer) */}
//         <div className={`fixed top-0 left-0 w-full h-full bg-[#FFD95F] transition-transform transform ${menuOpen ? "translate-x-0" : "-translate-x-full"} duration-300 z-50 flex flex-col items-center pt-20 shadow-lg`}>
//           <button onClick={() => setMenuOpen(false)} className="absolute top-4 right-6 bg-[#D70654] text-white p-2 rounded-full">
//             <X size={28} />
//           </button>

//           <nav className="flex flex-col space-y-6 text-xl font-bold text-[#D70654]">
//             {[
//               { name: "Home", href: "/" },
//               { name: "Our Programs", href: "/programs/our-programs" },
//               { name: "Contact", href: "#contact" }
//             ].map((link, index) => (
//               <Link
//                 key={index}
//                 href={link.href}
//                 className="px-6 py-3 bg-[#FFEE54] rounded-full border-4 border-[#D70654] shadow-lg hover:bg-white transition-transform transform hover:scale-110"
//                 onClick={() => setMenuOpen(false)}
//               >
//                 {link.name}
//               </Link>
//             ))}
//           </nav>
//         </div>
//       </header>


//       {/* Hero Section with Parallax */}
//       <section className="relative w-full h-[500px] bg-fixed bg-center bg-cover" style={{ backgroundImage: "url('/images/home-bg.jpg')" }}>
//         <div className="absolute inset-0 bg-black bg-opacity-40 flex flex-col items-center justify-center text-white text-center p-6">
//           <h1 className="text-4xl md:text-5xl font-bold">Welcome to Brahmaputra Gurukul</h1>
//           <p className="text-lg md:text-xl mt-2">We Nurture Your Child's Future</p>
//         </div>
//       </section>

//       {/* About Section */}
//       <section className="py-16 px-6 text-center max-w-4xl mx-auto">
//         <h2 className="text-3xl font-bold text-gray-800">Our Mission & Vision</h2>
//         <p className="mt-4 text-gray-700">
//           At Brahmaputra Gurukul, we believe in holistic education that nurtures creativity, critical thinking, and emotional intelligence.
//           Our goal is to create a safe and inspiring learning environment where children develop a love for learning that lasts a lifetime.
//         </p>

//         {/* Cartoonish Button */}
//         <div className="mt-6">
//           <Link href="/programs/our-programs">
//             <button className="bg-[#FFD95F] text-gray-900 font-bold py-3 px-6 text-lg rounded-full border-4 border-[#D70654] shadow-lg hover:bg-[#FFEE54] transition-transform transform hover:scale-105">
//               Explore Our Programs &gt;&gt;
//             </button>
//           </Link>
//         </div>
//       </section>

//       {/* Team Section */}
//       <section className="py-16 px-6 text-center">
//         <h2 className="text-3xl font-bold text-gray-800">Meet Our Team</h2>
//         <div className="mt-8 flex flex-wrap justify-center gap-6">
//           {[
//             { name: "Mr. Bhabesh", role: "Director", image: "/images/team4.jpeg" },
//             { name: "Mrs. Gita", role: "Principal", image: "/images/team1.jpeg" },
//             { name: "Mrs. Juri", role: "Vice Principal", image: "/images/team2.jpeg" },
//             { name: "Mrs. Sunita", role: "Teacher", image: "/images/team3.jpeg" }
//           ].map((member, index) => (
//             <div key={index} className="bg-white p-6 rounded-lg shadow-md w-64 flex-shrink-0">
//               <Image src={member.image} alt={member.name} width={100} height={100} className="mx-auto rounded-full" />
//               <h3 className="text-xl font-semibold mt-4">{member.name}</h3>
//               <p className="text-gray-600">{member.role}</p>
//             </div>
//           ))}
//         </div>
//       </section>
      
//       {/* Contact Us Section */}
//       <section id="contact" className="py-16 px-6 text-center bg-[#FFEFC8]">
//         <h2 className="text-3xl font-bold text-gray-800">Contact Us</h2>
//         <p className="mt-4 text-gray-700">Have any questions? Fill out the form below, and we’ll get back to you soon.</p>

//         <form 
//           action="https://formspree.io/f/YOUR_FORM_ID" 
//           method="POST" 
//           className="mt-6 max-w-lg mx-auto bg-white p-6 rounded-lg shadow-md"
//         >
//           <div className="mb-4">
//             <label className="block text-gray-700 font-semibold">Name</label>
//             <input type="text" name="name" required className="w-full p-2 border-2 border-gray-300 rounded-lg" />
//           </div>

//           <div className="mb-4">
//             <label className="block text-gray-700 font-semibold">Email</label>
//             <input type="email" name="email" required className="w-full p-2 border-2 border-gray-300 rounded-lg" />
//           </div>

//           <div className="mb-4">
//             <label className="block text-gray-700 font-semibold">Message</label>
//             <textarea name="message" required className="w-full p-2 border-2 border-gray-300 rounded-lg h-32"></textarea>
//           </div>

//           <button type="submit" className="bg-[#FFD95F] text-gray-900 font-bold py-3 px-6 text-lg rounded-full border-4 border-[#D70654] shadow-lg hover:bg-[#FFEE54] transition-transform transform hover:scale-105">
//             Send Message
//           </button>
//         </form>

//         {/* Contact Information */}
//         <div className="mt-10 text-gray-800 text-lg">
//           <p className="font-bold">Address:</p>
//           <p className="text-[#D70654]">6, Bir Lachit Path, Survey, Beltola</p>
          
//           <p className="mt-4 font-bold">Contact Number:</p>
//           <p className="text-[#D70654]">+91 70862 35782</p>
          
//           <p className="mt-4 font-bold">Email ID:</p>
//           <p className="text-[#D70654]">brahmaputrabest@gmail.com</p>
//         </div>

//         {/* Social Media Links */}
//         <div className="mt-10 flex justify-center space-x-6">
//           <a href="https://facebook.com/brahmaputragurukul" target="_blank" rel="noopener noreferrer" className="w-12 h-12 flex items-center justify-center bg-[#1877F2] text-white rounded-full shadow-lg hover:scale-110 transition-transform border-2 border-white">
//             <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M18 2h-3a5 5 0 00-5 5v3H6v4h4v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3V2z" /></svg>
//           </a>
//           <a href="mailto:brahmaputrabest@gmail.com" className="w-12 h-12 flex items-center justify-center bg-[#E4405F] text-white rounded-full shadow-lg hover:scale-110 transition-transform border-2 border-white">
//             <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5h18M3 12h18M3 19h18" /></svg>
//           </a>
//           <a href="https://instagram.com/brahmaputragurukul" target="_blank" rel="noopener noreferrer" className="w-12 h-12 flex items-center justify-center bg-[#D70654] text-white rounded-full shadow-lg hover:scale-110 transition-transform border-2 border-white">
//             <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 3h8a5 5 0 015 5v8a5 5 0 01-5 5H8a5 5 0 01-5-5V8a5 5 0 015-5z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.5 6.5h.01" /></svg>
//           </a>
//         </div>
//       </section>



//       {/* Footer */}
//       <footer className="bg-gray-900 text-white text-center p-6 mt-16">
//         <p>&copy; {new Date().getFullYear()} Brahmaputra Gurukul. All rights reserved.</p>
//       </footer>
//     </div>
//   );
// }
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
              className="text-[#D70654] bg-[#FFFFFF] px-4 py-2 rounded-full border-4 border-[#D70654] shadow-lg hover:bg-[#e8ecff] transition-transform transform hover:scale-110"
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
          <h1 className="text-4xl md:text-5xl font-bold">Welcome to Brahmaputra Gurukul</h1>
          <p className="text-lg md:text-xl mt-2">We Nurture Your Child's Future</p>
        </div>
      </section>

      {/* About Section */}
      <section className="py-16 px-6 text-center max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold text-gray-800">Our Mission & Vision</h2>
        <p className="mt-4 text-gray-700">
          At Brahmaputra Gurukul, we believe in holistic education that nurtures creativity, critical thinking, and emotional intelligence.
          Our goal is to create a safe and inspiring learning environment where children develop a love for learning that lasts a lifetime.
        </p>

        {/* Cartoonish Button */}
        <div className="mt-6">
          <Link href="/programs/our-programs">
            <button className="bg-[#FFD95F] text-gray-900 font-bold py-3 px-6 text-lg rounded-full border-4 border-[#D70654] shadow-lg hover:bg-[#FFEE54] transition-transform transform hover:scale-105">
              Explore Our Programs &gt;&gt;
            </button>
          </Link>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16 px-6 text-center">
        <h2 className="text-3xl font-bold text-gray-800">Meet Our Team</h2>
        <div className="mt-8 flex flex-wrap justify-center gap-6">
          {[
            { name: "Mr. Bhabesh", role: "Director", image: "/images/team4.jpeg" },
            { name: "Mrs. Gita", role: "Principal", image: "/images/team1.jpeg" },
            { name: "Mrs. Juri", role: "Vice Principal", image: "/images/team2.jpeg" },
            { name: "Mrs. Sunita", role: "Teacher", image: "/images/team3.jpeg" }
          ].map((member, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-md w-64 flex-shrink-0">
              <Image src={member.image} alt={member.name} width={100} height={100} className="mx-auto rounded-full" />
              <h3 className="text-xl font-semibold mt-4">{member.name}</h3>
              <p className="text-gray-600">{member.role}</p>
            </div>
          ))}
        </div>
      </section>
      
      {/* Contact Us Section */}
      <section id="contact" className="py-16 px-6 text-center bg-[#FFEFC8]">
        <h2 className="text-3xl font-bold text-gray-800">Contact Us</h2>
        <p className="mt-4 text-gray-700">Have any questions? Fill out the form below, and we’ll get back to you soon.</p>

        <form 
          action="https://formspree.io/f/YOUR_FORM_ID" 
          method="POST" 
          className="mt-6 max-w-lg mx-auto bg-white p-6 rounded-lg shadow-md"
        >
          <div className="mb-4">
            <label className="block text-gray-700 font-semibold">Name</label>
            <input type="text" name="name" required className="w-full p-2 border-2 border-gray-300 rounded-lg" />
          </div>

          <div className="mb-4">
            <label className="block text-gray-700 font-semibold">Email</label>
            <input type="email" name="email" required className="w-full p-2 border-2 border-gray-300 rounded-lg" />
          </div>

          <div className="mb-4">
            <label className="block text-gray-700 font-semibold">Message</label>
            <textarea name="message" required className="w-full p-2 border-2 border-gray-300 rounded-lg h-32"></textarea>
          </div>

          <button type="submit" className="bg-[#FFD95F] text-gray-900 font-bold py-3 px-6 text-lg rounded-full border-4 border-[#D70654] shadow-lg hover:bg-[#FFEE54] transition-transform transform hover:scale-105">
            Send Message
          </button>
        </form>

        {/* Contact Information */}
        <div className="mt-10 text-gray-800 text-lg">
          <p className="font-bold">Address:</p>
          <p className="text-[#D70654]">6, Bir Lachit Path, Survey, Beltola</p>
          
          <p className="mt-4 font-bold">Contact Number:</p>
          <p className="text-[#D70654]">+91 70862 35782</p>
          
          <p className="mt-4 font-bold">Email ID:</p>
          <p className="text-[#D70654]">brahmaputrabest@gmail.com</p>
        </div>

        {/* Social Media Links */}
        <div className="mt-10 flex justify-center space-x-6">
          <a href="https://facebook.com/brahmaputragurukul" target="_blank" rel="noopener noreferrer" className="w-12 h-12 flex items-center justify-center bg-[#1877F2] text-white rounded-full shadow-lg hover:scale-110 transition-transform border-2 border-white">
            <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M18 2h-3a5 5 0 00-5 5v3H6v4h4v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3V2z" /></svg>
          </a>
          <a href="mailto:brahmaputrabest@gmail.com" className="w-12 h-12 flex items-center justify-center bg-[#E4405F] text-white rounded-full shadow-lg hover:scale-110 transition-transform border-2 border-white">
            <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5h18M3 12h18M3 19h18" /></svg>
          </a>
          <a href="https://instagram.com/brahmaputragurukul" target="_blank" rel="noopener noreferrer" className="w-12 h-12 flex items-center justify-center bg-[#D70654] text-white rounded-full shadow-lg hover:scale-110 transition-transform border-2 border-white">
            <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 3h8a5 5 0 015 5v8a5 5 0 01-5 5H8a5 5 0 01-5-5V8a5 5 0 015-5z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.5 6.5h.01" /></svg>
          </a>
        </div>
      </section>



      {/* Footer */}
      <footer className="bg-gray-900 text-white text-center p-6 mt-16">
        <p>&copy; {new Date().getFullYear()} Brahmaputra Gurukul. All rights reserved.</p>
      </footer>
    </div>
  );
}
