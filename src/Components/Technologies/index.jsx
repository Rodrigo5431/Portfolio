import { useContext } from "react";
import CardTechnoloy from "../CardTechnology";
import { Container } from "./Technologies.styles";
import { AuthContext } from "../../Context/Auth";

export default function Technologies() {

    const [language] = useContext(AuthContext);

    return (
        <Container id="skills">
            <CardTechnoloy title="Front-End" languages={["Html", "Css", "JavaScript", "React", "React Native"]} />
            <CardTechnoloy title="Back-End" languages={["Java", "Spring Boot", "PostgreSQL","MySQL" ]} />
            <CardTechnoloy title={language ? "Ferramentas" : "Tools"} languages={["Git", "Docker", "Kafka"]} />
        </Container>
    );
}
