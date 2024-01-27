require("dotenv").config();
// dotenv acts as middlesware which allows this file to be used throughout this Project.
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

const express = require("express")
const app = express();
const router = require("./router/auth-router")
const connectDb = require("./utils/db");
const errorMiddleware = require("./middlewares/error-middleware");


// MiddleWare: Application using json, important to place before any routes
app.use(express.json());
// Mount the Router : To use the router in your main Express app we can mount it at specific URL prefix
app.use("/api/auth", router)

// error middleware needs to be added to handle all the errors by using a single file.
app.use(errorMiddleware);

app.get("/" , (req, res)=>
{
    res.status(200).send("welcome Uttkarsh")
})

// This lives up the server
const PORT = 5000;
/*
app.listen(PORT,() =>{
    console.log(`server is running at port: ${PORT}`)
})
*/

// Backend connected with databse.
connectDb().then(()=>{
    app.listen(PORT, ()=>{
        console.log(`Server is running at port: ${PORT}`)
    })
}) 