import React from 'react';
import './newsletter.css';

function NewsLetter() {
  return (
    <>
    <div>
      <section id="newsletter" className="section-p1 section-m1">
        <div className="newstext">
            <h4>Sign Up for Newsletters</h4>
            <p>Get E-Mail updates about our latest shop ans <span>Special Offers.</span></p>
        </div>
        <div className="form">
            <input type="text" placeholder="Your Email Address"/>
            <button className="normal">Sign Up</button>
        </div>

    </section>
    </div>
    </>
  )
}

export default NewsLetter;