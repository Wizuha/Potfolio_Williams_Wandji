import React from "react";
import "./Home.css";
import Card from "../../Components/Card/card";
import Skills from "../../Components/Skills/skills";
export default function home() {
  const listSkill = [
    {
      domaine: "Outils",
      content: "VSCode Figma Git Photoshop Illustrator InDesign",
    },
    {
      domaine: "Frameworks",
      content: "React Node ",
    },
    {
      domaine: "Base de données",
      content: "MySQL PostgreSQL FireBase MongoDB",
    },
    {
      domaine: "Front-end",
      content: "HTML CSS Javascript",
    },
    {
      domaine: "Back-end",
      content: "PHP Python Django",
    },
    {
      domaine: "Autre",
      content: "REST API",
    },
  ];
  const listProject = [
    {
      img: "./poker.png",
      language: "Python",
      title: "Poker",
      description: "Jeu Poker contre une IA",
      link: "https://github.com/Wizuha/Poker",
    },
    {
      img: "Accueil.png",
      language: "HTML CSS Javascript PHP",
      title: "Social Network : Classlink",
      description: "Réseau Social pour étudiant",
      link: "https://github.com/Wizuha/Social-Network-Classlink",
    },
    {
      img: "./OIKOS.png",
      language: "HTML CSS Javascript PHP",
      title: "OIKOS",
      description: "Site de location immobilier",
      link: "https://github.com/Wizuha/OIKOS-Website-Project-FullStack",
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
                  <span className="DF">Développeur Full-Stack</span>
                </h1>
              </div>
              <div className="presentation2">
                <p>
                  Je prépare actuellement un Bachelor Concepteur Développeur de
                  solution digitale en 2ème Année.
                </p>
              </div>
              <div className="contactMe">
                <a href="mailto:williams_wandji@yahoo.fr">Contactez-moi !!!</a>
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
        <div className="project" id="project">
          <div className="header_project">
            <div className="title">
              <p>
                <span>#</span>project
              </p>
              <div className="line_title"></div>
            </div>
            {/* <div className="view_all">
              <a href="">View all ➜ </a>
            </div> */}
          </div>
          <div className="project_all">
            {listProject.map((project, index) => (
              <Card content={project}></Card>
            ))}
          </div>
          <div className="skill_all" id="skills">
            <div className="skill_header">
              <div className="title">
                <p>
                  <span>#</span>skills
                </p>
                <div className="line_title"></div>
              </div>
            </div>
            <div className="content_skill_all"></div>
            <div className="skill_content">
              <div className="skill_all_left">
                <img src="./Group 36.png" alt="" />
              </div>
              <div className="skill_all_right">
                {listSkill.map((skill, index) => (
                  <Skills content={skill}></Skills>
                ))}
              </div>
            </div>
          </div>
          <div className="aboutMe" id="about-me">
            <div className="aboutMe_left">
              <div className="title">
                <p>
                  <span>#</span>about-me
                </p>
                <div className="line_title"></div>
              </div>
              <div className="aboutMe_content">
                <p>
                  Salut, je suis WANDJI Williams!
                  <br />
                  <br />
                  Je suis un étudiant de 23 ans à l'école du numérique HETIC. Je
                  suis spécialisé dans le développement Full-Stack et je vis
                  actuellement dans la banlieue Parisienne.
                  <br />
                  <br />
                  Le monde du développement web s'est ouvert à moi il y a peu de
                  temps, après ma lassitude des petits boulots. J'ai cherché un
                  métier qui me permettrait de mélanger mes deux passions, la
                  découverte et la création.
                </p>
              </div>
            </div>
            <div className="aboutMe_right">
              <img src="./Group 50.png" alt="" />
            </div>
          </div>
          <div className="contacts" id="contact-me">
            <div className="title">
              <p>
                <span>#</span>contacts
              </p>
              <div className="line_title"></div>
            </div>
            <div className="contact_content">
              <div className="contact_left">
                <p>
                  Je suis interessé par une opportunité freelance ! Alors si
                  vous êtes interessés par mon profil n'hésitez pas à me
                  contacter.
                </p>
              </div>
              <div className="contact_right">
                <p className="title_contact_right">Envoyez-moi un message !</p>
                <div className="contact_right_socialNetwork">
                  <a
                    href="https://discord.com/channels/@me"
                    className="discord"
                  >
                    <div className="logo_discord">
                      {" "}
                      <img src="./Vector_discord.png" alt="discord_logo" />
                    </div>
                    <div className="my_discord">
                      <p>ocho#6415</p>
                    </div>
                  </a>
                  <a href="mailto:williams_wandji@yahoo.fr" className="mail">
                    <div className="logo_mail">
                      <img src="./Vector_mail.png" alt="mail_logo" />
                    </div>
                    <div className="my_mail">
                      <p>williams_wandji@yahoo.fr</p>
                    </div>
                  </a>
                  <p></p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
