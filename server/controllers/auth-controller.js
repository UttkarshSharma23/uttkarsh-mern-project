// *-------------------
//  Login Logic
// *--------------------
const home = async (req,res) =>
{
        try
        {
            res
            .status(200)
            .send("Welcome  uttkarsh")
        }catch(error)
        {
            console.log(error);
        }
}
// *-------------------
//  Registeration Logic
// *--------------------
const register  = (req,res) =>{

}

module.exports = {home}