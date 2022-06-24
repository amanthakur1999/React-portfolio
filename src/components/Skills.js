import React from 'react';
import { skill } from '../data/skill';
function Skill() {
  return (
    <>
      <section className="skill">
        <h2>Skills</h2>
        <div className="skill-container">
          {skill.map((each) =>
            each.Language.map((each) => (
              <div className="skill-card">
                <div className="skill-img">
                  <img className="width" src={each.image} alt={each.name} />
                </div>
                <h3>{each.name}</h3>
              </div>
            ))
          )}
        </div>
      </section>
    </>
  );
}

export default Skill;
