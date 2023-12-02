import React from "react";
import "./Home.css";
import Card from "../../Components/Card/card";
export default function home() {
  const listProject = [
    {
      img: "./poker.png",
      language: "Python",
      title: "Poker",
      description: "Jeu Poker contre une IA",
      link: "Live",
    },
    {
      img: "Accueil.png",
      language: "HTML CSS Javascript PHP",
      title: "Social Network : Classlink",
      description: "Réseau Social pour étudiant",
      link: "Live",
    },
    {
      img: "./OIKOS.png",
      language: "HTML CSS Javascript PHP",
      title: "OIKOS",
      description: "Site de location immobilier",
      link: "Live",
    },
  ];
  return (
    <div id="content-home">
      <div className="container_home">
        <div className="first_content">
          <div className="first_content_left">
            <div className="short_presentation">
              <div className="presentation">
                <h1>
                  Moi c'est Wandji Williams je suis{" "}
                  <span className="DF">Développeur Front end</span>
                </h1>
              </div>
              <div className="presentation2">
                <p>
                  Je prépare actuellement un Bachelor Concepteur Développeur de
                  solution digitale en 2ème Année.
                </p>
              </div>
              <div className="contactMe">
                <button>
                  <a href="">Contactez moi !!!</a>
                </button>
              </div>
            </div>
          </div>
          <div className="first_content_right">
            <img src="./Group 46.svg" />
          </div>
        </div>
        <div className="citation">
          <img src="./citation.png" />
        </div>
        <div className="project">
          <div className="header_project">
            <div className="project_title">
              <p>
                <span>#</span>project
              </p>
              <div className="line_title"></div>
            </div>
            <div className="view_all">
              <a href="">View all ➜ </a>
            </div>
          </div>
          <div className="project_all">
            {listProject.map((project, index) => (
              <Card content={project}></Card>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
