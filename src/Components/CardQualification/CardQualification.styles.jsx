import { styled } from "styled-components";

export const Card = styled.div`
display: flex;
flex-direction: column;
width: 230px;
height: 620px;
border-radius: 25px;
padding: 10px;
background-color: #082836;
transition: all 0.3s ease-in-out;

&:hover {
    transform: scale(1.1);
  }

`
export const Certificate = styled.img`
  width: 230px;
  height: 200px;
  border-radius: 25px;
  margin-bottom: 10px;
  cursor: pointer;

  &:hover {
  }
`;
export const LinkImage = styled.a`
  width: 230px;
  height: 200px;
  border-radius: 25px;
  margin-bottom: 15px;
`;

export const Title = styled.h1`
font-size: 1.5rem;
color: #fff;
margin: 0;
`
export const Time = styled.h3`
color: #fff;
font-size: 1rem;
`
export const Description = styled.h3`
border-radius: 25px;
color: #fff;
`
export const Technologies = styled.h3`
  border-radius: 25px;
`;

const iconColors = {
  html: "#E34F26", 
  css: "#1572B6", 
  javascript: "#F7DF1E", 
  react: "#61DAFB", 
  java: "#007396",
  docker: "#2496ED", 
  spring: "#6DB33F",
  mysql: "#4479A1", 
  postgresql: "#336791", 
};

export const TechIcon = styled.div`
  display: inline-block;
  font-size: 2rem;
  margin: 0 10px;

  svg {
    fill: ${({ $tech }) => iconColors[$tech] || "inherit"};
  }
`;


