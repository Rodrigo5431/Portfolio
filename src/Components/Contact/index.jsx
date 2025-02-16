import { useContext } from "react";
import { AuthContext } from "../../Context/Auth";

import { useDarkMode } from "../../Context/DarkContext";
import { ContactForm, ContactMe, TextInput, Title, TitleInput } from "./Contact.styles";
export default function Contact() {
  const [language] = useContext(AuthContext);
  const { darkmode } = useDarkMode();

  return (
    <ContactMe>
      <Title darkmode={darkmode?"dark-mode":"light-mode"}>{language ? "Entrar em contato" : "Contact Me"}</Title>
      <ContactForm>
        <TitleInput></TitleInput>
        <TextInput></TextInput>
      </ContactForm>
    </ContactMe>
  );
}
