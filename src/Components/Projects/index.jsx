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

export default function Technologies() {
  const [language] = useContext(AuthContext);
  const [posts, setPosts] = useState([]);
  const [visibleCount, setVisibleCount] = useState(6); // Mostrar 6 inicialmente

  async function fetchPosts() {
    try {
      const data = await handlePosts();
      setPosts(data);
    } catch (error) {
      console.error("Erro ao buscar posts:", error);
    }
  }

  useEffect(() => {
    fetchPosts();
  }, []);

  return (
    <Container id="projects">
      {language ? (
        <Title>&lt; Projetos/&gt;</Title>
      ) : (
        <Title>&lt; Projects/&gt;</Title>
      )}

      <ProjectList>
        {posts.length > 0 ? (
          posts
            .slice(0, visibleCount)
            .map((post, index) => <CardProject key={index} post={post} />)
        ) : (
          <Error>Não foi possível conectar à API</Error>
        )}
      </ProjectList>

      {posts.length > visibleCount && (
        <LoadMoreButton onClick={() => setVisibleCount(visibleCount + 6)}>
          Ver mais
        </LoadMoreButton>
      )}
    </Container>
  );
}
