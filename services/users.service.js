const { db, collection, getDocs } = require("../firebase");

const getUsers = async (db) =>  {
  const usersCol = collection(db, 'users');
  const usersSnapshot = await getDocs(usersCol);
  const usersList = usersSnapshot.docs.map(doc => doc.data());
  return usersList;
}

exports.getUsers = getUsers