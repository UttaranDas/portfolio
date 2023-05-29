import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faExternalLink } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

interface Props {
  title: string;
  desc: string;
  src: string;
  gh: string;
  demo: string;
  stack: string[];
  cname?: string;
}

const Card = ({ title, desc, src, gh, demo, stack, cname }: Props) => {
  return (
    <>
      <div className={`card ${cname}`}>
        <div className="card__text-side">
          <h1>{title}</h1>
          <p>{desc}</p>
          <div className="stack">
            {stack.map((st, index) => <p key={index}>{st}</p>)}
          </div>
          <div className="links">
            <a href={gh} target="blank" rel="noreferrer"> Code <FontAwesomeIcon icon={faGithub}/> </a>
            <a href={demo} target="blank" rel="noreferrer"> Live demo <FontAwesomeIcon icon={faExternalLink}/> </a>
          </div>
        </div>
        <img src={src} className="card__img" />
      </div>
    </>
  );
};

export default Card;
