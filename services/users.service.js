
const { db, collection, getDoc, getDocs, setDoc, doc, query, where } = require("../firebase");


const getUsers = async (db) =>  {
 const usersCol = collection(db, 'users');
 const usersSnapshot = await getDocs(usersCol);
 const usersList = usersSnapshot.docs.map(doc => doc.data());
 return usersList;
}

const addUsers = async (db, userData) => {
  console.log("Attempting to add User to DB.....");
  //check if user email already exists
  const userDoc = doc(db, 'users', userData.email)
  const user = await getDoc(userDoc);
  if(user.exists()) {
    throw new Error('User already exists')
  }
  await setDoc(doc(db, 'users', userData.email), userData)
  console.log("Created new User record in firestore");
}

const login = async (db, loginData) => {
  console.log("Attempting login....")
  const usersRef = collection(db, 'users')
  const passwordCheckQuery = query(usersRef, where("password", "==", loginData.password));
  const snapshot = await getDocs(passwordCheckQuery)

  console.log("---snap", snapshot.size)
  if (!snapshot.empty && snapshot.size === 1) { return; }
  
  throw new Error('Unable to fetch user')
}

exports.getUsers = getUsers
exports.addUsers = addUsers
exports.login = login