import { useNavigate } from "react-router-dom";
import { Container, ImageProject, TitleProject } from "./CardProject.styles";

export default function CardProject({ post }) {

  const navigate = useNavigate();

  function handleProject(id){
    navigate(`/project/${id}`, { state: { project: post } }); 

  }

  return(
    <Container onClick={()=>{handleProject(post.id)}}>
        <ImageProject src={post.image}></ImageProject>
        <TitleProject>{post.title}</TitleProject>
    </Container>

  )
}
