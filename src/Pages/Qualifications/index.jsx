import { Certificates, Container, Title } from "./Qualifications.styles";
import Header from "../../Components/Header";
import { useContext } from "react";
import { AuthContext } from "../../Context/Auth";
import { useDarkMode } from "../../Context/DarkContext";
import CardQualification from "../../Components/CardQualification";
import fullstack from "../../assets/fullstack.jpg";

export default function Qualifications() {
  const [language] = useContext(AuthContext);
  const { darkmode } = useDarkMode();

  return (
    <Container>
      <Header />
      <Title darkmode={darkmode ? "dark-mode" : "light-mode"}>
        {language ? "Formações" : "Qualifications"}
      </Title>
      <Certificates>
        <CardQualification
          title="Programador Front-End"
          duration="09/2024 - 11/2024"
          certificate={fullstack}
          description="Curso de Qualificação Profissional, onde pude aprender o desenvolvimento web hooks como useState, useEffect.
           Componentizacao. com projetos praticos solos e em grupos "
          technologies={["Html", "Css", "JavaScript", "react"]}
        />
        <CardQualification
          title="Programador Back-End"
          duration="09/2024 - 11/2024"
          certificate={fullstack}
          description="Curso de Qualificação Profissional, onde pude aprender o desenvolvimento web hooks como useState, useEffect.
           Componentizacao. com projetos praticos solos e em grupos "
          technologies={["java", "Spring", "Postgresql"]}
        />
      </Certificates>
    </Container>
  );
}
