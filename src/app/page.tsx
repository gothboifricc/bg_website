// "use client";
// import React, { useState } from "react";
// import Image from "next/image";
// import Link from "next/link";
// import { Menu, X } from "lucide-react";
// import { useRouter } from "next/navigation";

// export default function HomePage() {
//   const [menuOpen, setMenuOpen] = useState(false);
//   const router = useRouter();

//   const handleContactClick = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
//     e.preventDefault();
//     if (window.location.pathname === "/") {
//       document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
//     } else {
//       router.push("/#contact");
//     }
//   };

//   return (
//     <div className="bg-gradient-to-r from-[#5753ff] via-[#c7c5ff] to-[#5753ff] text-gray-900 min-h-screen">
//       {/* Notification Ticker */}
//       <div className="w-full bg-black text-neon-green py-2 overflow-hidden">
//         <div className="whitespace-nowrap animate-marquee text-lg font-bold uppercase">
//           🔔 School Reopening Soon! &nbsp; | &nbsp; 🎓 Admissions Open for 2025! &nbsp; | &nbsp; 🏆 New Competitions Coming Soon!
//         </div>
//       </div>

//       {/* Header */}
//       <header className="relative bg-[#FFEE54] p-4 flex justify-between items-center shadow-md border-b-4 border-[#D70654]">
//         <div className="flex items-center space-x-4">
//           <Image src="/images/logo.png" alt="Brahmaputra Gurukul Logo" width={120} height={60} className="drop-shadow-lg" />
//         </div>

//         {/* Desktop Nav */}
//         <nav className="hidden md:flex space-x-6 font-medium">
//           {[{ name: "Home", href: "/" }, { name: "Our Programs", href: "/programs/our-programs" }, { name: "Contact", href: "#contact" }, { name: "Login", href: "/login" }, { name: "Admin", href: "/admin" }].map((link, index) => (
//             <Link
//               key={index}
//               href={link.href}
//               onClick={link.name === "Contact" ? handleContactClick : undefined}
//               className="relative group text-[#D70654] hover:text-white transition-colors duration-300"
//             >
//               <span className="px-3 py-2 text-xl">{link.name}</span>
//               {/* Underline effect */}
//               <span className="absolute left-0 bottom-[-4px] w-full h-[2px] bg-[#D70654] scale-x-0 group-hover:scale-x-100 transform transition-all duration-300"></span>
//             </Link>
//           ))}

//         </nav>

//         {/* Mobile Menu Button */}
//         <button
//           className="md:hidden flex items-center justify-center bg-[#FFD95F] p-2 rounded-full border-4 border-[#D70654] shadow-md hover:bg-[#FFEE54] transform transition duration-300"
//           onClick={() => setMenuOpen(!menuOpen)}
//         >
//           {menuOpen ? <X size={28} className="text-[#D70654]" /> : <Menu size={28} className="text-[#D70654]" />}
//         </button>

//         {/* Mobile Nav (Sliding Drawer) */}
//         <div className={`fixed top-0 left-0 w-full h-full bg-[#FFD95F] transition-transform transform ${menuOpen ? "translate-x-0" : "-translate-x-full"} duration-300 z-50 flex flex-col items-center pt-20 shadow-lg`}>
//           <button onClick={() => setMenuOpen(false)} className="absolute top-4 right-6 bg-[#D70654] text-white p-2 rounded-full">
//             <X size={28} />
//           </button>

//           <nav className="flex flex-col space-y-6 text-xl font-bold text-[#D70654]">
//             {[{ name: "Home", href: "/" }, { name: "Our Programs", href: "/programs/our-programs" }, { name: "Contact", href: "#contact" }].map((link, index) => (
//               <Link
//                 key={index}
//                 href={link.href}
//                 onClick={(e) => {
//                   if (link.name === "Contact") {
//                     handleContactClick(e);
//                   }
//                   setMenuOpen(false);
//                 }}
//                 className="px-6 py-3 text-[#D70654] hover:text-white transition-colors duration-300 relative group"
//               >
//                 {link.name}
//                 {/* Candy-colored underline for mobile */}
//                 <span className="absolute left-0 bottom-[-4px] w-full h-[2px] bg-gradient-to-r from-pink-500 to-yellow-500 scale-x-0 group-hover:scale-x-100 transform transition-all duration-300"></span>
//               </Link>
//             ))}

//             {/* Login Button */}
//             <Link href="/login">
//               <button className="bg-blue-500 text-white px-4 py-2 rounded-full border-2 border-white hover:bg-blue-700 transition">
//                 Login
//               </button>
//             </Link>
//             {/* Signup Button */}
//             <Link href="/signup">
//               <button className="bg-green-500 text-white px-4 py-2 rounded-full border-2 border-white hover:bg-green-700 transition">
//                 Sign Up
//               </button>
//             </Link>
//           </nav>
//         </div>
//       </header>


//       {/* Hero Section with Parallax */}
//       <section className="relative w-full h-[500px] bg-fixed bg-center bg-cover" style={{ backgroundImage: "url('/images/home-bg.jpg')" }}>
//         <div className="absolute inset-0 bg-black bg-opacity-40 flex flex-col items-center justify-center text-white text-center p-6">
//           <h1 className="text-4xl md:text-5xl font-bold">Welcome to Brahmaputra Gurukul</h1>
//           <p className="text-lg md:text-xl mt-2">We Nurture Your Child&apos;s Future</p>
//         </div>
//       </section>

//       {/* About Section */}
//       <section className="py-16 px-6 max-w-6xl mx-auto text-center">
//         <h2 className="text-3xl font-bold text-gray-800">Our Mission & Vision</h2>
//         <p className="mt-4 text-gray-800 text-lg font-medium leading-[2.5] text-center">
//           At <strong className="text-primary">Brahmaputra Gurukul</strong>, we want every child to 
//           <span className="text-primary font-semibold"> dream big, explore more, </span> 
//           and have <span className="text-yellow-500 font-semibold">tons of fun</span> while learning!  
//           Our school is like a big happy family where curiosity is encouraged, questions are welcome, 
//           and mistakes are just part of the adventure. 🤩🎈  

//           <br /><br />  

//           We believe that learning isn&apos;t just about books and exams—it&apos;s about 
//           <span className="text-blue-500 font-semibold"> discovering new things, making friends, </span> 
//           and growing into kind, smart, and confident humans. Whether it&apos;s solving puzzles, 
//           painting masterpieces, or running around in the playground, we make sure every child enjoys 
//           the journey of learning. 🎨📚🏃‍♂️  

//           <br /><br />  

//           We&apos;re not just teaching lessons; 
//           we&apos;re building a future full of <span className="text-green-500 font-semibold">bright minds </span> 
//           and <span className="text-red-500 font-semibold">happy hearts!</span> 🌟❤️😊  
//         </p>


//         <div className="mt-6">
//           <Link href="/programs/our-programs">
//             <button className="bg-[#FFD95F] text-gray-900 font-bold py-3 px-6 text-lg rounded-full border-4 border-[#D70654] shadow-lg hover:bg-[#FFEE54] transition-transform transform hover:scale-105">
//               Explore Our Programs &gt;&gt;
//             </button>
//           </Link>
//         </div>
//       </section>

//       {/* News and Notifications Section (Moved Below About Section) */}
//       <section className="py-16 px-6 max-w-6xl mx-auto">
//         <div className="bg-white p-6 rounded-lg shadow-md border-l-4 border-[#D70654]">
//           <h3 className="text-2xl font-bold text-[#D70654] border-b-2 pb-2">News & Notifications</h3>
//           <ul className="mt-4 space-y-2 text-gray-700">
//             <li className="border-b pb-2">🔹 <a href="https://instagram.com/brahmaputragurukul" className="text-blue-600 hover:underline">Admission Open for 2025</a></li>
//             <li className="border-b pb-2">🔹 <a href="https://instagram.com/brahmaputragurukul" className="text-blue-600 hover:underline">Upcoming Parent-Teacher Meeting</a></li>
//             <li className="border-b pb-2">🔹 <a href="https://instagram.com/brahmaputragurukul" className="text-blue-600 hover:underline">Annual Sports Day Announced</a></li>
//             <li>🔹 <a href="https://instagram.com/brahmaputragurukul" className="text-blue-600 hover:underline">New Learning Modules Introduced</a></li>
//           </ul>
//         </div>
//       </section>

//       {/* Contact Us Section */}
//       <section id="contact" className="py-16 px-6 text-center bg-[#FFEFC8] pb-16">
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
//           <a href="https://www.facebook.com/profile.php?id=61555911477265" target="_blank" rel="noopener noreferrer" className="w-12 h-12 flex items-center justify-center bg-[#1877F2] text-white rounded-full shadow-lg hover:scale-110 transition-transform border-2 border-white">
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
//       <footer className="bg-gray-900 text-white text-center p-6">
//         <p>&copy; {new Date().getFullYear()} Brahmaputra Gurukul. All rights reserved.</p>
//       </footer>
//     </div>
//   );
// }

"use client";
import React, { useEffect, useState } from "react";
import { db } from "../app/lib/firebaseConfig"; // Ensure this file exists
import { collection, onSnapshot } from "firebase/firestore";
import Image from "next/image";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { useRouter } from "next/navigation";

export default function HomePage() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [tickerMessages, setTickerMessages] = useState<string[]>([]);
  const [news, setNews] = useState<{ text: string; link: string }[]>([]);
  const router = useRouter();

// 🔥 Firestore Real-Time Listener for Ticker Messages & News
  useEffect(() => {
    const unsubscribeTickers = onSnapshot(collection(db, "notifications"), (snapshot) => {
      setTickerMessages(snapshot.docs.map((doc) => doc.data().text));
    });

    const unsubscribeNews = onSnapshot(collection(db, "news"), (snapshot) => {
      setNews(snapshot.docs.map((doc) => ({ text: doc.data().text, link: doc.data().link })));
    });

    // Cleanup listeners when component unmounts
    return () => {
      unsubscribeTickers();
      unsubscribeNews();
    };
  }, []);

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
      {/* ✅ Updated Ticker Messages Section */}
      <div className="w-full bg-black text-neon-green py-2 overflow-hidden">
        <div className="whitespace-nowrap animate-marquee text-lg font-bold uppercase">
          {tickerMessages.length > 0 ? (
            tickerMessages.map((msg, index) => <span key={index}>🔔 {msg} &nbsp; | &nbsp;</span>)
          ) : (
            "No recent notifications."
          )}
        </div>
      </div>

      {/* Header */}
      <header className="relative bg-[#FFEE54] p-4 flex justify-between items-center shadow-md border-b-4 border-[#D70654]">
        <div className="flex items-center space-x-4">
          <Image src="/images/logo.png" alt="Brahmaputra Gurukul Logo" width={120} height={60} className="drop-shadow-lg" />
        </div>

        {/* Desktop Nav */}
        <nav className="hidden md:flex space-x-6 font-medium">
          {[{ name: "Home", href: "/" }, { name: "Our Programs", href: "/programs/our-programs" }, { name: "Contact", href: "#contact" }, { name: "Login", href: "/login" }].map((link, index) => (
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
          <button onClick={() => setMenuOpen(false)} className="absolute top-4 right-6 bg-[#D70654] text-white p-2 rounded-full" aria-label="Close Menu">
            <X size={28} />
          </button>

          <nav className="flex flex-col space-y-6 text-xl font-bold text-[#D70654]">
            {[{ name: "Home", href: "/" }, { name: "Our Programs", href: "/programs/our-programs" }, { name: "Contact", href: "#contact" }, { name: "Login", href: "/login" }].map((link, index) => (
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
      <section className="relative w-full h-[500px] bg-fixed bg-center bg-cover" style={{ backgroundImage: "url('/images/home-bg.jpg')" }}>
        <div className="absolute inset-0 bg-black bg-opacity-40 flex flex-col items-center justify-center text-white text-center p-6">
          <h1 className="text-4xl md:text-5xl font-bold">Welcome to Brahmaputra Gurukul</h1>
          <p className="text-lg md:text-xl mt-2">We Nurture Your Child&apos;s Future</p>
        </div>
      </section>

      {/* About Section */}
      <section className="py-16 px-6 max-w-6xl mx-auto text-center">
        <h2 className="text-3xl font-bold text-gray-800">Our Mission & Vision</h2>
        <p className="mt-4 text-gray-800 text-lg font-medium leading-[2.5] text-center">
          At <strong className="text-primary">Brahmaputra Gurukul</strong>, we want every child to 
          <span className="text-primary font-semibold"> dream big, explore more, </span> 
          and have <span className="text-yellow-500 font-semibold">tons of fun</span> while learning!  
          Our school is like a big happy family where curiosity is encouraged, questions are welcome, 
          and mistakes are just part of the adventure. 🤩🎈  

          <br /><br />  

          We believe that learning isn&apos;t just about books and exams—it&apos;s about 
          <span className="text-blue-500 font-semibold"> discovering new things, making friends, </span> 
          and growing into kind, smart, and confident humans. Whether it&apos;s solving puzzles, 
          painting masterpieces, or running around in the playground, we make sure every child enjoys 
          the journey of learning. 🎨📚🏃‍♂️  

          <br /><br />  

          We&apos;re not just teaching lessons; 
          we&apos;re building a future full of <span className="text-green-500 font-semibold">bright minds </span> 
          and <span className="text-red-500 font-semibold">happy hearts!</span> 🌟❤️😊  
        </p>


        <div className="mt-6">
          <Link href="/programs/our-programs">
            <button className="bg-[#FFD95F] text-gray-900 font-bold py-3 px-6 text-lg rounded-full border-4 border-[#D70654] shadow-lg hover:bg-[#FFEE54] transition-transform transform hover:scale-105">
              Explore Our Programs &gt;&gt;
            </button>
          </Link>
        </div>
      </section>

      {/* ✅ Updated News Section */}
      <section className="py-16 px-6 max-w-6xl mx-auto">
        <div className="bg-white p-6 rounded-lg shadow-md border-l-4 border-[#D70654]">
          <h3 className="text-2xl font-bold text-[#D70654] border-b-2 pb-2">News & Notifications</h3>
          <ul className="mt-4 space-y-2 text-gray-700">
            {news.length > 0 ? (
              news.map((item, index) => (
                <li key={index} className="border-b pb-2">
                  🔹 <a href={item.link} className="text-blue-600 hover:underline">{item.text}</a>
                </li>
              ))
            ) : (
              <li>No recent news updates.</li>
            )}
          </ul>
        </div>
      </section>

      {/* Contact Us Section */}
      <section id="contact" className="py-16 px-6 text-center bg-[#FFEFC8] pb-16">
        <h2 className="text-3xl font-bold text-gray-800">Contact Us</h2>
        <p className="mt-4 text-gray-700">Have any questions? Fill out the form below, and we’ll get back to you soon.</p>

        <form 
          action="https://formspree.io/f/YOUR_FORM_ID" 
          method="POST" 
          className="mt-6 max-w-lg mx-auto bg-white p-6 rounded-lg shadow-md"
        >
          <div className="mb-4">
            <label className="block text-gray-700 font-semibold">Name</label>
            <input type="text" name="name" required className="w-full p-2 border-2 border-gray-300 rounded-lg" aria-label="User Name"/>
          </div>

          <div className="mb-4">
            <label className="block text-gray-700 font-semibold">Email</label>
            <input type="email" name="email" required className="w-full p-2 border-2 border-gray-300 rounded-lg" aria-label="User Email" />
          </div>

          <div className="mb-4">
            <label htmlFor="message" className="block text-gray-700 font-semibold">
              Message
            </label>
            <textarea 
              id="message" 
              name="message" 
              required 
              className="w-full p-2 border-2 border-gray-300 rounded-lg h-32"
            ></textarea>
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
          <a href="https://www.facebook.com/profile.php?id=61555911477265" target="_blank" rel="noopener noreferrer" className="w-12 h-12 flex items-center justify-center bg-[#1877F2] text-white rounded-full shadow-lg hover:scale-110 transition-transform border-2 border-white">
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
      <footer className="bg-gray-900 text-white text-center p-6">
        <p>&copy; {new Date().getFullYear()} Brahmaputra Gurukul. All rights reserved.</p>
      </footer>
    </div>
  );
}

