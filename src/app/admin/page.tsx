"use client";
import { useEffect, useState } from "react";
import { db } from "../lib/firebaseConfig";
import { collection, getDocs } from "firebase/firestore";

export default function AdminPage() {
  const [tickerMessages, setTickerMessages] = useState<{ id: string; text: string }[]>([]);
  const [news, setNews] = useState<{ id: string; text: string; link: string }[]>([]);
  const [newTicker, setNewTicker] = useState("");
  const [newNewsText, setNewNewsText] = useState("");
  const [newNewsLink, setNewNewsLink] = useState("");

  // Fetch ticker messages & news from Firestore
  useEffect(() => {
    const fetchNotifications = async () => {
      const tickerSnapshot = await getDocs(collection(db, "notifications"));
      const newsSnapshot = await getDocs(collection(db, "news"));

      setTickerMessages(tickerSnapshot.docs.map(doc => ({ id: doc.id, text: doc.data().text })));
      setNews(newsSnapshot.docs.map(doc => ({ id: doc.id, text: doc.data().text, link: doc.data().link })));
    };

    fetchNotifications();
  }, []);

  const addTicker = async () => {
    if (!newTicker.trim()) return;
    const response = await fetch("/api/admin", {
      method: "POST",
      body: JSON.stringify({ type: "addTicker", text: newTicker }),
      headers: { "Content-Type": "application/json" },
    });
    const data = await response.json();
    if (data.id) setTickerMessages([...tickerMessages, { id: data.id, text: newTicker }]);
    setNewTicker("");
  };
  
  const deleteTicker = async (id: string) => {
    await fetch("/api/admin", {
      method: "POST",
      body: JSON.stringify({ type: "deleteTicker", id }),
      headers: { "Content-Type": "application/json" },
    });
    setTickerMessages(tickerMessages.filter((msg) => msg.id !== id));
  };
  
  const clearAllTickers = async () => {
    await fetch("/api/admin", {
      method: "POST",
      body: JSON.stringify({ type: "clearAllTickers" }),
      headers: { "Content-Type": "application/json" },
    });
    setTickerMessages([]);
  };
  
  const addNews = async () => {
    if (!newNewsText.trim() || !newNewsLink.trim()) return;
    const response = await fetch("/api/admin", {
      method: "POST",
      body: JSON.stringify({ type: "addNews", text: newNewsText, link: newNewsLink }),
      headers: { "Content-Type": "application/json" },
    });
    const data = await response.json();
    if (data.id) setNews([...news, { id: data.id, text: newNewsText, link: newNewsLink }]);
    setNewNewsText("");
    setNewNewsLink("");
  };
  
  const deleteNews = async (id: string) => {
    await fetch("/api/admin", {
      method: "POST",
      body: JSON.stringify({ type: "deleteNews", id }),
      headers: { "Content-Type": "application/json" },
    });
    setNews(news.filter((item) => item.id !== id));
  };
  
  const clearAllNews = async () => {
    await fetch("/api/admin", {
      method: "POST",
      body: JSON.stringify({ type: "clearAllNews" }),
      headers: { "Content-Type": "application/json" },
    });
    setNews([]);
  };
  

  return (
    <div className="max-w-4xl mx-auto p-6">
      <h2 className="text-2xl font-bold mb-4">Admin Panel</h2>

      {/* Ticker Messages Section */}
      <div className="mb-6">
        <h3 className="text-xl font-bold">Update Ticker Messages</h3>
        <input
          value={newTicker}
          onChange={(e) => setNewTicker(e.target.value)}
          placeholder="Enter a ticker message"
          className="border p-2 w-full mb-2"
        />
        <button onClick={addTicker} className="bg-blue-500 text-white p-2 w-full mb-2">Add Ticker Message</button>
        <button onClick={clearAllTickers} className="bg-red-500 text-white p-2 w-full">Clear All Ticker Messages</button>

        <ul className="mt-4">
          {tickerMessages.map((message) => (
            <li key={message.id} className="border-b p-2 flex justify-between">
              {message.text}
              <button onClick={() => deleteTicker(message.id)} className="text-red-500">Delete</button>
            </li>
          ))}
        </ul>
      </div>

      {/* News Section */}
      <div className="mb-6">
        <h3 className="text-xl font-bold">Update News</h3>
        <input
          value={newNewsText}
          onChange={(e) => setNewNewsText(e.target.value)}
          placeholder="News Title"
          className="border p-2 w-full mb-2"
        />
        <input
          value={newNewsLink}
          onChange={(e) => setNewNewsLink(e.target.value)}
          placeholder="News Link"
          className="border p-2 w-full mb-2"
        />
        <button onClick={addNews} className="bg-green-500 text-white p-2 w-full mb-2">Add News</button>
        <button onClick={clearAllNews} className="bg-red-500 text-white p-2 w-full">Clear All News</button>

        <ul className="mt-4">
          {news.map((item) => (
            <li key={item.id} className="border-b p-2 flex justify-between">
              <a href={item.link} className="text-blue-600 hover:underline">{item.text}</a>
              <button onClick={() => deleteNews(item.id)} className="text-red-500">Delete</button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
