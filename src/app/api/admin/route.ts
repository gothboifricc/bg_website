import { NextRequest, NextResponse } from "next/server";
import { adminDB } from "@/app/lib/firebaseAdmin";

export async function POST(req: NextRequest) {
  try {
    const { type, text, link, id } = await req.json();

    // ✅ Add a new ticker message
    if (type === "addTicker") {
      const docRef = await adminDB.collection("notifications").add({ text });
      return NextResponse.json({ id: docRef.id });
    }

    // ✅ Delete a specific ticker message
    if (type === "deleteTicker") {
      await adminDB.collection("notifications").doc(id).delete();
      return NextResponse.json({ success: true });
    }

    // ✅ Clear all ticker messages
    if (type === "clearAllTickers") {
      const snapshot = await adminDB.collection("notifications").get();
      const batch = adminDB.batch();
      snapshot.forEach((doc) => batch.delete(doc.ref));
      await batch.commit();
      return NextResponse.json({ success: true });
    }

    // ✅ Add a new news item
    if (type === "addNews") {
      const docRef = await adminDB.collection("news").add({ text, link });
      return NextResponse.json({ id: docRef.id });
    }

    // ✅ Delete a specific news item
    if (type === "deleteNews") {
      await adminDB.collection("news").doc(id).delete();
      return NextResponse.json({ success: true });
    }

    // ✅ Clear all news items
    if (type === "clearAllNews") {
      const snapshot = await adminDB.collection("news").get();
      const batch = adminDB.batch();
      snapshot.forEach((doc) => batch.delete(doc.ref));
      await batch.commit();
      return NextResponse.json({ success: true });
    }

    return NextResponse.json({ error: "Invalid request type" }, { status: 400 });
  } catch (error) {
    return NextResponse.json({ error: "Internal Server Error", details: error }, { status: 500 });
  }
}
