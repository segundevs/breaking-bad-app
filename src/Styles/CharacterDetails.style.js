import styled from 'styled-components';

export const CharacterCard = styled.section`
  background-color: #2e333d;
  position: relative;
  display: flex;
  margin: 10px auto;
  width: 80%;
  height: 350px;

  @media only screen and (max-width: 768px){
    width: 100%;
    display: flex;
    flex-direction: column;
    border-top-right-radius: 30px;
    border-top-left-radius: 30px;
  }
`

export const CardImg = styled.img`
  width: 45%;
  height: 100%;
  object-position: top;
  border-top-right-radius: 30px;
  border-bottom-right-radius: 30px;

  @media only screen and (max-width: 768px){
    width: 100%;
    border-top-right-radius: 30px;
    border-top-left-radius: 30px;
    border-bottom-right-radius: 0;
  }
  
`

export const DetailsCard = styled.div`
    padding: 20px;

  @media only screen and (max-width: 768px){
    background-color: #2e333d;
    padding: 20px auto;
  }
`
/*
export const StyledTag = styled.span`
  background-color: ${props => props.bg ? props.bg : '#66f1e1'};
  color: #272b35;
  padding: 8px;
  border-radius: 10px;
`
*/

export const StyledTagged = styled.span`
  font-size: 18px;
  font-weight: 400;
  text-decoration: none;
  color: #fff;
  padding: 3px 8px;
  background-color: transparent;
  border-radius: 18px;
  border: 1px solid #66f1e1;
`

export const StyledHeading = styled.h2`
  margin-bottom: 10px;
  padding: 5px 0;
  line-height: 1.3;
  letter-spacing: 1.2px;
`