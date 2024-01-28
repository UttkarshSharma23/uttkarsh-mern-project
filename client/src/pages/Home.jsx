import React from 'react'
import profile from "../assets/home.png"
const Home = () => {
  return (
    <>
      <section className='section-hero'>
        {/*  Grid Div */}
        <div className="container grid grid-two-cols">
          {/* Content div */}
          <div className="hero-content">
            <p>This is my first full-stack project</p>
            <h1>Welcome to Uttkarsh Sharma's Full Stack Project using MERN</h1>
            <p>
              My goal is develop awesome applications using the latest technology. I tend to enjoy doing development , so this project is based on the all the knowldege that I am having at the current time.
            </p>
            {/* button div */}
            <div className="btn btn-group">
              <a href="/contact">
                <button className='btn'>connect now</button>
              </a>
              <a href="/services">
                <button className='btn'>learn more</button>
              </a>
            </div>
{/* button div ends here*/}
          </div>
{/* Content div ends here*/}
            {/* Hero images div*/}
            <div className="hero-image">
              <img src={profile} alt="no image availabe" height="500" width="400" />
            </div>
 {/* Hero images div ends here*/}            
        </div>
{/* Grid div ends here */}
      </section>
    </>
  )
}

export default Home