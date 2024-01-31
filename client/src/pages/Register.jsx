import React, { useState } from 'react'
import register from "../assets/register.png"


const Register = () => {

/* HOOK
*---------------------------------------------Hook Logic for state collection-----------------------------------------------------------------*
*---------------------------------------------------------------------------------------------------------------------------------------------*
*/
const[user,setUser] = useState({
  // passing all these states as a single object
    username: "",
    email: "",
    phone: "",
    password: "",
});



/* FUNCTION
*-----------------------------------------------Handling the input values-------------------------------------------------------------------*
>>Username,password,email,phone etc values are handled here 
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
  alert(user);
}



  return (
   <>
    <main>
      <div className="section-registration">
        <div className="container grid grid-two-cols">
          <div className="registeration-image">
            <img src={register} alt="registration process" width="500" height="500" />
          </div>

          {/* Registeration Form */}
          <div className="registration-form">
            <h1 className='main-heading mb-3'>Registration</h1>
            <br />


            <form onSubmit={handleSubmit}>
              {/* username*/}
              <div>
                <label htmlFor="username">username</label>
                <input 
                type="text" 
                name="username"  
                placeholder="username"
                id="username"
                required
                autoComplete='off'
                value={user.username}
                onChange={handleInput}
                />
              </div>
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
              {/* phone */}
              <div>
                <label htmlFor="phone">phone</label>
                <input 
                type="number" 
                name="phone"  
                placeholder="phone"
                id="phone"
                required
                autoComplete="off"
                value={user.phone}
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
              <button type='submit' className='btn btn-submit'>Register Now</button>
            </form>
          </div>
        </div>
      </div>
    </main>
   </>
  )
}

export default Register