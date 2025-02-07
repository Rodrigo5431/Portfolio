import { useContext } from "react";
import Card from "../Card";
import { Container } from "./Technologies.styles";
import { AuthContext } from "../../Context/Auth";

export default function Technologies() {

    const [language] = useContext(AuthContext);

    return (
        <Container>
            <Card title="Front-End" languages={["Html", "Css", "JavaScript", "React", "React Native"]} />
            <Card title="Back-End" languages={["Java", "Spring Boot", "PostgreSQL","MySQL" ]} />
            <Card title={language ? "Ferramentas" : "Tools"} languages={["Git", "Docker", "Kafka"]} />
        </Container>
    );
}
