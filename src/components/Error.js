import svg from '../img/warning.svg';
import { FaHome } from "react-icons/fa";
import {  Link } from 'react-router-dom';

const Error = () => {

  return (
    <div className="error-container">
      <h2>You look lost, let's get you back home</h2>
      <img src={svg} alt="error"/>

      <Link className="btn" to="/" style={errorStyle}><FaHome /> Go home</Link>
    </div>
  )
}

const errorStyle = {
  color: '#fff',
  textDecoration: 'none',
  position: 'absolute',
  width: '23%',
  bottom: '0',
  right: '40%'  
}

export default Error
