const mongoose = require("mongoose");
const bcrypt = require("bcryptjs")
const jwt = require("jsonwebtoken")
const userSchema = new mongoose.Schema({
    username: {
        type: String,
        require: true,
    },
    email: {
        type: String,
        require: true,
    },
    phone: {
        type: String,
        require: true,
    },
    password: {
        type: String,
        require: true,
    },
    isAdmin: {
        type: Boolean,
        default: false,
    },
})

// secure the password with the bcrypt
userSchema.pre('save', async function () {
    // console.log("pre method",this)
    const user = this;
    if (!user.isModified("password")) {
        next();
    }

    try {
        const saltRound = await bcrypt.genSalt(10);
        const hash_password = await bcrypt.hash(user.password, saltRound);
        user.password = hash_password;

    } catch (error) {
        next(error)
    }
})
//Compare password , instance function
userSchema.methods.comparePassword = async function(password){
    return await bcrypt.compare(password,this.password);
}

/*
JSON web Token
with the help of methods keyword we can create as many functions as we want.
*/
userSchema.methods.generateToken = async function () {
    try{
        return jwt.sign({
            // payload is user identity ID
            userId : this._id.toString(),
            email: this.email,
            isAdmin : this.isAdmin,
        },
        // Signature
        process.env.JWT_SECRET_KEY,
        //Optional Expiry time of the token
        {
            expiresIn:"30d"
        }
        )
    }
    catch(error){
        console.error(error);
    }
};


// Define the model or collection name
const User = new mongoose.model("User", userSchema)
module.exports = User