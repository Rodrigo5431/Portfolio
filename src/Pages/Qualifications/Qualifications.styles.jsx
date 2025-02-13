import styled from "styled-components";

export const Container = styled.main`
display: flex;
flex-direction: column;
`
export const Title = styled.h1`
  color: ${({ darkmode }) => (darkmode === "dark-mode" ? "#926ac1" : "#ff4500")};
  font-size: 5rem;
  text-align: center;
  margin-top: 50px;

  @media (max-width: 1200px) {
    display: flex;
    flex-direction: column;
    font-size: 3rem;
    margin-left: 50px;
    text-align: center;
    align-items: center;
}
  @media (max-width: 800px) {
  margin: 0;
}
`