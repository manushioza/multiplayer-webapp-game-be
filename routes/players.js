const express = require("express");
const router = express.Router();
const { db, collection, getDocs } = require("../firebase");
const { getPlayers } = require("../services/players.service");

router.get("/", async (req,res) => {
const players = await getPlayers(db)
console.log("---", players)

res.status(200).send({
    status: "Success",
    message: `Successfully retrieved players ${JSON.stringify(players)}`
});

})

module.exports = router;