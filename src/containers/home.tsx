import React from 'react';
import logo from '../assets/logo.png';
import { Container, Row } from 'react-bootstrap';
import CustomButton from '../components/button';
import { useNavigate } from "react-router-dom";
const Home: React.FC = () => {
  const navigate = useNavigate();
  return <>
    <Container className='defaultFontText'>
    <Row className='center'> <img alt='love-o-meter logo' src={logo} className='logo'/></Row>
      We're conducting a super fun survey to figure out just how much love is in the air! Whether you're head over heels, simply infatuated, or just caught in the whims of life, we're eager to know. Don't worry; this questionnaire won't take itself too seriously. Feel free to answer with a touch of humor and a sprinkle of silliness!
      <Row  className='center'>Get ready for some giggles and share your results with friends for a dose of joy! Happy surveying! 🎉😄</Row>
      <CustomButton  buttonText="Let's go" buttonFunction={()=>{navigate('/survey')}}/>
    </Container>
  </>;
};

export default Home;