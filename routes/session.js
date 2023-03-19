const express = require("express");
const router = express.Router();

const { addSession } = require("../services/session.service");

router.post("/add", async (req,res) => {
    const sessionData = {
        user1: req.body.username,
        user2: "",
        active: true
      };
    
      try {
        console.log("Attempting to create a new session...");
        const docID = await addSession(sessionData);
        res.status(200).send({docID}); 
      } catch (error) {
        console.log(error);
        res.status(400).send({
          status: "Failed",
          message: `Failed to create new session. ${error}`,
        });
      }
    });


module.exports = router;