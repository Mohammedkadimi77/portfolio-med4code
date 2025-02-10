// import React from 'react'
import './Contact.css';
export default function Contact() {
  const onSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
  
    formData.append("access_key", "635761d5-4384-4768-86eb-5757596b553b");
  
    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);
  
    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json"
      },
      body: json
    }).then((res) => res.json());
  
    if (res.success) {
      console.log("Success", res);
      event.target.reset();
    }
  };
  return (
          <div id='contact' className="contact">
            <div className="contact-title">
              <h2>Contact</h2>
              <h3>MED<span>4</span>CODE</h3>
            </div>
            <div className="contact-section">
              <div className="contact-left">
                <h1>{`Let's Stay Connected`}</h1>
                <p>{`Let's connect ! Reach out on any platform and let's collaborate or chat about new opportunities`}</p>
                <div className="contact-details">
                  
                      <a href="https://www.linkedin.com/in/mohammed-kadimi-295727239" target="_blank" rel="noopener noreferrer"><img src="/public/contact/linkedin.png" alt="" width={60}/></a>
                      <a  href="https://www.instagram.com/moh1mmed_kadimi/" target="_blank" rel="noopener noreferrer"><img src="/public/contact/sociale.png" alt="" width={60}/></a>
                      <a  href="https://github.com/Mohammedkadimi77" target="_blank" rel="noopener noreferrer"><img src="/public/contact/github (1).png" alt="" width={60}/></a>
                      <a  href="https://web.facebook.com/profile.php?id=100018530645982" target="_blank" rel="noopener noreferrer"><img src="/public/contact/facebook.png" alt="" width={60}/></a>
                </div>
              </div>
              <form onSubmit={onSubmit} className='contact-right'> 
                <h2>Contact Me</h2>
                <p>I am always looking for new opportunities</p>
                    <label htmlFor="name">Full Name</label>
                    <input type="text" placeholder='Full Name' name='name' id='name' />
                    <label htmlFor="email">Email Address</label>
                    <input type="email" placeholder="Let's keep in touch via email" name='email' id='email'/>
                    <label htmlFor="">Your Message</label>
                    <textarea name="message"  rows={8} placeholder="What's brewing in your mind?"></textarea>
                    <button type="submit" className='contact-submit'>Contact <span className='icon-arrow-right'></span></button>
              </form>
            </div>
          </div>
  )
}
