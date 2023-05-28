import { MouseEvent } from "react";
import "../App.css";

const Navbar = () => {
  const goUp = (e: MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const targetId = e.currentTarget.getAttribute("href") as string;
    const targetElement = document.querySelector(targetId);
    if (targetElement) {
      const offsetTop = targetElement.getBoundingClientRect().top + window.pageYOffset;
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
    <nav className="flex flex-row justify-between">
      <h3 className="logo flex-initial cursor-pointer font-bold" onClick={reachTop}>
        Uttaran.dev
      </h3>
      <ul className="flex items-center space-x-4 justify-end font-medium">
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
          <a href="#contacts" onClick={goUp}>
            Contacts
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
