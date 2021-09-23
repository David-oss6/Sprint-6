
import styled, { createGlobalStyle } from "styled-components";
import inicial from '../img/inicial.png'



export const GlobalStyle = createGlobalStyle`
body {
    text-Align: center;
    font-Size: 20px;
    margin: 5px;
    font-family: 'Hind', 'sans-serif';
    }
`;

///Pantalla inicial **************************

export const InitialDiv = styled.div`
background-position: center;
background-repeat: no-repeat;
background-size: cover;
height: 1000px ;

`;


export const InitialBtn = styled.button`
border: 3px solid ;
border-radius: 50px;
margin: 50px 30px 70px 30px;
background-color:  orange;
font-Size: 20px;
font-weight: bolder;
padding: 10px 40px;

&:hover{
    background-color:  #eca92bd5;
}
 `;

export const Myh1 = styled.h1`
color: orange;
text-shadow: 2px 0 0 #000, 0 -2px 0 #000, 0 2px 0 #000, -2px 0 0 #000;
`
export const Myp = styled.p`
color: #cac7c7;
text-shadow: 1px 0 0 #000, 0 -1px 0 #000, 0 1px 0 #000, -1px 0 0 #000;
`

export const InicialBack = styled.div`
background-image: url(${inicial});
background-position: center;
background-size: cover;
background-repeat: no-repeat;
padding: 10px 150px;
height: 1200px;
`
/// App y general **************************

export const Border = styled.div`
border-radius: 50px;
border: black solid 3px ;
margin: 35px;
padding: 20px;
background-color: ${({ activa }) => activa ? '#eca7ec' : 'lightgrey '};
opacity:  ${({ activa }) => activa ? '' : '0.6 '};
`;

export const BtnCss = styled.button`
border-radius: 5px;
margin: 5px 5px 5px 5px;
background-color:  lightblue;
font-Size: 40px;
padding: 35px 90px;
width: 49%;


&:hover{
    background-color:  #33E3FF;
}
 `;
