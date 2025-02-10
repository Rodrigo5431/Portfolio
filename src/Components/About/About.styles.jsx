import { styled } from "styled-components";

export const Container = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 100px;
  font-size: 2.2rem;
`;
export const Title = styled.h1`
  color: ${({ darkmode }) =>
    darkmode === "dark-mode" ? "#926ac1" : "#ff4500"};
  font-size: 4rem;
`;
export const History = styled.h2`
  color: ${({ darkmode }) =>
    darkmode === "dark-mode" ? "#926ac1" : "black"};;
  font-size: 2rem;
  text-align: center;
  margin-inline: 5%;
`;

export const AboutMe = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
