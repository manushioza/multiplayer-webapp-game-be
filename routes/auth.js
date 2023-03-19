const express = require("express");
const router = express.Router();
const { db, where, query, collection, getDocs } = require("../firebase");
const { getUsers, addUsers, login } = require("../services/users.service");

router.get("/", async (req,res) => {
  const users = await getUsers(db)
  console.log("---", users)
  
  res.status(200).send({
      status: "Success",
      message: `Successfully retrieved users ${JSON.stringify(users)}`
  });
  })
     
router.post("/login", async function (req, res) {
  const loginData = {
    email: req.body.email,
    password: req.body.password,
  };
  
  try {
    await login(db, loginData);
    res.status(200).send();
    console.log("Login successful")
  } catch (error) {
    console.log(error);
    res.status(404).send({
      status: "Error",
      message: `Error Logging in: ${error}`,
    });
  }
  });


//Register
router.post("/register", async function (req, res) {
  const userData = {
    email: req.body.email,
    username: req.body.username,
    password: req.body.password
  };

  try {
    console.log("Attempting to add User to DB.....");
    await addUsers(db, userData);
    res.status(200).send({
      status: "Success",
      message: "Successfully added new User",
    }); 
  } catch (error) {
    console.log(error);
    res.status(400).send({
      status: "Failed",
      message: `Failed to add User. ${error}`,
    });
  }
});
  
  module.exports = router;