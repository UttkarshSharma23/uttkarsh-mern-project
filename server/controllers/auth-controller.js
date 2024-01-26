// All the important imports for the functionality present here.
const User = require("../models/user-model")
// to protect the password with proper hashed content
const bcrypt = require("bcryptjs");
// const { use } = require("../router/auth-router");



/* 
*-----------------------------------Home--------------------------------------------------------------------------------------------------------*
*Home Logic:
    1. Sending the status to the port 
    2. If any error than catching it in catch block
    3. The status code 200 is used in Node.js to indicate that a request was successful.

*-----------------------------------------------------------------------------------------------------------------------------------------------*
*/
const home = async (req, res) => {
    try {
        res
            .status(200)
            .send("Welcome  uttkarsh to this auth-controller")
    } catch (error) {
        console.log(error);
    }
}


/*
 *--------------------------------Register--------------------------------------------------------------------------------------------------------*
*Registeration Logic:
 1. Get Registeration Data : Retrieve user data(username,email,phone,password)
 2. Check Email Existence : check if the email is already registered.
 3. Hash password: Securely hash the password.
 4. Create User: Create a new user with hashed password.
 5. Save to DB: Save the user to the database.
 6. Respond: Respond with "Registeration Successful" or handle error
 *------------------------------------------------------------------------------------------------------------------------------------------------*
 */
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


/*
*------------------------------------Login--------------------------------------------------------------------------------------------------------*
*Login Logic:
    1. Taking the user data from the userSchema defined in user-model.js
    2.checking if the user is presnet or not
    3. The HTTP 201 Created success status response code indicates that the request has succeeded and has led to the creation of a resource.
    4.badRequest() This method is used to send a 400 ("Bad Request") response back down to the client, indicating that the request is invalid
*-------------------------------------------------------------------------------------------------------------------------------------------------*
*/
const login = async (req, res) => {
    try {
        //reading the data first
       const {email,password} = req.body;

    //  checking if the user Exist
    const userExist = await  User.findOne({email});
       
       if(!userExist){
        return res.status(400).json({message:"Invalid Credentails"})
       }
    // Password comparing with the registered user
        //creating a function to compare this: const user = await bcrypt.compare(password,userExist.password);

        const user = await userExist.comparePassword(password)

        if(user){
            res.status(200).json({
                msg:"Login Successful",
                token: await userExist.generateToken(),
                userId: userExist._id.toString(),
            })
        }
        else{
            res.status(401).json({message:"Invalid email or password"})
        }


    } catch (error) {
        res.status(500).json("internal server error");
    }
}




/*
*--------------------------------------Module Exports---------------------------------------------------------------------------------------------*
Exporting all the logical functionalities with the help of module.exports:
1.Home -> /
2.Register -> /register
3.Login -> /login
*-------------------------------------------------------------------------------------------------------------------------------------------------*
*/
module.exports = { home ,register,login}