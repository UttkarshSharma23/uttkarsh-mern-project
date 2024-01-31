import React from 'react'
import profile from "../assets/home.png"
import connect from "../assets/connect.png"
import { FaCheckCircle } from "react-icons/fa";
import { FaHeadSideVirus } from "react-icons/fa6";
import { BsDatabaseFillCheck } from "react-icons/bs";
import Analytics from '../components/Analytics';
const Home = () => {
  return (
    <>
    {/* 1st section begins */}
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
                <button className=' btn'>connect now</button>
              </a>
              <a href="/services">
                <button className='btn secondary-btn'>learn more</button>
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
{/* 1st section ends here */}

      {/* 2nd section begins */}
      <Analytics/>
{/* 2nd section ends here */}


      {/* 3rd section begins here */}
      <section className='section-hero'>
              {/*  Grid Div */}
              <div className="container grid grid-two-cols">
                {/* Content div ends here*/}
                  {/* Hero images div*/}
                  <div className="hero-image">
                    <img src={connect} alt="no image availabe" height="500" width="400" />
                  </div>
      {/* Hero images div ends here*/}  
                {/* Content div */}
                <div className="hero-content">
                  <p>Contact me related these technologies</p>
                  <h1>My Tech Stack</h1>
                  <h3>Frontend <FaHeadSideVirus color='#646CFF'  style={{margin:'2rem 1rem 3rem 1rem', verticalAlign:'middle'}} /></h3>
                  <ul className='icons-grid'>
                    <li><FaCheckCircle color='#646CFF'  style={{margin:'0 1rem 0rem 0rem', verticalAlign:'middle'}}/>JavaScript</li>
                    <li ><FaCheckCircle color='#646CFF'  style={{margin:'0 1rem 0rem 0rem', verticalAlign:'middle'}}/>React</li>
                    <li><FaCheckCircle color='#646CFF'  style={{margin:'0 1rem 0rem 0rem', verticalAlign:'middle'}}/>Java</li>
                    <li><FaCheckCircle color='#646CFF'  style={{margin:'0 1rem 0rem 0rem', verticalAlign:'middle'}}/>HTML</li>
                    <li><FaCheckCircle color='#646CFF'  style={{margin:'0 1rem 0rem 0rem', verticalAlign:'middle'}}/>CSS</li>
                    <li><FaCheckCircle color='#646CFF'  style={{margin:'0 1rem 0rem 0rem', verticalAlign:'middle'}}/>Tailwind</li>
                    <li><FaCheckCircle color='#646CFF'  style={{margin:'0 1rem 0rem 0rem', verticalAlign:'middle'}}/>DSA</li>
                  </ul>
                  <h3>Backend <BsDatabaseFillCheck color='#646CFF'  style={{margin:'2rem 1rem 3rem 1rem', verticalAlign:'middle'}}/></h3>
                  <ul className='icons'>
                  <li><FaCheckCircle color='#646CFF'  style={{margin:'0 1rem 0rem 0rem', verticalAlign:'middle'}}/>Node.js</li>
                  <li><FaCheckCircle color='#646CFF'  style={{margin:'0 1rem 0rem 0rem', verticalAlign:'middle'}}/>MongoDB</li>
                  </ul>
                  {/* button div */}
                  <div className="btn btn-group">
                    <a href="/contact">
                      <button className=' btn'>connect now</button>
                    </a>
                    <a href="/services">
                      <button className='btn secondary-btn'>learn more</button>
                    </a>
                  </div>
      {/* button div ends here*/}
                </div>          
              </div>
      {/* Grid div ends here */}
            </section>
{/* 3rd section ends here */}
    </>
  )
}

export default Home