import { ExternalLink, Github } from "lucide-react";
import { useContext, useState } from "react";
import { FaJava, FaReact, FaJs, FaLeaf } from "react-icons/fa";
import { FaDocker, FaPython } from "react-icons/fa";
import { SiTypescript } from "react-icons/si";

import { useLocation, useParams } from "react-router-dom";
import Header from "../../Components/Header";
import {
  Container,
  Description,
  ImageProject,
  InformationsArea,
  LinkGithub,
  LinkProject,
  LinksArea,
  ProjectInformations,
  Technologies,
  TechnologiesArea,
  TechnologyItem,
  TitleProject,
  TitleTechnology,
} from "./ProjectDetails.styles";
import { AuthContext } from "../../Context/Auth";

export default function ProjectDetails() {
  const { id } = useParams();
  const location = useLocation();
  const [project, setProject] = useState(location.state.project || {});
  const [ language ] = useContext(AuthContext);

  const techIcons = {
    Java: <FaJava size={20} color="#f89820" />,
    "Spring Boot": <FaLeaf size={20} color="#6db33f" />,
    React: <FaReact size={20} color="#61DBFB" />,
    JavaScript: <FaJs size={20} color="#f7df1e" />,
    Docker: <FaDocker size={20} color="#2496ED" />,
    TypeScript: <SiTypescript size={20} color="#3178C6" />,
    Python: <FaPython size={20} color="#306998" />,
  };

  const techList = Array.isArray(project.technologies)
    ? project.technologies
    : typeof project.technologies === "string";

  return (
    <Container>
      <Header />
      <ProjectInformations>
        <ImageProject src={project.image} alt={project.title} />
        <InformationsArea>
          <TitleProject>{project.title}</TitleProject>
          <Description>{project.description}</Description>

          <TechnologiesArea>
            {language ? (
              <TitleTechnology>Tecnologias Usadas</TitleTechnology>
            ) : (
              <TitleTechnology>Technologies Used</TitleTechnology>
            )}

            <Technologies>
              {techList.length > 0 ? (
                techList.map((tech, index) => (
                  <TechnologyItem key={index}>
                    {techIcons[tech] || "🛠"} {tech}
                  </TechnologyItem>
                ))
              ) : (
                <p style={{ color: "#bbb" }}>Nenhuma tecnologia informada.</p>
              )}
            </Technologies>
          </TechnologiesArea>

          <LinksArea>
            <LinkProject href={project.link} target="_blank">
              <ExternalLink size={20} /> Acessar Projeto
            </LinkProject>
            <LinkGithub href={project.githubLink} target="_blank">
              <Github size={20} /> GitHub
            </LinkGithub>
          </LinksArea>
        </InformationsArea>
      </ProjectInformations>
    </Container>
  );
}
