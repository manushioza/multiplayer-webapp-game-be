const { db,doc, collection, addDoc } = require("../firebase");

const addSession = async (sessionData) => {
const dbRef = collection(db, "session");
  console.log("Attempting to create new session");
  const docRef = await  addDoc(dbRef, sessionData);
  console.log("Created new Session record in firestore");
  return docRef.id
};

module.exports = { addSession };
