import { useContext } from "react";
import { Container, Title } from "./Projects.styles";
import { AuthContext } from "../../Context/Auth";

export default function Technologies() {

    const [language] = useContext(AuthContext);

    return (
        <Container>
            <Title>&lt;Projetos/&gt;</Title>
        </Container>
    );
}
