import React from 'react';


import './portfolio.css';

const Portfolio = () => {
  const soloProjects = [
    {
      id: 1,
      title: 'JDBC CRUD APP',
      description:
        'Trying to build a simple jdbc crud app to learn how JAVA works with different Databases. Simple yet a fundamental understanding is achieved on different SQL queries and how java communicates with the SQL database to do the CRUD operations.',
      technologies: 'Java | JDBC | MYsql',
      github: 'https://github.com/IshikaChatterjee/jdbccrudapp',
    },
    {
      id: 2,
      title: 'JAVA Servlep and Jsp Crud App',
      description:
        'A simple crud application to learn the working of servlet and jsp. A good observation of Servlets and their lifecycle has been done in this project',
      technologies: 'Java | JSP | servlet | Mysql ',
      github: 'https://github.com/IshikaChatterjee/Servlet-JSP-JSTL-JDBC-CRUD-School-Management-System-main',
    },
    {
      id: 3,
      title: 'React Portfolio App',
      description: 'User friendly app to show my portfolio in an interactive manner in React Js.',
      technologies: 'JavaScript | ReactJs',
      github: 'https://github.com/IshikaChatterjee/ReactPortfolio',
    },
  ];

  return (
    <section id="portfolio">
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>
      <div className="container portfolio__container">
        {soloProjects.map((pro) => (
          <article className="portfolio__item" key={pro.id}>
            <div className="portfolio__item-content">
              <h3>{pro.title}</h3>
              <p>{pro.description}</p>
              <p>{pro.technologies}</p>
            </div>
            <div className="portfolio__item-cta">
              <a
                href={pro.github}
                target="_blank"
                className="btn"
                rel="noreferrer"
              >
                GitHub
              </a>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};

export default Portfolio;
