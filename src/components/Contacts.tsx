import {
  faEnvelopeOpenText,
  faMapLocationDot,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Contacts = () => {
  return (
    <>
      <section className="container contact" id="contact">
        <h1>CONTACT</h1>
        <p>Don't be shy! Hit me up!👇</p>
        <div className="contact__div">
          <div className="contact__card">
            <div className="icon-circle">
              <FontAwesomeIcon icon={faMapLocationDot} size="2x" color="#147efb" />
            </div>
            <div>
              <p>Location</p>
              <a href="https://www.google.com/maps/place/Lonavala,+Maharashtra" target="blank" rel="noreferrer">Maharashtra, India</a>
            </div>
          </div>
          <div className="contact__card">
            <div className="icon-circle">
              <FontAwesomeIcon icon={faEnvelopeOpenText} size="2x" color="#147efb" />
            </div>
            <div>
              <p>Mail</p>
              <a href="mailto:uttarandas501@gmail.com">uttarandas501@gmail.com</a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contacts;
