import Card from "../Card";
import { Container } from "./Technologies.styles";

export default function Technologies() {
    return (
        <Container>
            <Card title="Front-End" languages={["Html", "Css", "JavaScript", "React"]} />
            <Card title="Back-End" languages={["Java", "Spring Boot", "PostgresSQL","MySql" ]} />
            <Card title="Ferramentas" languages={["Git", "Docker", "Kafka"]} />
            
        </Container>
    );
}
