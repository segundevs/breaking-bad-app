import svg from '../img/warning.svg';

const Error = () => {
  return (
    <div className="error-container">
      <h1>This is an error</h1>
      <img src={svg} alt="error"/>
    </div>
  )
}

export default Error
