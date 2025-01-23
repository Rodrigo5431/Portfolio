import teste from '../../assets/Carga.jpg';
import Header from "../../Components/Header";
import About from "../../Components/About";
import { Apresentation, Container, ImageMe, MeSection, Title } from "./Home.styles";

export default function () {
  return (
    <Container>
      <Header />
      <MeSection>
        <Apresentation>
          <Title>Rodrigo <br/>Carvalho Lima</Title>
          <ImageMe src={teste}></ImageMe>
        </Apresentation>
      </MeSection>
      <About/>
    </Container>
  );
}
