const { db, collection, getDocs } = require("../firebase");

const getPlayers = async (db) =>  {
  const playersCol = collection(db, 'player');
  const playersSnapshot = await getDocs(playersCol);
  const playersList = playersSnapshot.docs.map(doc => doc.data());
  return playersList;
}

exports.getPlayers = getPlayers