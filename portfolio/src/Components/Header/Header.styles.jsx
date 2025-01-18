import { styled } from "styled-components";

export const Container = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  padding: 10px 20px;
  transition: background-color 0.3s ease, color 0.3s ease;
`;

export const Title = styled.h1`
  font-size: 2.2em;
  color: ${({ darkMode }) => (darkMode ? "#fff" : "#333")};
  transition: color 0.8s ease;

`;

export const Navigation = styled.nav`
display: flex;
flex-direction: row;
`;

export const ListNavigation = styled.ul`
  display: flex;
  flex-direction: row;
  align-items: center;
  list-style: none;
  gap: 5px;
`;
export const ListComponents = styled.li`
  font-size: 1.8em;
  font-weight: 600;
  color: ${({ darkMode }) => (darkMode ? "#fff" : "#333")};
  transition: color 0.8s ease;
  cursor: pointer;


  &:last-child{
  margin-right: 85px;
}
`;

export const DarkModeSwitch = styled.label`
  position: relative;
  display: inline-block;
  width: 50px;
  height: 25px;
  background-color: ${({ darkMode }) => (darkMode ? "#444" : "#ccc")};
  border-radius: 50px;
  cursor: pointer;
  transition: background-color 0.3s ease;
  margin-left: 10px;
  margin-right: 35px;

  &::before {
    content: "";
    position: absolute;
    top: 3px;
    left: 3px;
    width: 19px;
    height: 19px;
    background-color: white;
    border-radius: 50%;
    transition: transform 0.3s ease;
    transform: ${({ darkMode }) => (darkMode ? "translateX(25px)" : "translateX(0)")};
  }
`;
export const Menu = styled.div`
  display: flex;
  flex-direction: row;
  transition: transform 0.3s ease-in-out;

  @media(max-width:800px){ 
     display: none;
     background-color: aliceblue;
     width: 25px;


  }
`;

