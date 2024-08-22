import styled from "styled-components";

export const Container = styled.div`
    display:flex;
    flex-direction: row;
    justify-content: center;
    gap:50px;
    flex-wrap: wrap;
`;

export const Card = styled.div`
    border: 1px solid blue; 
    border-radius:50px;   
    width:290px;
    // margin-right:50px;
    // margin-bottom:50px;
`;

export const Imagens = styled.img`
    margin-left: 40px;
    border: 1px solid #d3d3d3; 
    border-radius:50px;
    width: 200px;   
`;

export const Titulo = styled.h1 `    
    text-align: center;
    font-size: 1.2rem;
`

export const Descricao = styled.p `    
    text-align: center;
    font-weight: bold;
`


