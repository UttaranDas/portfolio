import Card from "./Card";
// import REACT from "../assets/react.svg";
// import ABOUT from "../assets/about.jpg"
import DSA from "../assets/dsa.png";
import DEAL from "../assets/deal.png";

const Projects = () => {
  return (
    <>
      <section className="container project" id="projects">
        <h1 className="project__h1">PROJECTS</h1>
        <p className="project__p">
          Each project is a unique piece of development 🧩
        </p>
        <Card
          title="Online auction system"
          desc="Deal-Steal: An online auction platform powered by React and Node.js Express. Harnessing the real-time power of socket.io, it ensures seamless price tracking. With a sleek design crafted using Tailwind CSS and backed by MongoDB, it offers secure user authentication through Firebase. Unleash the thrill of winning with Deal-Steal!"
          src={DEAL}
          stack={[
            "React",
            "Tailwind",
            "MongoDb",
            "Firebase",
            "Socket.io",
            "Axios",
          ]}
          gh="https://github.com/UttaranDas/DealSteal-Online-auction-system"
          demo="https://deal-steal-online-auction-system.vercel.app/"
        />
        <Card
          title="Ultimate DSA Helper"
          desc="Your go-to webapp for streamlining DSA practice. Seamlessly manage topics, questions, and progress with ease. Built with React, Hooks, and Material UI, it offers a sleek and intuitive user experience for mastering the art of data structures and algorithms."
          src={DSA}
          stack={["React", "Material UI", "Hooks"]}
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
