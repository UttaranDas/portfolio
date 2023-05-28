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
import IMG from "../assets/img-new.jpg";
// import MONGODB from "../assets/icons/mongodb.svg";

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
          <img className="mypic" src={IMG}/>
        </div>
        <div className="skills flex">
          <p>Tech Stack </p>
          <ul className="flex justify-between">
            <li className="flex align-middle"> <img height="30px" width="25px" src={HTML} alt="html" /> </li>
            <li className="flex align-middle"> <img height="30px" width="25px" src={CSS3} alt="html" /> </li>
            <li className="flex align-middle"> <img height="30px" width="30px" src={REACT} alt="html" /> </li>
            <li className="flex align-middle"> <img height="30px" width="30px" src={TAILWIND} alt="html" /> </li>
            <li className="flex align-middle"> <img height="30px" width="30px" src={JAVASCRIPT} alt="html" /> </li>
            <li className="flex align-middle"> <img height="30px" width="30px" src={TYPESCRIPT} alt="html" /> </li>
            {/* <li className="flex align-middle"> <img height="10px" width="30px" src={MONGODB} alt="html" /> </li> */}
          </ul>
        </div>
      </section>
    </>
  );
};

export default Hero;
