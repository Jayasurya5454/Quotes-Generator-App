import React from 'react'
import './footer.css'

let Footer = () => {
  return (
    <div className="footer" id='footer'>
      <div className="footerItems">
        <h2><span>Quote Generator</span></h2>
        <h3>Quotes of famous people, that will change your mind and your perspective</h3>
        <div className="icons">
          <i class="fa-brands fa-twitter"></i>
          <i class="fa-brands fa-facebook-f"></i>
          <a href="" target='_blank'><i class="fa-brands fa-youtube"></i></a>
          <i class="fa-brands fa-wikipedia-w"></i>
          <a href="mailto: jayasuryakarthi55@gmail.com"><i class="fa-solid fa-m"></i></a>
        </div>
      </div>

      <div className="footerItems contact">
        <h2><span>PRODUCTS</span></h2>
        <h2>Quote Generator</h2>
        <h2>Plus+</h2>
        <h2>App Version</h2>
        <h2>No Excuses</h2>
        <h2>Daily Motivation</h2>
      </div>

      <div className="footerItems about">
        <h2><span>Contact Me</span></h2>
        <h3>Call : 739-58-31-324</h3>
        <h3>Email : <a href="mailto: 'mailto: jayasuryakarthi55@gmail.com">jayasuryakarthi55@gmail.com</a></h3>
        <h3>Tel : --- </h3>
        <h3>Whatsapp : 739-58-31-324</h3>
      </div>
    </div>
  );
}

export default Footer;