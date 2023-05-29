import "../App.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
// import MYPIC from "../assets/mypic.jpg";
import HTML from "../assets/icons/html.svg";
import CSS3 from "../assets/icons/css3.svg";
import JAVASCRIPT from "../assets/icons/javascript.svg";
import REACT from "../assets/icons/react.svg";
import TAILWIND from "../assets/icons/tailwind.svg";
import TYPESCRIPT from "../assets/icons/typescript.svg";
// import IMG from "../assets/img-new.jpg";
import MONGODB from "../assets/icons/mongodb.svg";

const Hero = () => {
  return (
    <>
      <section id="hero" className="container hero">
        <div className="flex">
          <div className="hero__text-side">
            <h1>Full-Stack React Developer</h1>
            <p>
              Hi, I'm Uttaran Das. A passionate Full-Stack React Developer based
              in Maharashtra, India. 📍
            </p>
            <span>
              <a href="https://www.linkedin.com/in/uttaran-das/" rel="noreferrer" target="blank" className="mr-4">
                <FontAwesomeIcon icon={faLinkedin} size="2x"/>
              </a>
              <a href="https://github.com/UttaranDas" rel="noreferrer" target="blank">
                <FontAwesomeIcon icon={faGithub} size="2x"/>
              </a>
            </span>
          </div>
          {/* <img className="mypic" src={MYPIC}/> */}
          {/* <img className="mypic" src={IMG}/> */}
          <div className="hero-img"></div>
        </div>
        <div className="skills">
          <p>Tech Stack </p>
          <ul>
            <li className="flex align-middle"> <img src={HTML} alt="html" /> </li>
            <li className="flex align-middle"> <img src={CSS3} alt="css3" /> </li>
            <li className="flex align-middle"> <img src={REACT} alt="react" /> </li>
            <li className="flex align-middle"> <img src={TAILWIND} alt="tailwind" /> </li>
            <li className="flex align-middle"> <img src={JAVASCRIPT} alt="javascript" /> </li>
            <li className="flex align-middle"> <img src={TYPESCRIPT} alt="typescript" /> </li>
            <li className="flex align-middle"> <img src={MONGODB} alt="mongodb" /> </li>
          </ul>
        </div>
      </section>
    </>
  );
};

export default Hero;
