
const express = require("express");
const router = express.Router();
const { db } = require("../firebase");
const { getUsers } = require("../services/users.service");


router.get("/", async (req,res) => {
  const users = await getUsers(db)
  console.log("---", users)
  
  res.status(200).send({
      status: "Success",
      message: `Successfully retrieved players ${JSON.stringify(users)}`
  });
  
  })

router.post("/login", async function (req, res) {
 const login_info = {
   username: req.body.username,
   password: req.body.password,
 };
 var user = [];

  try {
    console.log("Attempting login....")
    const usersRef = db.collection("users");
    const snapshot = await usersRef.where("password", "==", login_info.password).get();
    if (!snapshot.empty) {
      snapshot.forEach((doc) => {
        var data = doc.data();
        data["id"] = doc.id;
          user.push(data);
        });
      
      
      res.status(200).send(user);
      console.log("Login successful")
    }
    else{
      res.status(200).send(user);
      console.log("Login Failed")
    }
  } catch (err) {
    console.log(err);
    res.status(404).send({
      status: "Error",
      message: `Error Logging in: ${err}`,
    });
  }
});


// //Register
// router.post("/Register", async function (req, res) {
 
//   const user_info = {
//     email: req.body.email,
//     username: req.body.username,
//     password: req.body.password,
//     userId: req.body.userId,
//   };

//   try {
//     console.log("Attempting to add User to DB.....");
//     await db
//       .collection("users")
//       .add(user_info)
//       .then(() => {
//         console.log("Created new User record in firestore");
//         // See the UserRecord reference doc for the contents of userRecord.
//         res.status(200).send({
//           status: "Success",
//           message: "Successfully added new User",
//         });
//       });
//   } catch (err) {
//     console.log(err);
//     res.status(400).send({
//       status: "Failed",
//       message: "Failed to add User.",
//     });
//   }
// });

module.exports = router;
