const Resume = () => {
  return (
    <div className="resume-container">
      <h1>Resume</h1>
      <a href="/pdfs/my-resume.pdf" target="_blank" download>
        Download my resume
      </a>

      <section className="front-end-proficiencies">
        <h2>Front-end Proficiencies</h2>
        <ul>
          <li>HTML</li>
          <li>CSS</li>
          <li>JavaScript</li>
          <li>Responsive Design</li>
          <li>React</li>
          <li>Bootstrap</li>
        </ul>
      </section>

      <section className="backend-proficiencies">
        <h2>Back-end Proficiencies</h2>
        <ul>
          <li>APIs</li>
          <li>Node</li>
          <li>Express</li>
          <li>MySQL, Sequelize</li>
          <li>Mongoose, MongoDB</li>
          <li>REST</li>
          <li>GraphQL</li>
        </ul>
      </section>
    </div>
  );
};

export default Resume;
