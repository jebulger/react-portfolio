const Project = ({ project }) => {
  const { title, liveLink, githubLink, image } = project;

  const projectStyle = {
    backgroundImage: `url(${image})`,
  };

  return (
    <div className="project" style={projectStyle}>
      <div className="project-content">
        <h3>{title}</h3>
        <a href={liveLink} target="_blank" rel="noopener noreferrer">
          Deployed Site
        </a>
        <a href={githubLink} target="_blank" rel="noopener noreferrer">
          GitHub Repo
        </a>
      </div>
    </div>
  );
};

export default Project;
