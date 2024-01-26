

/*
*----------------------------------------------------------Middleware for zod---------------------------------------------------------------------*
>>Asynchronous methods: awaait schema.parseAsync(req.body) is the line where the zod will validate the request body data against the defined schema.

>>Synchronous methods: .parse(data:unknown)  

the function will check the data which is passed by the user is eqaul to the schema defined or not
*-------------------------------------------------------------------------------------------------------------------------------------------------*
*/

const validate = (schema) => async(req,res,next) =>{
    try{
        const parseBody = await schema.parseAsync(req.body);
        req.body = parseBody;
        next();
    }
    catch(err){
        const message = err.errors[0].message
        // console.log(message);
        res.status(400).json({msg:message})
    }
}

module.exports = validate;