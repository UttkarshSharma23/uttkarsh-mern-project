
/*
// if someone visits the homePage first time so default root page and the function
app.get("/",(req,res)=>{
    // status code 200 that response is successful
    res.status(200).send("Welcome to Uttkarsh's MERN project");
})
// if user want to register on the website
app.get("/register",(req,res)=>{
    res.status(200).send("Welcome to registeration page")
})
*express.Router
* https://expressjs.com/en/guide/routing.html
*/

//This allows dotenv files to be used and imported in the server
require("dotenv").config();

const express  = require("express");

// passing express to app
const app = express();
const router = require("./router/auth-router")

// connection of DB
const connectDb = require("./utils/db")

// MiddleWare: Application using json, important to place before any routes
app.use(express.json());

// Mount the Router : To use the router in your main Express app we can mount it at specific URL prefix
app.use("/api/auth",router);

// listen method to pass the port
const PORT = 5000;

//returning DB function as a promise as it is coming from async function
connectDb().then(()=>{    
    app.listen(PORT, ()=>{
        console.log(`server is running at the port: ${PORT}`)
    }); 
});

