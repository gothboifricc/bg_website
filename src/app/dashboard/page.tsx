
// "use client";

// import { useEffect, useState } from "react";
// import { auth } from "../lib/firebaseConfig";
// import { signOut } from "firebase/auth";
// import { useRouter } from "next/navigation";
// import { getFirestore, doc, getDoc } from "firebase/firestore";
// import { User } from "firebase/auth";

// export default function Dashboard() {
//   const [user, setUser] = useState<User | null>(null);
//   // const [attendance, setAttendance] = useState<number | null>(null);
//   // const [messages, setMessages] = useState<string | null>(null);
//   // const [homework, setHomework] = useState<string | null>(null);
//   const [sheetUrl, setSheetUrl] = useState<string | null>(null);
//   const [showReports, setShowReports] = useState(false);
//   const router = useRouter();
//   const db = getFirestore();
  
//   useEffect(() => {
//     const unsubscribe = auth.onAuthStateChanged(async (user) => {
//       if (!user) {
//         console.log("User is not logged in");
//         router.push("/login");
//       } else {
//         console.log("User is logged in:", user.uid);
//         setUser(user);
//         await fetchStudentSheet(user.uid);
//       }
//     });
//     return () => unsubscribe();
//   }, [router]);

//   const fetchStudentSheet = async (userId: string) => {
//     const docRef = doc(db, "students", userId);
//     const docSnap = await getDoc(docRef);

//     if (docSnap.exists()) {
//       setSheetUrl(docSnap.data().sheetUrl);
//     } else {
//       setSheetUrl(null);
//     }
//   };

//   const handleLogout = async () => {
//     await signOut(auth);
//     router.push("/");
//   };

//   return (
//     <div className="min-h-screen flex bg-[#1b1b1b] p-6">
//       {/* Sidebar */}
//       <aside className="w-72 bg-purple-600 text-white p-6 rounded-3xl shadow-lg flex flex-col items-center">
//         <h1 className="text-2xl font-bold mb-6">Brahmaputra Gurukul</h1>
//         <nav className="flex flex-col w-full gap-4">
//           <button 
//             onClick={() => setShowReports(false)} 
//             className={`${!showReports ? 'bg-green-500' : 'hover:bg-purple-500'} p-3 rounded-xl text-center`}
//           >
//             Dashboard
//           </button>
//           <button 
//             onClick={() => setShowReports(true)} 
//             className={`${showReports ? 'bg-green-500' : 'hover:bg-purple-500'} p-3 rounded-xl text-center`}
//           >
//             Daily Reports
//           </button>
//         </nav>
//         <button onClick={handleLogout} className="mt-auto bg-red-500 hover:bg-red-600 p-3 rounded-xl w-full text-white">
//           Logout
//         </button>
//       </aside>

//       {/* Main Content */}
//       <main className="flex-1 p-10 rounded-3xl bg-[#494949] shadow-lg ml-6">
//         {showReports ? (
//           sheetUrl ? (
//             <iframe src={sheetUrl} className="w-full h-screen rounded-3xl"></iframe>
//           ) : (
//             <p className="text-white text-center">No report available.</p>
//           )
//         ) : (
//           <>
//             <h1 className="text-3xl font-bold text-white mb-6">Hi {user?.email}!</h1>
//             <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
//               <div className="bg-blue-400 text-white p-6 rounded-xl shadow-lg text-center">
//                 <h2 className="text-xl font-bold">Rhyme of the Day</h2>
//                 <iframe
//                   className="w-full h-40 rounded-lg"
//                   src="https://www.youtube.com/embed/6_ZKv8Y3P1A"
//                   title="Nursery Rhymes"
//                   allowFullScreen
//                 ></iframe>
//               </div>
//               <div className="bg-pink-400 text-white p-6 rounded-xl shadow-lg text-center">
//                 <h2 className="text-xl font-bold">Teacher&apos;s Comment</h2>
//                 <p className="mt-2">&quot;Great job today! Keep up the good work.&quot;</p>
//               </div>
//             </div>
//           </>
//         )}
//       </main>
//     </div>
//   );
// }
"use client";

import { useEffect, useState } from "react";
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

  return (
    <div className="min-h-screen flex flex-col md:flex-row bg-[#1b1b1b] p-4 md:p-6">
      {/* Sidebar / Topbar for Mobile */}
      <aside className="md:w-72 bg-purple-600 text-white p-6 rounded-3xl shadow-lg flex md:flex-col items-center md:items-start w-full md:w-auto mb-4 md:mb-0">
        <h1 className="text-2xl font-bold mb-6 hidden md:block">Brahmaputra Gurukul</h1>
        <nav className="flex flex-row md:flex-col w-full gap-2 md:gap-4">
          <button 
            onClick={() => setShowReports(false)} 
            className={`${!showReports ? 'bg-green-500' : 'hover:bg-purple-500'} p-3 rounded-xl text-center w-full`}
          >
            Dashboard
          </button>
          <button 
            onClick={() => setShowReports(true)} 
            className={`${showReports ? 'bg-green-500' : 'hover:bg-purple-500'} p-3 rounded-xl text-center w-full`}
          >
            Daily Reports
          </button>
        </nav>
        <button onClick={handleLogout} className="mt-auto bg-red-500 hover:bg-red-600 p-3 rounded-xl w-full text-white md:mt-6">
          Logout
        </button>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-4 md:p-10 rounded-3xl bg-[#494949] shadow-lg">
        {showReports ? (
          sheetUrl ? (
            <iframe src={sheetUrl} className="w-full h-96 md:h-screen rounded-3xl"></iframe>
          ) : (
            <p className="text-white text-center">No report available.</p>
          )
        ) : (
          <>
            <h1 className="text-2xl md:text-3xl font-bold text-white mb-4 md:mb-6">Hi {user?.email}!</h1>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
              <div className="bg-blue-400 text-white p-4 md:p-6 rounded-xl shadow-lg text-center">
                <h2 className="text-lg md:text-xl font-bold">Rhyme of the Day</h2>
                <iframe
                  className="w-full h-32 md:h-40 rounded-lg"
                  src="https://www.youtube.com/embed/6_ZKv8Y3P1A"
                  title="Nursery Rhymes"
                  allowFullScreen
                ></iframe>
              </div>
              <div className="bg-pink-400 text-white p-4 md:p-6 rounded-xl shadow-lg text-center">
                <h2 className="text-lg md:text-xl font-bold">Teacher&apos;s Comment</h2>
                <p className="mt-2">&quot;Great job today! Keep up the good work.&quot;</p>
              </div>
            </div>
          </>
        )}
      </main>
    </div>
  );
}
