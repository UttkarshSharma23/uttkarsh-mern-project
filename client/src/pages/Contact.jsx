import React,{useState} from 'react'
import contactimg from "../assets/contact.png"
const Contact = () => {
 
    const [contact, setContact] = useState({
      username: "",
      email: "",
      message: "",
    });
  
    // lets tackle our handleInput
    const handleInput = (e) => {
      const name = e.target.name;
      const value = e.target.value;
  
      setContact({
        ...contact,
        [name]: value,
      });
    };

/** 
 // With fat-arrow function 
 setContact((prev)=>({
   ...prev,
   [name]:value,
  }))
   */  
  
    // handle fomr getFormSubmissionInfo
    const handleSubmit = (e) => {
      e.preventDefault();
  
      console.log(contact);
    };
  
 
 
  return (  
    <>
     <section className="section-contact">
        <div className="contact-content container">
          <h1 className="main-heading">contact us</h1>
        </div>
        {/* contact page main  */}
        <div className="container grid grid-two-cols">
          <div className="contact-img">
            <img src={contactimg} height="400" width="450" />
          </div>

          {/* contact form content actual  */}
          <section className="section-form">
            <form onSubmit={handleSubmit}>
              <div>
                <label htmlFor="username">username</label>
                <input
                  type="text"
                  name="username"
                  id="username"
                  autoComplete="off"
                  value={contact.username}
                  onChange={handleInput}
                  required
                />
              </div>

              <div>
                <label htmlFor="email">email</label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  autoComplete="off"
                  value={contact.email}
                  onChange={handleInput}
                  required
                />
              </div>

              <div>
                <label htmlFor="message">message</label>
                <textarea
                  name="message"
                  id="message"
                  autoComplete="off"
                  value={contact.message}
                  onChange={handleInput}
                  required
                  cols="30"
                  rows="6"
                ></textarea>
              </div>

              <div>
                <button type="submit">submit</button>
              </div>
            </form>
          </section>
        </div>

        <section className="mb-3">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d309.5212744057039!2d77.08569898997274!3d28.634750503821518!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d049679f91073%3A0xccb7ac2b1c238a46!2sOld%20Mahavir%20Nagar%2C%20Tilak%20Nagar%2C%20Delhi%2C%20110018!5e0!3m2!1sen!2sin!4v1706526615555!5m2!1sen!2sin"
            width="100%"
            height="450"
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </section>
      </section>
    </>
  )
}

export default Contact