// import admin from "firebase-admin";

// // Parse the JSON string from the environment variable
// const serviceAccount = JSON.parse(process.env.FIREBASE_ADMIN_SDK || "{}");

// if (!admin.apps.length) {
//   admin.initializeApp({
//     credential: admin.credential.cert({
//       projectId: serviceAccount.project_id, // ✅ Corrected to camelCase
//       privateKey: serviceAccount.private_key.replace(/\\n/g, "\n"), // ✅ Fixes newline issue
//       clientEmail: serviceAccount.client_email,
//     } as admin.ServiceAccount), // ✅ Type assertion to avoid TypeScript errors
//   });
// }

// export const adminDB = admin.firestore();

import admin from "firebase-admin";

const serviceAccount = process.env.FIREBASE_ADMIN_SDK ? JSON.parse(process.env.FIREBASE_ADMIN_SDK) : null;

if (!serviceAccount || !serviceAccount.private_key) {
  throw new Error("FIREBASE_ADMIN_SDK is missing or incorrectly formatted.");
}

if (!admin.apps.length) {
  admin.initializeApp({
    credential: admin.credential.cert({
      projectId: serviceAccount.project_id,
      privateKey: serviceAccount.private_key.replace(/\\n/g, "\n"), // Fix new lines
      clientEmail: serviceAccount.client_email,
    }),
  });
}

export const adminDB = admin.firestore();
