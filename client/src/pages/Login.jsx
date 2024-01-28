import React, { useState } from 'react'
import register from "../assets/register.png"



const Login = () => {

/* HOOK
*---------------------------------------------Hook Logic for state collection-----------------------------------------------------------------*
*---------------------------------------------------------------------------------------------------------------------------------------------*
*/
const[user,setUser] = useState({
  // passing all these states as a single object
    email: "",
    password: "",
});

/* FUNCTION
*-----------------------------------------------Handling the input values-------------------------------------------------------------------*
>>Email,password etc values are handled here 
>>state is changed and stored in this function
*-------------------------------------------------------------------------------------------------------------------------------------------*
*/
const handleInput = (e)=>{
  // console.log(e)
  let name = e.target.name;
  let value =e.target.value;

  setUser({
    ...user,
    // Dynamic data with [] brackets , i.e it could be phone , username, email  which is dynamic
    [name]:value,
  })
}
/* FUNCTION
*------------------------------------------Handling the form after submission--------------------------------------------------------------------*
>>preventDefault :  Clicking on a "Submit" button, prevent it from submitting a form.
*------------------------------------------------------------------------------------------------------------------------------------------------*
*/
const handleSubmit = (e)=> {
  e.preventDefault();
  console.log(user);
}


  return (
    <>
    <main>
      <div className="section-registeration">
        <div className="container grid grid-two-cols">
          <div className="registeration-image">
            <img src={register} alt="registeration process" width="500" height="500" />
          </div>

          {/* Registeration Form */}
          <div className="registeration-form">
            <h1 className='main-heading mb-3'>Login</h1>
            <br />


            <form onSubmit={handleSubmit}>
              {/* email */}
              <div>
                <label htmlFor="email">email</label>
                <input 
                type="text" 
                name="email"  
                placeholder="enter your email"
                id="email"
                required
                autoComplete='off'
                value={user.email}
                onChange={handleInput}
                />
              </div>
              {/* password */}
              <div>
                <label htmlFor="password">password</label>
                <input 
                type="text" 
                name="password"  
                placeholder="password"
                id="password"
                required
                autoComplete='off'
                value={user.password}
                onChange={handleInput}
                />
              </div>
              <br />
              <button type='submit' className='btn btn-submit'>Login Now</button>
            </form>
          </div>
        </div>
      </div>
    </main>
    </>
  )
}

export default Login