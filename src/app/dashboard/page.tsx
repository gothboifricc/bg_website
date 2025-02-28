"use client";

import { useEffect, useState, useRef } from "react";
import { auth } from "../lib/firebaseConfig";
import { signOut } from "firebase/auth";
import { useRouter } from "next/navigation";
import { getFirestore, doc, getDoc } from "firebase/firestore";
import { User } from "firebase/auth";

export default function Dashboard() {
  const [user, setUser] = useState<User | null>(null);
  const [sheetUrl, setSheetUrl] = useState<string | null>(null);
  const [showReports, setShowReports] = useState(false);
  const router = useRouter();
  const db = getFirestore();
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const [color, setColor] = useState("#000000");

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(async (user) => {
      if (!user) {
        console.log("User is not logged in");
        router.push("/login");
      } else {
        console.log("User is logged in:", user.uid);
        setUser(user);
        await fetchStudentSheet(user.uid);
      }
    });
    return () => unsubscribe();
  }, [router]);

  const fetchStudentSheet = async (userId: string) => {
    const docRef = doc(db, "students", userId);
    const docSnap = await getDoc(docRef);

    if (docSnap.exists()) {
      setSheetUrl(docSnap.data().sheetUrl);
    } else {
      setSheetUrl(null);
    }
  };

  const handleLogout = async () => {
    await signOut(auth);
    router.push("/");
  };

  const isDrawing = useRef(false);

  const clearCanvas = () => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    
    const ctx = canvas.getContext("2d");
    if (!ctx) return;
  
    ctx.clearRect(0, 0, canvas.width, canvas.height);
  };

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    ctx.strokeStyle = color;
    ctx.lineWidth = 5;
    ctx.lineCap = "round";

    const startDrawing = (event: MouseEvent) => {
      isDrawing.current = true;
      ctx.beginPath();
      ctx.moveTo(event.offsetX, event.offsetY);
    };

    const draw = (event: MouseEvent) => {
      if (!isDrawing.current) return;
      ctx.lineTo(event.offsetX, event.offsetY);
      ctx.stroke();
    };

    const stopDrawing = () => {
      isDrawing.current = false;
      ctx.beginPath();
    };

    canvas.addEventListener("mousedown", startDrawing);
    canvas.addEventListener("mousemove", draw);
    canvas.addEventListener("mouseup", stopDrawing);
    canvas.addEventListener("mouseleave", stopDrawing);

    return () => {
      canvas.removeEventListener("mousedown", startDrawing);
      canvas.removeEventListener("mousemove", draw);
      canvas.removeEventListener("mouseup", stopDrawing);
      canvas.removeEventListener("mouseleave", stopDrawing);
    };
  }, [color]);

  return (
    <div className="min-h-screen flex flex-col md:flex-row bg-[#1b1b1b] p-4 md:p-6">
      {/* Sidebar */}
      <aside className="w-full md:w-72 bg-purple-600 text-white p-6 rounded-3xl shadow-lg flex flex-col items-center md:sticky md:top-0">
        <h1 className="text-2xl font-bold mb-6 text-center">Brahmaputra Gurukul</h1>
        <nav className="flex flex-col w-full gap-4">
          <button 
            onClick={() => setShowReports(false)} 
            className={`${!showReports ? 'bg-green-500' : 'hover:bg-purple-500'} p-3 rounded-xl text-center`}
          >
            Dashboard
          </button>
          <button 
            onClick={() => setShowReports(true)} 
            className={`${showReports ? 'bg-green-500' : 'hover:bg-purple-500'} p-3 rounded-xl text-center`}
          >
            Daily Reports
          </button>
        </nav>
        <button onClick={handleLogout} className="mt-auto bg-red-500 hover:bg-red-600 p-3 rounded-xl w-full text-white">
          Logout
        </button>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-4 md:p-10 rounded-3xl bg-[#494949] shadow-lg mt-6 md:mt-0 md:ml-6">
        {showReports ? (
          sheetUrl ? (
            <iframe 
              src={sheetUrl} 
              className="w-full h-64 md:h-screen rounded-3xl"
              title="Report Preview" // ✅ Added title attribute
            ></iframe>
          ) : (
            <p className="text-white text-center">No report available.</p>
          )
        ) : (
          <>
            <h1 className="text-2xl md:text-3xl font-bold text-white mb-4 md:mb-6 text-center md:text-left">
              Hi {user?.email}!
            </h1>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-blue-400 text-white p-4 md:p-6 rounded-xl shadow-lg text-center">
                <h2 className="text-lg md:text-xl font-bold">Rhyme of the Day</h2>
                <iframe
                  className="w-full h-32 md:h-40 rounded-lg"
                  src="https://www.youtube.com/embed/6_ZKv8Y3P1A"
                  title="Nursery Rhymes Video" // ✅ Added title attribute
                  allowFullScreen
                ></iframe>
              </div>
              <div className="bg-pink-400 text-white p-4 md:p-6 rounded-xl shadow-lg text-center">
                <h2 className="text-lg md:text-xl font-bold">Teacher&apos;s Comment</h2>
                <p className="mt-2">&quot;Great job today! Keep up the good work.&quot;</p>
              </div>
              <div className="bg-yellow-400 text-white p-4 md:p-6 rounded-xl shadow-lg text-center">
                <h2 className="text-lg md:text-xl font-bold">Drawing Board</h2>
                <canvas 
                  ref={canvasRef} 
                  width={250} 
                  height={250} 
                  className="bg-white rounded-md mt-2 cursor-crosshair w-full"
                ></canvas>
                <div className="flex justify-center mt-2 gap-2">
                  <label htmlFor="colorPicker" className="text-white">Select Color:</label>
                  <input 
                    id="colorPicker"
                    type="color" 
                    value={color} 
                    onChange={(e) => setColor(e.target.value)} 
                    aria-label="Select drawing color"
                  />
                </div>
                {/* ✅ Added Clear Canvas Button */}
                <button 
                  onClick={clearCanvas} 
                  className="mt-2 px-4 py-2 bg-red-500 text-white rounded-lg shadow-md hover:bg-red-600 transition"
                >
                  Clear Canvas
                </button>
              </div>
            </div>
          </>
        )}
      </main>
    </div>
  );
}