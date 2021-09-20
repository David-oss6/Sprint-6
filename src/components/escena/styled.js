
import styled, { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
body {
    text-Align: "center";
    font-Size: "20px";
    margin: "5px";
    font-family: "'Hind', 'sans-serif'";
    }
`;

export const Border = styled.div`
border: "black solid 2px ";
margin: "15px";
padding: "10px";
`;

export const BtnCss = styled.button`
margin: "10px 30px 10px 30px";
background-color:  "lightblue";
font-Size: "20px";
padding: "10px 40px";

&:hover{
    background-color:  "#33E3FF"
}

 `;
