import avatar from "../../public/profile.jpeg";

const About = () => {
  return (
    <section id="about" className="about">
      <div className="bio">
        <img src={avatar} alt="Profile picture" />
        <h2>About Me</h2>
        <p>
          Hello, I&apos;m Jack! Originally from upstate New York, I moved into
          the Wake Forest area about eight years ago. Moving is always tough,
          but I have really enjoyed living here so far. I graduated high school
          in the class of 2020, and have since worked a few different jobs. I
          was waiting tables for nearly two years, which I always really
          enjoyed. By far my favorite job was working at a tattoo shop in
          downtown Raleigh. It was an amazing experience that I cherish very
          deeply. After that, I began working at a busy mechanic shop. It was
          pretty stressful a lot of the time, but I learned a ton. Being so
          close to Raleigh, I really enjoy spending time experiencing what the
          city has to offer. I am very passionate about everything that has to
          do with music and love to spend time going to concerts. I am even
          trying to learn how to play guitar, but I am far from decent at it. It
          is still so much fun, and I will keep trying to improve at it.
          <br></br>
          <br></br>
          After experiencing some different jobs, trying to figure out what I
          want to do for a living, I am now spending my time learning to code.
          Over the past five months, I have been enrolled in UNC-Chapel
          Hill&apos;s full stack coding bootcamp. It has been awesome so far! I
          couldn&apos;t believe how much I have been learning. Five months ago
          it was a struggle to get a few messages on the browser and now I am
          building full stack web applications! I really enjoy building
          applications and my goal is to become a developer after finishing the
          class. There is an endless amount to learn, which is awesome. The sky
          is the ceiling when it comes to coding, and there is always room to
          improve and learn how to be more efficient. I still have so much to
          learn and I am really looking forward to it. Thanks for checking out
          my portfolio!
        </p>
      </div>
    </section>
  );
};

export default About;
