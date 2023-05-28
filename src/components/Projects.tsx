import Card from "./Card";
import REACT from "../assets/react.svg";
import ABOUT from "../assets/about.jpg"

const Projects = () => {
  return (
    <>
      <section className="container project" id="projects">
        <h4>Projects</h4>
        <p>Each project is a unique piece of development 🧩</p>
        <Card
          title="Online auction system"
          desc="A website for easy online auctioning"
          src={ABOUT}
          stack={["React", "Tailwind", "MongoDb", "Firebase", "Socket.io", "Axios"]}
          gh="https://github.com/UttaranDas/DealSteal-Online-auction-system"
          demo="https://deal-steal-online-auction-system.vercel.app/"
        />
        <Card
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
          src={REACT}
          stack={["React", "Tailwind", "MongoDb"]}
          gh="https://github.com/UttaranDas/DealSteal-Online-auction-system"
          demo="https://deal-steal-online-auction-system.vercel.app/"
        />
        {/* <Card />
        <Card /> */}
      </section>
    </>
  );
};

export default Projects;
