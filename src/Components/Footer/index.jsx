import React from "react";
import { FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";
import { Container, Icon, Icons, PositionUser, Title, User } from "./footer.styles";
import { useDarkMode } from "../../Context/DarkContext";

export default function Footer() {
  const { darkmode } = useDarkMode();


  return (
    <Container>
      <PositionUser>
        <User>
          <Title darkmode={darkmode ? "dark-mode" : "light-mode"}>Rodrigo</Title>
          <Icons>
          <Icon href="https://github.com/Rodrigo5431">
            <FaGithub />
          </Icon>
          <Icon href="https://www.instagram.com/rodrigo_karvalho/">
            <FaInstagram />
          </Icon>
          <Icon href="https://www.linkedin.com/in/devrodrigo-carvalho/">
            <FaLinkedin />
          </Icon >
          </Icons>
        </User>
      </PositionUser>
    </Container>
  );
}