import "../App.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import HTML from "../assets/icons/html.svg";
import CSS3 from "../assets/icons/css3.svg";
import JAVASCRIPT from "../assets/icons/javascript.svg";
import REACT from "../assets/icons/react.svg";
import TAILWIND from "../assets/icons/tailwind.svg";
import TYPESCRIPT from "../assets/icons/typescript.svg";
import IMG from "../assets/img-new.jpg";
import MONGODB from "../assets/icons/mongodb.svg";
import NODEJS from "../assets/icons/nodejs.svg";

const Hero = () => {
  return (
    <>
      <section id="hero" className="container hero">
        <div className="hero__intro">
          <div className="hero__text-side">
            <h1>Full-Stack Developer</h1>
            <p>
              Greetings! I'm Uttaran Das, a dedicated Full-Stack React Developer
              on a mission to create innovative and seamless web solutions that
              inspire and engage users.
            </p>
            <span>
              <a
                href="https://www.linkedin.com/in/uttaran-das/"
                rel="noreferrer"
                target="blank"
                className="mr-4"
              >
                <FontAwesomeIcon
                  icon={faLinkedin}
                  size="2x"
                  className="svg-inline-fa"
                />
              </a>
              <a
                href="https://github.com/UttaranDas"
                rel="noreferrer"
                target="blank"
              >
                <FontAwesomeIcon
                  icon={faGithub}
                  size="2x"
                  className="svg-inline-fa"
                />
              </a>
            </span>
          </div>
          <img className="mypic" src={IMG} />
        </div>
        <div className="skills">
          <p>Tech Stack </p>
          <ul>
            <li className="flex align-middle">
              {" "}
              <img src={HTML} alt="html" />{" "}
            </li>
            <li className="flex align-middle">
              {" "}
              <img src={CSS3} alt="css3" />{" "}
            </li>
            <li className="flex align-middle">
              {" "}
              <img src={REACT} alt="react" />{" "}
            </li>
            <li className="flex align-middle">
              {" "}
              <img src={TAILWIND} alt="tailwind" />{" "}
            </li>
            <li className="flex align-middle">
              {" "}
              <img src={JAVASCRIPT} alt="javascript" />{" "}
            </li>
            <li className="flex align-middle">
              {" "}
              <img src={TYPESCRIPT} alt="typescript" />{" "}
            </li>
            <li className="flex align-middle">
              {" "}
              <img src={MONGODB} alt="mongodb" />{" "}
            </li>
            <li className="flex align-middle">
              {" "}
              <img src={NODEJS} alt="nodejs" />{" "}
            </li>
          </ul>
        </div>
      </section>
    </>
  );
};

export default Hero;
