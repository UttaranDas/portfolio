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
            <img
              src={RoundedText}
              alt="text"
              className="rounded-text"
            />
            <img
              src={WorkingEmoji}
              alt="emoji"
              className="work-emoji"
            />
          </div>

          <div className="text-side">
            <h1>ABOUT ME</h1>
            <h3>
              A dedicated Full-Stack Developer <br /> based in Maharashtra,
              India 📍
            </h3>
            <p>
              As a Front-Stack Developer, I possess an impressive arsenal of
              skills in HTML, CSS, JavaScript, React, Tailwind, MongoDB, NodeJs,
              Express and many more. I excel in designing and maintaining
              responsive websites that offer a smooth user experience. My
              expertise lies in crafting dynamic, engaging interfaces through
              writing clean and optimized code and utilizing cutting-edge
              development tools and techniques. I am also a team player who
              thrives in collaborating with cross-functional teams to produce
              outstanding web applications.
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default AboutMe;
