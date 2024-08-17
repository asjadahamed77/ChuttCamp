import React from 'react'
import './Contact.css'
import msg_icon from '../../assets/msg-icon.png'
import mail_icon from '../../assets/mail-icon.png'
import phone_icon from '../../assets/phone-icon.png'
import location_icon from '../../assets/location-icon.png'
import white_arrow from '../../assets/white-arrow.png'

const Contact = () => {
    const [result, setResult] = React.useState("");

    const onSubmit = async (event) => {
      event.preventDefault();
      setResult("Sending....");
      const formData = new FormData(event.target);
  
      formData.append("access_key", "27fa37cd-5b15-4010-8016-8d39a4d8bc10");
  
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData
      });
  
      const data = await response.json();
  
      if (data.success) {
        setResult("Form Submitted Successfully");
        event.target.reset();
      } else {
        console.log("Error", data);
        setResult(data.message);
      }
    };
  return (
    <div className='contact'>
      <div className="contact-col">
        <h3>Send us a message <img src={msg_icon} alt="" /></h3>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Id mollitia debitis nesciunt dolorum expedita perspiciatis? Molestias fugit veniam atque laborum, exercitationem magni ea eligendi expedita.</p>
        <ul>
            <li> <img src={mail_icon} alt="" /> chuttahcampus@gmail.com</li>
            <li> <img src={phone_icon} alt="" /> +9426584561</li>
            <li> <img src={location_icon} alt="" /> No.03/A, Galle Road,<br />Colombo-04 <br />Sri Lanka</li>
        </ul>
      </div>
      <div className="contact-col">
        <form onSubmit={onSubmit}>
            <label htmlFor="">Your Name</label>
            <input type="text" name='name' placeholder='Enter your name' required />
            <label htmlFor="">Phone Number</label>
            <input type="tel" name="phone" id="" placeholder='Enter your mobile number' required />
            <label htmlFor="">Write your messages here</label>
            <textarea name="message" id=""  rows="6" placeholder='Enter your message' required></textarea>
            <button type='submit' className="btn dark-btn">Submit now <img src={white_arrow} alt="" /> </button>
        </form>
        <span>{result}</span>
      </div>
    </div>
  )
}

export default Contact
