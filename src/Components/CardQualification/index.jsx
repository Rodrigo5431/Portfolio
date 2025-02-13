import {
  FaCss3Alt,
  FaDocker,
  FaHtml5,
  FaJava,
  FaJs,
  FaReact,
} from "react-icons/fa";
import { SiSpring } from "react-icons/si";
import {
  Card,
  Certificate,
  Description,
  TechIcon,
  Technologies,
  Time,
  Title,
} from "./CardQualification.styles";

export default function CardQualification({
  title,
  duration,
  certificate,
  description,
  technologies,
}) {
  const iconMap = {
    html: <FaHtml5 />,
    css: <FaCss3Alt />,
    javascript: <FaJs />,
    react: <FaReact />,
    java: <FaJava />,
    docker: <FaDocker />,
    spring: <SiSpring />,
  };

  return (
    <Card>
      <Certificate src={certificate} alt="Certificate" />
      <Title>{title}</Title>
      <Time>{duration}</Time>
      <Description>{description}</Description>
      <Technologies>
        {Array.isArray(technologies) && technologies.length > 0 ? (
          technologies.map((tech) => (
            <TechIcon key={tech.toLowerCase()} $tech={tech.toLowerCase()}>
              {iconMap[tech.toLowerCase()]}
            </TechIcon>
          ))
        ) : (
          <p>Error</p>
        )}
      </Technologies>
    </Card>
  );
}
