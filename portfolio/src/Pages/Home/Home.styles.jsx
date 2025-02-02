import { styled } from "styled-components";

export const Container = styled.main`
  display: flex;
  flex-direction: column;
`;

// export const MeSection = styled.section`
//   display: flex;
//   flex-direction: row;
//   justify-content: space-between;
//   width: 100%;

//   @media (max-width: 800px) {
//     justify-content: center;
//     align-items: center;
//   }
// `;
export const Title = styled.h1`
  color: #926ac1;
  font-size: 5rem;
  margin-left: 200px;

  @media (max-width: 1200px) {
    font-size: 3rem;
    margin: 0;
    text-align: center;
  }
`;
export const Apresentation = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-top: 200px;
  width: 100%;


  @media (max-width: 800px) {
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
`;
export const ImageMe = styled.img`
  width: 500px;
  height: 500px;
  border-radius: 50px;
  margin-right: 150px;

  @media (max-width: 1400px) {
    margin-left:50px ;

  }
  @media (max-width: 1200px) {
    width: 350px;
    height: 350px;
  }
  @media (max-width: 800px) {
    width: 300px;
    height: 300px;
    margin: 0;
    margin-top: 70px;
  }
`;
export const ButtonDownload = styled.button`
  font-family: Arial, Helvetica, sans-serif;
  font-weight: 800;
  font-size: 22px;
  padding: 5px 50px;
  color: #fff;
  background-image: linear-gradient(135deg, #4b2c63, #7b2a8f);
  border: 0;
  border-radius: 10px;
  cursor: pointer;
  margin-top: 40px;
  text-decoration: none;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.3), 0 0 15px rgba(123, 42, 143, 0.6);
  transition: all 0.3s ease-in-out;

  &:hover {
    background-image: linear-gradient(135deg, #7b2a8f, #4b2c63);
    box-shadow: 0 6px 12px rgba(0, 0, 0, 0.3), 0 0 20px rgba(123, 42, 143, 0.8);
    transform: scale(1.05);
  }

  @media (max-width: 650px) {
    width: 50px;
    font-size: 15px;
}
`;
