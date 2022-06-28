import React from 'react';
import { Social } from '../data/social';
function Contact() {
  return (
    <>
      <section className="contact-container">
        <div className="contact-sm">
          <div className="contact-about">
            <h3 className="title">CONTACT ME</h3>
            <h3>Hi , My name is 👋</h3>
            <h2>UTTAM THAKUR</h2>

            <p>
              I am Mern Stack Developer . My objective is simple to be the best
              web developer that I can be and to contribute to the technology
              industry all the I know and can do.I believe that my understanding
              of problem solving complex algorithums are also skills that have
              and will continue to contribute to my overall success as a
              developer.
            </p>
          </div>
          <div className="email-detail">
            <h4>Email: uttamthakur2999@gmail.com</h4>
            <h4>Phone: +918219686537</h4>
          </div>
          <div className="social-link-home flex contact">
            {Social.map((each) => (
              <div className="social-div-2">
                <a href={each.link} target="_blank" rel="noreferrer">
                  <img src={each.image} className="width" alt={each.title} />
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
export default Contact;
