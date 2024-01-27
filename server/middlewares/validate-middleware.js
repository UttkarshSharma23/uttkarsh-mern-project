

/*
*----------------------------------------------------------Middleware for zod---------------------------------------------------------------------*
>>Asynchronous methods: awaait schema.parseAsync(req.body) is the line where the zod will validate the request body data against the defined schema.

>>Synchronous methods: .parse(data:unknown)  

the function will check the data which is passed by the user is eqaul to the schema defined or not

>>Middleware error handling added so that we do not need to define error everytime manually.
*-------------------------------------------------------------------------------------------------------------------------------------------------*
*/

const validate = (schema) => async(req,res,next) =>{
    try{
        const parseBody = await schema.parseAsync(req.body);
        req.body = parseBody;
        next();
    }

    catch(err)
    {
        const status =422;
        const message = "Fill the input properly"
        const extraDetails= err.errors[0].message

        const error = 
        {
            status,
            message,
            extraDetails,
        }
        // console.log(message);
// this is managed by error-middleware file : res.status(400).json({msg:message})
        next(error);
    }
}

module.exports = validate;