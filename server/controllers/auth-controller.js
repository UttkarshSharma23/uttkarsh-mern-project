const User = require("../models/user-model")
// to protect the password with proper hashed content
const bcrypt = require("bcryptjs")
// *-------------------
//  Login Logic
// *--------------------
const home = async (req, res) => {
    try {
        res
            .status(200)
            .send("Welcome  uttkarsh to this auth-controller")
    } catch (error) {
        console.log(error);
    }
}
// *-------------------
//  Registeration Logic

//  1. Get Registeration Data : Retrieve user data(username,email,phone,password)
// 2. Check Email Existence : check if the email is already registered.
// 3. Hash password: Securely hash the password.
// 4. Create User: Create a new user with hashed password.
// 5. Save to DB: Save the user to the database.
// 6. Respond: Respond with "Registeration Successful" or handle error
// *--------------------
const register = async (req, res) => {
    try {
        // console.log(req.body)
        const {username,email,phone,password} = req.body;

// 1 point: finding the exisisting user
        const userExist = await User.findOne({email})
        if(userExist)
        {
            return res.status(400).json({msg:"Email already Exists"})
        }

// Hashing the password (more the salt value , more the complex and time consuming password will be)
        // const saltRound =10;
        // const hash_password = await bcrypt.hash(password,saltRound)
        
// when the user does not exists
     const userCreated = await User.create({
        username,
        email,
        phone,
        password
    });
// JWT Token function passed and used in user-model.
        res.status(201).json({
            msg: "registeration Successful",
            token: await userCreated.generateToken(),
/*In most cases, converting _id to a string is a good practice as it ensures consistency and compatibility across the different JWT libraries and systems. It also aligns with the expectation of that claims in a JWT are represented as Strings.*/
            userId: userCreated._id.toString(),
        })
    } catch (error) 
    {  
        res.status(500).json("interanl server error")
    }
}
module.exports = { home ,register}