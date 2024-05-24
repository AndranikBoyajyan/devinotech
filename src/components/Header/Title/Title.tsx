import { useNavigate } from 'react-router';
import './Title.css'

const Title = () => {
  const navigate = useNavigate()
  const handleOnClick = () => {
    navigate('/')
  }
  return <div className='title' onClick={handleOnClick} >
    <h2 className="titleText">DEVINNOTECH </h2>
  </div>;
};

export default Title;
