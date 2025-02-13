import { Container, Title } from "./Qualifications.styles";
import Header from "../../Components/Header"
import { useContext } from "react";
import { AuthContext } from "../../Context/Auth";
import { useDarkMode } from "../../Context/DarkContext";

export default function Qualifications(){

    const [language] = useContext(AuthContext);
    const {darkmode} = useDarkMode();
    
    return(
        <Container>
            <Header/>

            <Title darkmode ={ darkmode? "dark-mode":"light-mode"}>{language?"Formações":"Qualifications"}</Title>
        </Container>
    )
}