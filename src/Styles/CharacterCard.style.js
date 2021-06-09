import styled from 'styled-components';

export const Card = styled.div`
  position: relative;
  width: 350px;
  height: 420px;
  margin: 10px auto;
  padding: 10px;
  background-color: #2e333d;
  border-radius: 15px;

  @media only screen and (max-width: 768px){
    width: 300px;
    height: 380px;
  }
`

export const CardImg = styled.img`
  width: 80%;
  height: 60%;
  margin-bottom: 10px;
  object-position: top;
  border-radius: 50%;
  
  @media only screen and (max-width: 768px){
    width: 83%;
    height: 64%;
    margin-bottom: 5px;
  }
`

export const Heading = styled.h2`
  margin-bottom: 12px;
  font-size: 28px;
  
  @media only screen and (max-width: 768px){
    margin-bottom: 3px;
    font-size: 18px;
  }
`