import { styled } from "styled-components";

export const ContactMe = styled.section`
display: flex;
flex-direction: column;
align-items: center;
margin-top: 150px;
`

export const Title = styled.h1`
  color: ${({ darkmode }) => (darkmode === "dark-mode" ? "#926ac1" : "#ff4500")};
  font-size: 4rem;

`
export const ContactForm = styled.form`
display: flex;
background-color: ${({ darkmode }) =>darkmode ==="dark-mode"? "#031016": "#082836"};
width: 50%;
flex-direction: column;
gap: 20px;
`
export const TitleInput = styled.h2`
display: flex;
background-color: ${({ darkmode }) =>darkmode ==="dark-mode"? "#031016": "#082836"};
width: 50%;
flex-direction: column;
gap: 20px;
`
export const TextInput = styled.textarea`
display: flex;
background-color: ${({ darkmode }) =>darkmode ==="dark-mode"? "#031016": "#082836"};
width: 50%;
flex-direction: column;
gap: 20px;
`