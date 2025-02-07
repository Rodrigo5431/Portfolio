import { useContext, useEffect, useState } from "react";
import { FiMoon, FiSun } from "react-icons/fi";
import { Link } from "react-router-dom";
import { useDarkMode } from "../../Context/DarkContext";
import "./Header.module.css";
import brasil from "../../assets/brasil.png";
import eua from "../../assets/estadosUnidos.png";
import {
  Container,
  DarkModeSwitch,
  ListComponents,
  ListNavigation,
  Navigation,
  Title,
  Menu,
  MenuIcon,
  MenuLine,
  MenuBurguer,
  NavigationSection,
  Flag,
} from "./Header.styles";
import { AuthContext } from "../../Context/Auth";

export default function Header() {
  const { darkmode, toggleDarkMode } = useDarkMode();
  const [hamburguer, setHamburguer] = useState(false);
  const [language, setLanguage] = useContext(AuthContext);

  useEffect(() => {
    localStorage.setItem("language", language);
  }, [language]);

  return (
    <Container darkmode={darkmode ? "dark-mode" : "light-mode"}>
      <NavigationSection>
        <Title darkmode={darkmode ? "dark-mode" : "light-mode"}>
          &lt;Rodrigo/&gt;
        </Title>
        <Navigation>
          <ListNavigation>
            <Menu>
              <Flag
                src={brasil}
                onClick={() => setLanguage(true)}
                style={{ opacity: language ? 1 : 0.5, cursor: "pointer" }}
              />
              <Flag
                src={eua}
                onClick={() => setLanguage(false)}
                style={{ opacity: !language ? 1 : 0.5, cursor: "pointer" }}
              />
              {darkmode ? (
                <FiMoon
                  style={{ width: "30px", height: "30px", color: "#fff" }}
                />
              ) : (
                <FiSun
                  style={{ width: "30px", height: "30px", color: "#fff" }}
                />
              )}
              <DarkModeSwitch
                darkmode={darkmode ? "dark-mode" : "light-mode"}
                onClick={toggleDarkMode}
              ></DarkModeSwitch>
              {language ? (
                <Menu>
                  <div
                    onClick={() => {
                      const aboutSection = document.getElementById("about");
                      aboutSection.scrollIntoView({ behavior: "smooth" });
                    }}
                  >
                    <ListComponents
                      darkmode={darkmode ? "dark-mode" : "light-mode"}
                    >
                      Sobre Mim
                    </ListComponents>
                  </div>
                  <div
                    onClick={() => {
                      const aboutSection = document.getElementById("projects");
                      aboutSection.scrollIntoView({ behavior: "smooth" });
                    }}
                  >
                    <ListComponents
                      darkmode={darkmode ? "dark-mode" : "light-mode"}
                    >
                      Projetos
                    </ListComponents>
                  </div>
                  <div
                    onClick={() => {
                      const aboutSection = document.getElementById("skills");
                      aboutSection.scrollIntoView({ behavior: "smooth" });
                    }}
                  >
                    <ListComponents
                      darkmode={darkmode ? "dark-mode" : "light-mode"}
                      style={{ marginRight: "35px" }}
                    >
                      Habilidades
                    </ListComponents>
                  </div>
                </Menu>
              ) : (
                <Menu>
                  <div
                    onClick={() => {
                      const aboutSection = document.getElementById("about");
                      aboutSection.scrollIntoView({ behavior: "smooth" });
                    }}
                  >
                    <ListComponents
                      darkmode={darkmode ? "dark-mode" : "light-mode"}
                    >
                      About Me
                    </ListComponents>
                  </div>
                  <div
                  onClick={() => {
                    const aboutSection = document.getElementById("projects");
                      aboutSection.scrollIntoView({ behavior: "smooth" });
                  }}
                >
                    <ListComponents
                      darkmode={darkmode ? "dark-mode" : "light-mode"}
                    >
                      Projects
                    </ListComponents>
                  </div>
                  <div 
                  onClick={() => {
                    const aboutSection = document.getElementById("skills");
                      aboutSection.scrollIntoView({ behavior: "smooth" });
                  }}
                >
                    <ListComponents
                      darkmode={darkmode ? "dark-mode" : "light-mode"}
                      style={{ marginRight: "35px" }}
                    >
                      Skills
                    </ListComponents>
                  </div>
                </Menu>
              )}
            </Menu>
            <MenuIcon onClick={() => setHamburguer(!hamburguer)}>
              <MenuLine></MenuLine>
              <MenuLine></MenuLine>
              <MenuLine></MenuLine>
            </MenuIcon>
          </ListNavigation>
        </Navigation>
      </NavigationSection>
      {hamburguer && (
        <MenuBurguer darkmode={darkmode ? "dark-mode" : "light-mode"}>
          {language ? (
            <MenuBurguer darkmode={darkmode ? "dark-mode" : "light-mode"}>
              <div style={{ marginLeft: "25px" }}>
                {darkmode ? (
                  <FiSun
                    style={{ width: "30px", height: "30px", color: "#fff" }}
                  />
                ) : (
                  <FiMoon style={{ width: "30px", height: "30px" }} />
                )}
                <DarkModeSwitch
                  darkmode={darkmode ? "dark-mode" : "light-mode"}
                  onClick={toggleDarkMode}
                ></DarkModeSwitch>
                <Flag
                  src={brasil}
                  onClick={() => setLanguage(true)}
                  style={{ opacity: language ? 1 : 0.5, cursor: "pointer" }}
                />
                <Flag
                  src={eua}
                  onClick={() => setLanguage(false)}
                  style={{ opacity: !language ? 1 : 0.5, cursor: "pointer" }}
                />
              </div>

              <Link style={{ textDecoration: "none" }} to="/AboutMe">
                <ListComponents
                  darkmode={darkmode ? "dark-mode" : "light-mode"}
                >
                  Sobre Mim
                </ListComponents>
              </Link>
              <Link style={{ textDecoration: "none" }} to="/projects">
                <ListComponents
                  darkmode={darkmode ? "dark-mode" : "light-mode"}
                >
                  Projetos
                </ListComponents>
              </Link>
              <Link style={{ textDecoration: "none" }} to="/projects">
                <ListComponents
                  darkmode={darkmode ? "dark-mode" : "light-mode"}
                >
                  Habilidades
                </ListComponents>
              </Link>
            </MenuBurguer>
          ) : (
            <MenuBurguer darkmode={darkmode ? "dark-mode" : "light-mode"}>
              <div style={{ marginLeft: "25px" }}>
                {darkmode ? (
                  <FiSun
                    style={{ width: "30px", height: "30px", color: "#fff" }}
                  />
                ) : (
                  <FiMoon style={{ width: "30px", height: "30px" }} />
                )}
                <DarkModeSwitch
                  darkmode={darkmode ? "dark-mode" : "light-mode"}
                  onClick={toggleDarkMode}
                ></DarkModeSwitch>
                <Flag
                  src={brasil}
                  onClick={() => setLanguage(true)}
                  style={{ opacity: language ? 1 : 0.5, cursor: "pointer" }}
                />
                <Flag
                  src={eua}
                  onClick={() => setLanguage(false)}
                  style={{ opacity: !language ? 1 : 0.5, cursor: "pointer" }}
                />
              </div>

              <Link style={{ textDecoration: "none" }} to="/AboutMe">
                <ListComponents
                  darkmode={darkmode ? "dark-mode" : "light-mode"}
                >
                  About
                </ListComponents>
              </Link>
              <Link style={{ textDecoration: "none" }} to="/projects">
                <ListComponents
                  darkmode={darkmode ? "dark-mode" : "light-mode"}
                >
                  Projects
                </ListComponents>
              </Link>
              <Link style={{ textDecoration: "none" }} to="/projects">
                <ListComponents
                  darkmode={darkmode ? "dark-mode" : "light-mode"}
                >
                  Skills
                </ListComponents>
              </Link>
            </MenuBurguer>
          )}
        </MenuBurguer>
      )}
    </Container>
  );
}
