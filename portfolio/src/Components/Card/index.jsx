import { Container, Title, TechnologyList, TechnologyItem, Separation } from "./Card.styles";

export default function Card({ title, languages = [] }) { 
    return (
        <Container>
            <Title>{title}</Title>
            <Separation></Separation>
            <TechnologyList>
                {languages.map((lang, index) => (
                    <TechnologyItem key={index}>{lang}</TechnologyItem>
                ))}
            </TechnologyList>
        </Container>
    );
}
