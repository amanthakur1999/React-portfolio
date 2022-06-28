import React from 'react';
import { NavLink } from 'react-router-dom';

function Aside() {
  return (
    <>
      <label className="bars" for="toggle">
        <i className="fas fa-bars"></i>
      </label>
      <input id="toggle" type="checkbox" />
      <div className=" sidebar nav">
        <ul className="nav">
          <li>
            <NavLink to="/" activeClassName="active" exact>
              <i class="fas fa-home-lg-alt"></i>
              <span>Home</span>
            </NavLink>
          </li>
          <li>
            <NavLink to="/skill" activeClassName="active">
              <i className="lni lni-text-format"></i>
              <span>Skill</span>
            </NavLink>
          </li>
          <li>
            <NavLink to="/project" activeClassName="active">
              <i className="lni lni-phone"></i>
              <span>Project</span>
            </NavLink>
          </li>
          <li>
            <NavLink to="/blog" activeClassName="active">
              <i className="lni lni-users"></i>
              <span>Blog</span>
            </NavLink>
          </li>

          <li>
            <NavLink to="/contact" activeClassName="active">
              <i className="lni lni-support"></i>
              <span>Contact</span>
            </NavLink>
          </li>
        </ul>
      </div>
    </>
  );
}

export default Aside;
