import React from 'react';
import { FaAward } from 'react-icons/fa';
import { VscFolderLibrary } from 'react-icons/vsc';
import ME from '../../assets/me.jpeg';
import './intro.css';

const Intro = () => {
  return (
    <section id="about">
      <h5>Get to know</h5>
      <h2>About Me</h2>
      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={ME} alt="me" />
          </div>
        </div>
        <div className="about__content">
          <div className="about__cards">
            <article className="about__card">
              <FaAward className="about__icon" />
              <h5>Experience</h5>
              <small>Still Learning</small>
            </article>
            <article className="about__card">
              <VscFolderLibrary className="about__icon" />
              <h5>Projects</h5>
              <small>3 complete projects</small>
            </article>
          </div>
          <p>

Hello! I am a passionate budding web developer, currently pursuing my college degree. My journey into the realm of web development began with a strong foundation in Java, and I've since deepened my knowledge by exploring Servlets and understanding their intricate life cycles. My proficiency extends to managing HTTP requests and responses, utilizing Spring Boot for robust backend development, and integrating databases with JDBC and MySQL. On the front-end, I have honed my skills in React.js to deliver responsive and dynamic user interfaces. I am enthusiastic about leveraging these skills to create seamless web experiences and am eager to collaborate on innovative projects.</p>
          <a href="#contact" className="btn btn-primary">Let's Talk</a>
        </div>
      </div>
    </section>
  )
}

export default Intro