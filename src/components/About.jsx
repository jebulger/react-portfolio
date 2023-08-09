import avatar from "../assets/avatar-photo.jpg";

const About = () => {
  return (
    <section id="about" className="about">
      <div className="bio">
        <img src={avatar} alt="Profile picture" />
        <h2>About Me</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Nulla
          posuere sollicitudin aliquam ultrices sagittis orci a scelerisque. Et
          odio pellentesque diam volutpat commodo sed egestas egestas. Eleifend
          mi in nulla posuere. Velit laoreet id donec ultrices tincidunt arcu
          non sodales. Iaculis eu non diam phasellus vestibulum. Dictumst
          quisque sagittis purus sit. Duis tristique sollicitudin nibh sit amet
          commodo nulla facilisi. Pellentesque habitant morbi tristique senectus
          et netus et malesuada.
          <br></br>
          <br></br>
          Ut tortor pretium viverra suspendisse potenti. Est velit egestas dui
          id ornare arcu. Praesent tristique magna sit amet purus gravida. Massa
          enim nec dui nunc mattis. Non odio euismod lacinia at quis. Ut eu sem
          integer vitae justo. Morbi tincidunt ornare massa eget egestas purus
          viverra accumsan. Mus mauris vitae ultricies leo. Bibendum ut
          tristique et egestas quis ipsum. Iaculis eu non diam phasellus
          vestibulum lorem sed. Quis ipsum suspendisse ultrices gravida dictum.
          Lorem dolor sed viverra ipsum nunc aliquet bibendum enim. Ipsum nunc
          aliquet bibendum enim facilisis gravida neque convallis.
        </p>
      </div>
    </section>
  );
};

export default About;
