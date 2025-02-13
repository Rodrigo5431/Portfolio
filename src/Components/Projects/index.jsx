import { useContext, useEffect, useState } from "react";
import {
  Container,
  Error,
  ProjectList,
  Title,
  LoadMoreButton,
} from "./Projects.styles";
import { AuthContext } from "../../Context/Auth";
import { handlePosts } from "../../services/api";
import CardProject from "../CardProject";
import { useDarkMode } from "../../Context/DarkContext";
import { img } from "framer-motion/client";

export default function Technologies() {
  const [language] = useContext(AuthContext);
  const [posts, setPosts] = useState([]);
  const [visibleCount, setVisibleCount] = useState(6);
  const [error, setError] = useState(false);
  const {darkmode} = useDarkMode();

  async function fetchPosts() {
    try {
      const data = await handlePosts();
      if (Array.isArray(data)) {
        setPosts(data);
        setError(false);
      } else {
        setError(true);
      }
    } catch (error) {
      console.error("Erro ao buscar posts:", error);
      setError(true);
    }
    
  }

  useEffect(() => {
    fetchPosts();
  }, []);

  

  return (
    <Container id="projects">
      <Title darkmode={darkmode ? "dark-mode" : "light-mode"}>{language ? "<Projetos/>" : "<Projects/>"}</Title>

      {error ? (
        <Error>Não foi possível conectar à API</Error>
      ) : (
        <>
          <ProjectList>
            {posts.slice(0, visibleCount).map((post, index) => (
              <CardProject key={index} post={post} />
            ))}
          </ProjectList>

          {posts.length > visibleCount && (
            <LoadMoreButton onClick={() => setVisibleCount(visibleCount + 6)}>
              Ver mais
            </LoadMoreButton>
          )}
        </>
      )}
    </Container>
  );
}
