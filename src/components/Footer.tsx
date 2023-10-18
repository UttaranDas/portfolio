import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from '@fortawesome/free-solid-svg-icons';

const Footer = () => {
  return (
    <>
      <section className="container footer">
        <p>Made with  <FontAwesomeIcon icon={faHeart} style={{color: "#eb0046",}} />  by Uttaran</p>
        
        <div>
          <a
            href="https://github.com/UttaranDas"
            target="blank"
            rel="noreferrer"
          >
            <FontAwesomeIcon icon={faGithub} className="svg-inline--fa"/>
          </a>
          <a
            href="https://www.linkedin.com/in/uttaran-das/"
            target="blank"
            rel="noreferrer"
          >
            <FontAwesomeIcon icon={faLinkedin} className="svg-inline--fa"/>
          </a>
        </div>
      </section>
    </>
  );
};

export default Footer;
