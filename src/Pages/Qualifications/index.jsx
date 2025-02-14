import { Certificates, Container, Title } from "./Qualifications.styles";
import Header from "../../Components/Header";
import { useContext } from "react";
import { AuthContext } from "../../Context/Auth";
import { useDarkMode } from "../../Context/DarkContext";
import CardQualification from "../../Components/CardQualification";
import fullstack from "../../assets/fullstack.jpg";
import frontend from "../../assets/frontend.jpg";
import backend from "../../assets/backend.jpg";
import ingles from "../../assets/ingles.png";

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
          certificate={frontend}
          description="Curso de Qualificação Profissional em desenvolvimento web,
           com foco em hooks como useState e useEffect,
           componentização e projetos práticos individuais e em grupo."
          technologies={["Html", "Css", "JavaScript", "react"]}
        />
          <CardQualification
            title="Inglês Avançado"
            duration="12/2019 - 03/2024"
            certificate={ingles}
            description="Curso de Qualificação Profissional, onde pude aprender o desenvolvimento web hooks como useState, useEffect.
             Componentizacao. com projetos praticos solos e em grupos "
            technologies={["usa"]}
          />
        <CardQualification
          title="Programador Back-End"
          duration="09/2024 - 11/2024"
          certificate={backend}
          description="Curso de Qualificação Profissional, onde pude aprender o desenvolvimento de API's restful,
           com foco em Spring Boot, Hibernate e JPA."
          technologies={["java", "Spring", "mysql"]}
        />
        <CardQualification
          title="Programador Full Stack"
          duration="09/2024 - 11/2024"
          certificate={fullstack}
          description="Curso de Qualificação Profissional, onde pude aprender o desenvolvimento de API's restful,
           com foco em Spring Boot, Hibernate e JPA."
           technologies={["java","react", "Spring", "Postgresql"]}
        />
      </Certificates>
    </Container>
  );
}
