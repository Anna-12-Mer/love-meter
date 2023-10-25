import Home from './containers/home'
import { Route, Routes } from "react-router-dom";
import './App.css';
import { Container, Row } from 'react-bootstrap';
import Survey from './containers/survey';
import {loveOMeterSurveyQuestions} from './utils/questions.data'
function App() {
  return (<>
    <Container className="App">
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/survey" element={<Survey questions={loveOMeterSurveyQuestions}/>} />
      </Routes>
      <Row className='center footer defaultFontText'>Copyright © 2023. All Rights Reserved.</Row>
    </Container>
  </>
  );
}

export default App;
