import React, { useState } from 'react'
import '../pages/css/Contact.css'
import contactbg from '../assets/contactbg.jpg'

const Contact = () => {
  const[contact,setContact]=useState({
    username:"",
    email:"",
    message:""
  });

  const handleInput=(e)=>{
    const name=e.target.name;
    const value=e.target.value;

    setContact({
      ...contact,
      [name]:value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log(contact);
  };






  return (
   <>
   <section className='section-contact'>
    <div className='contact-content container'>
      <h1 className='main-heading'>Contact us</h1>
    </div>
    <div className='container grid grid-two-cols'>
      <div className='contact-img'>
        <img src={contactbg} alt="we are always ready to help" />
      </div>

      {/* contact form from contect */}

      <section className='section-form'>
        <form onSubmit={handleSubmit}>
          <div>
            <label htmlFor="username">username</label>
            <input type="text"
            name="username"
            id="username"
            autoComplete='off'
            value={contact.username}
            onChange={handleInput}
            required
             />
          </div>
          <div>
            <label htmlFor="email">email</label>
            <input type="email"
            name="email"
            id="email"
            autoComplete='off'
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
    
   </section>
   </>
  )
}

export default Contact
