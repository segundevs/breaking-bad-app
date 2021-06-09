import styled from 'styled-components';

export const GridContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 1rem;
  text-align: center;
  color: #fff;

  @media only screen and (max-width: 768px){
    display: flex;
    flex-direction: column;
  }
`