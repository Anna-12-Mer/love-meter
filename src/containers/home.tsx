import React from 'react';
import logo from '../assets/logo.png';
import { Container, Row } from 'react-bootstrap';
import CustomButton from '../components/button';
import { useNavigate } from "react-router-dom";
import { useTranslation } from 'react-i18next';
import LanguageSelector from '../components/languageSelector';

const Home: React.FC = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();
  return <>
    <Row className="languageSelector defaultFontText">
        <LanguageSelector />
    </Row>
    <Container className='defaultFontText'>
    <Row className='center'> <img alt='love-o-meter logo' src={logo} className='logo'/></Row>
      {t('surveyText')}
      <Row  className='center'>{t('funText')}</Row>
      <CustomButton  buttonText={t('letsGo')} buttonFunction={()=>{navigate('/survey')}}/>
    </Container>
  </>;
};

export default Home;