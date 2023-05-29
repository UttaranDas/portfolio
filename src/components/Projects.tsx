import Card from "./Card";
import REACT from "../assets/react.svg";
import ABOUT from "../assets/about.jpg"
import DSA from "../assets/dsa.png";
import DEAL from "../assets/deal.png";

const Projects = () => {
  return (
    <>
      <section className="container project" id="projects">
        <h1 className="project__h1">PROJECTS</h1>
        <p className="project__p">Each project is a unique piece of development 🧩</p>
        <Card
          title="Online auction system"
          desc="A car rental website is an online platform that allows users to rent cars for personal or business use. The website provides an interface for searching, comparing, and reserving cars."
          src={DEAL}
          stack={["React", "Tailwind", "MongoDb", "Firebase", "Socket.io", "Axios"]}
          gh="https://github.com/UttaranDas/DealSteal-Online-auction-system"
          demo="https://deal-steal-online-auction-system.vercel.app/"
        />
        <Card
          title="Ultimate DSA Helper"
          desc="A webapp to help people keep track of their DSA practice."
          src={DSA}
          stack={["React", "Tailwind", "MongoDb"]}
          gh="https://github.com/UttaranDas/ultimate-dsa-helper"
          demo="https://ultimate-dsa-helper.netlify.app/"
          cname="reverse"
        />
        {/* <Card
          title="Online auction system"
          desc="A website for easy online auctioning"
          src={REACT}
          stack={["React", "Tailwind", "MongoDb"]}
          gh="https://github.com/UttaranDas/DealSteal-Online-auction-system"
          demo="https://deal-steal-online-auction-system.vercel.app/"
        />
        <Card
          title="Online auction system"
          desc="A website for easy online auctioning"
          src={ABOUT}
          stack={["React", "Tailwind", "MongoDb"]}
          gh="https://github.com/UttaranDas/DealSteal-Online-auction-system"
          demo="https://deal-steal-online-auction-system.vercel.app/"
          cname="reverse"
        /> */}
      </section>
    </>
  );
};

export default Projects;
