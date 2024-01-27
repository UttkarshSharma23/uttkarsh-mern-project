const mongoose = require("mongoose");
// const { Schema, model} = require('mongoose');

const contactSchema = new mongoose.Schema({
    username: {
        type: String,
        require: true,
    },
    email: {
        type: String,
        require: true,
    },
    message: {
        type: String,
        require: true,
    },
})

// create a model or collection 
const Contact = new mongoose.model("Contact",contactSchema);
module.exports = Contact;

