import WorkingEmoji from "../assets/work.png";
import AboutImg from "../assets/about.jpg";
import RoundedText from "../assets/rounded-text.png";

const AboutMe = () => {
  return (
    <>
      <section className="container" id="about">
        <div className="about-content">
          <div className="img-side">
            <img src={AboutImg} alt="mee" className="img-side__main-img" />
            <img src={RoundedText} alt="text" className="rounded-text" />
            <img src={WorkingEmoji} alt="emoji" className="work-emoji" />
          </div>

          <div className="text-side">
            <h1>ABOUT ME</h1>
            <h3>
              A dedicated Full-Stack Developer <br /> based in Maharashtra,
              India 📍
            </h3>
            <p>
              I'm Uttaran Das, a dedicated Full-Stack Developer
              well-versed in React, JavaScript, TypeScript, Tailwind, Node.js,
              C++, MongoDB, Firebase, CSS, Express, and Material-UI. A quick
              learner, I thrive on continuous growth and possess a passion for
              collaboration. As a team player, I actively contribute my skills
              and adapt seamlessly to foster a harmonious working environment.
              With a keen eye for detail and a commitment to excellence, I aim
              to deliver exceptional solutions that leave a lasting impact.
              Let's create something remarkable together!
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default AboutMe;
