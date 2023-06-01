import { MouseEvent, useState } from "react";
import "../App.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBarsStaggered, faXmark } from "@fortawesome/free-solid-svg-icons";

const Navbar = () => {
  const [hamburger, setHamburger] = useState(false);

  const hamburgerMenu = () => {
    setHamburger(!hamburger);
  };

  const goUp = (e: MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const targetId = e.currentTarget.getAttribute("href") as string;
    const targetElement = document.querySelector(targetId);
    if (targetElement) {
      const offsetTop =
        targetElement.getBoundingClientRect().top + window.pageYOffset;
      window.scrollTo({
        top: offsetTop,
        behavior: "smooth",
      });
    }
  };

  const reachTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <>
      <nav>
        <h3 className="logo" onClick={reachTop}>UD</h3>
        <ul>
          <li>
            <a href="#hero" onClick={goUp}>
              Home
            </a>
          </li>
          <li>
            <a href="#about" onClick={goUp}>
              About
            </a>
          </li>
          <li>
            <a href="#projects" onClick={goUp}>
              Projects
            </a>
          </li>
          <li>
            <a href="#contact" onClick={goUp}>
              Contact
            </a>
          </li>
          <li onClick={() => hamburgerMenu()}>
            <FontAwesomeIcon icon={faBarsStaggered} className="mobile-menu"/>
          </li>
        </ul>
      </nav>

      {/* mobile nav */}
      <div className={`mobile-nav ${hamburger ? "open-menu" : "closed-menu"}`}>
        <span onClick={() => hamburgerMenu()}>
          <FontAwesomeIcon icon={faXmark} />
        </span>

        <ul>
          <li onClick={() => hamburgerMenu()}>
            <a href="#hero" onClick={goUp}>Home</a>
          </li>

          <li onClick={() => hamburgerMenu()}>
            <a href="#about" onClick={goUp}>About</a>
          </li>

          <li onClick={() => hamburgerMenu()}>
            <a href="#projects" onClick={goUp}>Projects</a>
          </li>

          <li onClick={() => hamburgerMenu()}>
            <a href="#contact" onClick={goUp}>Contact</a>
          </li>
        </ul>
      </div>
    </>
  );
};

export default Navbar;
