import Project from "./Project";
import projectData from "../assets/js/projectData";

const Portfolio = () => {
  return (
    <section id="portfolio" className="portfolio">
      <h2>Portfolio</h2>
      <div className="project-list">
        {projectData.map((project, index) => (
          <Project key={index} project={project} />
        ))}
      </div>
    </section>
  );
};

export default Portfolio;
