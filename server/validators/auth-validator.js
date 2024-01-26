const { z } = require("zod")

// Creating an object schema

/*
*--------------------------------Signup Validaion--------
>>selecting the username and then putting the required error functionality and chaining it with multiple functions to provide the perfect vaalidition for the data before entry. 
*/
const signupSchema = z.object({
    username: z
    .string({required_error:"Name is required"})
    .trim()
    .min(3,{message:"Name must be atleast of 3 charachters"}),

    email: z
    .string({required_error:"Email is required"})
    .trim()
    .email({message:"Invalid email address"})
    .min(3,{message:"Email must be atleast of 3 charachters"})
    .max(255,{message:"Email must not be more than 255 characters"}),

    phone: z
    .string({required_error:"Phone number is required"})
    .trim()
    .min(10,{message:"Phone must be atleast of 10 characters"})
    .max(20,{message:"Phone must not be more than 20 characters"}),

    password: z
    .string({required_error:"Password is required"})
    .min(7,{message:"Password must be of atleast of 6 characters"})
    .max(1024,"password can't be greater than 1024 characters"),
})


module.exports = signupSchema;