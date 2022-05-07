import React from 'react';
import './Footer.css';
// import { Link } from 'react-router-dom';



const Footer = () => {
  return (


    <div className='footer-container' id='footer'>
    <section className='footer-subscription'>
      <p className='footer-subscription-heading'>
        CONTACT YOUR LOCAL NAVY RESERVE RECRUITER FOR MORE INFORMATION
      </p>
      <p className='footer-subscription-text'>
       VISIT US AT YOUR LOCAL NAVY RESERVE CENTER
      </p>
      <div className='input-areas'>
      </div>
    </section>
    <div class='footer-links'>
      <div className='footer-link-wrapper'>
        <div class='footer-link-items'>
          <h2>About Us</h2>
          <a target="_blank" href="https://www.mynrh.navy.mil/#/map">Find a NRC</a>
          <a target="_blank" href="https://www.mynrh.navy.mil/#/">My Reserve Homeport</a>
          <a target="_blank" href="https://locker.private.navyreserve.navy.mil/portal/">Career Opportunities</a>

        </div>
        {/* <div class='footer-link-items'>
          <h2>Contact Us</h2>
          <Link to='/'>Everett</Link>
          <Link to='/'>Kitsap</Link>
          <Link to='/'>Whidbey Island</Link>
          <Link to='/'>Hawaii</Link>
          <Link to='/'>Japan</Link>
        </div> */}
        

      </div>
      <div className='footer-link-wrapper'>
        <div class='footer-link-items'>
          <h2>Videos</h2>
          <a target="_blank" href="https://www.youtube.com/watch?v=KeQhp2iYUTQ&t=121s">Navy Reserve History</a>
          <a target="_blank" href="https://www.youtube.com/watch?v=T0XaN4oGRLo&t=73s">Stories From The Navy Reserve</a>
          <a target="_blank" href="https://www.youtube.com/watch?v=ZCOcxuUChq0&t=4s">One Navy</a>

        </div>

      </div>
    </div>
    <section class='social-media'>
      <div class='social-media-wrap'>
        <small class='website-rights'>YN1(AW) Chen © 2022</small>
        </div>
    </section>
  </div>
  );
};

export default Footer