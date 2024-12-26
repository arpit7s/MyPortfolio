import React from 'react';
import './Services.css';

function Services() {
  return (
    <div id="services" className="container">
      <h1>My Services</h1>
      <div className="services">
        <div className="service">
          <div className="service-number">01</div>
          <h2>Web Design</h2>
          <p>Web development is the process of building, programming, and maintaining websites and web applications.</p>
          <button className="read-more">Read More →</button>
        </div>
        <div className="service">
          <div className="service-number">02</div>
          <h2>Graphics Design</h2>
          <p>Graphic design is the art of combining text and pictures to create visual representations of ideas and messages.</p>
          <button className="read-more">Read More →</button>
        </div>
        <div className="service">
          <div className="service-number">03</div>
          <h2>Social Media</h2>
          <p>Social media management and content creation to build and enhance online presence for brands and individuals.</p>
          <button className="read-more">Read More →</button>
        </div>
        <div className="service">
          <div className="service-number">04</div>
          <h2>App Design</h2>
          <p>Designing intuitive and user-friendly applications for both Android and iOS platforms.</p>
          <button className="read-more">Read More →</button>
        </div>
        <div className="service">
          <div className="service-number">05</div>
          <h2>Digital Marketing</h2>
          <p>Implementing digital marketing strategies such as SEO, SEM, content marketing, and email marketing.</p>
          <button className="read-more">Read More →</button>
        </div>
        <div className="service">
          <div className="service-number">06</div>
          <h2>Content Writing</h2>
          <p>Creating high-quality content for websites, blogs, social media, and marketing materials.</p>
          <button className="read-more">Read More →</button>
        </div>
      </div>
    </div>
  );
}

export default Services;
