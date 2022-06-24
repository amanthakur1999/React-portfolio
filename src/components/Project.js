import React from 'react';
import { project } from '../data/project';
function Project() {
  return (
    <>
      <section className="project-section">
        <h2 className="title">Project</h2>
        <div className="flex-wrap">
          {project.map((each) => (
            <div key={each.title} className="flex-45 blog-card ">
              <div className="blog-image">
                <img className="width" src={each.image} alt="images" />
              </div>
              <h2>{each.title}</h2>

              <ul className="flex tag">
                {each.tag.map((tag) => (
                  <li key={tag}>{tag}</li>
                ))}
              </ul>

              <button className="button-30">
                <a href={each.github} target="_blank" rel="noreferrer">
                  Github
                </a>
              </button>
              <button className="button-30">
                <a href={each.live} target="_blank" rel="noreferrer">
                  Live
                </a>
              </button>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}

export default Project;
