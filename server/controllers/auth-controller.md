# Auth Controller Working
## 1. Register Functionality 
- Go to Postman

- Header--> key : { Content-Type } , vale : {application/json
}
- Body --> select raw , select json and enter:
```json
{
    "username": "Uttkarsh",
    "email": "uttkarsh_test1@gmail.com"
}
```

### Function:
```javascript
const register = async (req, res) => {
    try 
    {
        console.log(req.body)
        res.status(200).send("Welcome to the Registeration Page using controllers")
    } catch (error) 
    {
        res.status(400).send({ msg: req.body })
    }
}
```