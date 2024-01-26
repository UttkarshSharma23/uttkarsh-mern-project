const express   = require("express");
const router = express.Router();

//Alternative way written below: const {home,register}  = require("../controllers/auth-controller")
const authcontrollers = require("../controllers/auth-controller")

// signup zod schema
const signupSchema = require("../validators/auth-validator")
// validation middleware called
const validate = required("../middlewares/valide-middleware")

// Home Route : (Read Data)
router.route("/").get(authcontrollers.home);


// Register Route : post method -->adds data to database (Insert data) and validating it.
router.route("/register").post(validate(signupSchema), authcontrollers.register)


// 
router.route("/login").post(authcontrollers.login)

module.exports = router;