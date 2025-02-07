import { styled } from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 480px;
  background-color: #031016;
  height: 580px;
`;
export const Title = styled.h1`
  color: #926ac1;
  font-size: 3rem;
`;
export const Separation = styled.div`
  background-image: linear-gradient(135deg, #804ba8, #b53ed3);
  align-self: center;
  width: 85%;
  height: 20px;
  margin-bottom: 50px;
  border-radius: 25px;
`;
export const TechnologyList = styled.ul`
  display: flex;
  padding: 0;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  list-style: none;
`;
export const TechnologyItem = styled.li`
  margin-bottom: 25px;
  font-size: 2rem;
  color: #926ac1;
  transition: all 0.3s ease-in-out;

  &:hover {
    color: #fff;
    background: linear-gradient(135deg, #7b2a8f, #4b2c63);
    border: 1px solid #fff;
    box-shadow: 0 0 15px rgba(123, 42, 143, 0.8), 0 0 25px rgba(75, 44, 99, 0.6);
    transform: scale(1.1);  
    border-radius: 10px;
    padding: 5px 10px; 
  }
`;

