import { useContext } from 'react';
import teste from '../../assets/Carga.jpg';
import About from "../../Components/About";
import Header from "../../Components/Header";
import { Apresentation, ButtonDownload, Container, ImageMe, Title } from "./Home.styles";
import { AuthContext } from '../../Context/Auth';

export default function () {
  const [language] = useContext(AuthContext);
  
  return (
    <Container>
      <Header />
      {language ? (
        <Apresentation>
          <Title>Rodrigo <br />Carvalho Lima <br />Programador Full Stack<br />
            <a href="../../archive/Curriculo - Rodrigo Carvalho Lima.pdf" download>
              <ButtonDownload>Baixar CV</ButtonDownload>
            </a>
          </Title>
          <ImageMe src={teste} />
        </Apresentation>
      ) : (
        <Apresentation>
          <Title>Rodrigo <br />Carvalho Lima <br />Full Stack Developer <br />
            <a href="../../archive/Curriculo - Rodrigo Carvalho Lima.docx" download>
              <ButtonDownload >Download CV</ButtonDownload>
            </a>
          </Title>
          <ImageMe src={teste} />
        </Apresentation>
      )}
      <About />
    </Container>
  );
}
