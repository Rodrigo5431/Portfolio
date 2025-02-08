import { styled } from 'styled-components';

export const Container = styled.section`
display: flex;
flex-direction: column;
margin-top: 100px;
width: 99%;
justify-content: center;
align-items: center;
gap: 50px;
`
export const Title = styled.h1`
color: #926ac1;
font-size: 3rem;
`
export const ProjectList = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr); /* 3 colunas */
  gap: 20px; /* Espaçamento entre os itens */
  justify-content: center;
  
  @media (max-width: 1024px) {
    grid-template-columns: repeat(2, 1fr); /* 2 colunas em telas médias */
  }

  @media (max-width: 768px) {
    grid-template-columns: repeat(1, 1fr); /* 1 coluna no mobile */
  }
`;
export const Error = styled.h2`
color: red;
`
export const LoadMoreButton = styled.button`
  margin: 20px auto;
  padding: 10px 20px;
  font-size: 16px;
  background: #007bff;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  
  &:hover {
    background: #0056b3;
  }
`;



