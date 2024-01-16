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
// *--------------------
const register = async (req, res) => {
    try {
        console.log(req.body)
        res.status(200).json({message: req.body})
    } catch (error) 
    {  
        res.status(500).json("interanl server error")
    }
}
module.exports = { home ,register}