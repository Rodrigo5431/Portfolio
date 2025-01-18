import { useState } from "react";
import { FiMoon, FiSun } from "react-icons/fi";
import { Link } from "react-router-dom";
import { useDarkMode } from "../../Context/DarkContext";
import "./Header.module.css";
import {
  Container,
  DarkModeSwitch,
  ListComponents,
  ListNavigation,
  Navigation,
  Title,
  Menu,
} from "./Header.styles";

export default function Header() {
  const { darkMode, toggleDarkMode } = useDarkMode();
  const [hamburguer, setHamburguer] = useState(false);

  const toggleMenu = () => {
    setHamburguer(!hamburguer);
    if (!hamburguer) {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };
  return (
    <Container darkMode={darkMode}>
      <Title darkMode={darkMode}>&lt;Rodrigo/&gt;</Title>
      <Navigation>
        <ListNavigation>
          {darkMode ? (
            <FiSun style={{ width: "30px", height: "30px", color: "#fff" }} />
          ) : (
            <FiMoon style={{ width: "30px", height: "30px" }} />
          )}
          <DarkModeSwitch
            darkMode={darkMode}
            onClick={toggleDarkMode}
          ></DarkModeSwitch>
          <Menu hamburguer={hamburguer}>
            <Link style={{ textDecoration: "none" }} to="/projects">
              <ListComponents darkMode={darkMode}>About</ListComponents>
            </Link>
            <Link style={{ textDecoration: "none" }} to="/projects">
              <ListComponents darkMode={darkMode}>Projects</ListComponents>
            </Link>
            <Link style={{ textDecoration: "none" }} to="/projects">
              <ListComponents darkMode={darkMode}>Skills</ListComponents>
            </Link>
          </Menu>
        </ListNavigation>
      </Navigation>
    </Container>
  );
}
