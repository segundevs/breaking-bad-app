import Loader from "react-loader-spinner";
import styled from 'styled-components';

const StyledLoader = styled.div`
  position: absolute;
  left: 50%;
  top: 50%;

  @media only screen and (max-width: 768px){
    left: 40%;
    top: 40%;
  }
`

const Loading = () => {
  return (
    <StyledLoader>
      <Loader className="loader"
        type="BallTriangle"
        color="#fff"
        height={100}
        width={100}
        timeout={3000}
      />
    </StyledLoader>
  )
}

export default Loading
