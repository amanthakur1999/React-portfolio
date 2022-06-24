import React from 'react';
import { Link } from 'react-router-dom';
import { Social } from '../data/social';

function Home() {
  return (
    <>
      <section className="home flex">
        <div className="empty flex-40">
          <h3>Uttam Thakur</h3>
          <div className="social-link-home flex">
            {Social.map((each) => (
              <div className="social-div">
                <a href={each.link} target="_blank" rel="noreferrer">
                  <img src={each.image} className="width" alt={each.title} />
                </a>
              </div>
            ))}
          </div>
        </div>
        <div className="persnal-detail flex-60">
          <div className="image">
            <img src={'/images/aman.jpg'} alt="aman" />
          </div>
          <div className="persnal-detail-1">
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
            <div className="flex resume">
              {/* <Link to="/resume" className="resume-button">
                Resume
              </Link> */}

              <a
                className="resume-buttom"
                href="/images/uttam.pdf"
                download="uttam.pdf"
              >
                Resume
              </a>

              <Link to="/contact" className="contact-button">
                Contact
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
export default Home;
