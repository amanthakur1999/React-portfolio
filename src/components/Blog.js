import React from 'react';
import { blog } from '../data/blog';

function Blog() {
  return (
    <>
      <section className="blog-section">
        <h3 className="title">BLOGS</h3>
        <div className="flex-wrap">
          {blog.map((each) => (
            <div key={each.title} className="flex-45 blog-card">
              <div className="blog-image">
                <img className="width" src={each.image} alt="images" />
              </div>
              <h2>{each.title}</h2>
              <button className="button-30">
                <a href={each.more}>Read More</a>
              </button>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}

export default Blog;
