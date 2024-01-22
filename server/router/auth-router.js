const express   = require("express");
const router = express.Router();

//Alternative way written below: const {home,register}  = require("../controllers/auth-controller")
const authcontrollers = require("../controllers/auth-controller")


// Home Route : (Read Data)
router.route("/").get(authcontrollers.home);


// Register Route : post method -->adds data to database (Insert data)
router.route("/register").post(authcontrollers.register)


// 
router.route("/login").post(authcontrollers.login)

module.exports = router;