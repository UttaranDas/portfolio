import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Footer = () => {
  return (
    <>
      <section className="footer">
        <div>
          <p>Copyright © 2023. All rights are reserved</p>
          <span>
            <a href="https://github.com/UttaranDas" target="blank" rel="noreferrer"><FontAwesomeIcon icon={faGithub} /></a>
            <a href="https://www.linkedin.com/in/uttaran-das/" target="blank" rel="noreferrer"><FontAwesomeIcon icon={faLinkedin} /></a>
          </span>
        </div>
      </section>
    </>
  );
};

export default Footer;
