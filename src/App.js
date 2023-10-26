import Home from "./containers/home";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import { Container, Row } from "react-bootstrap";
import Survey from "./containers/survey";
import { loveOMeterSurveyQuestions } from "./utils/questions.data";
import Result from "./containers/result";
import { useState } from "react";
import AnswersContext from "./hooks/answersContext";
function App() {
  const [answers, setAnswers] = useState(
    new Array(loveOMeterSurveyQuestions.length).fill("")
  );

  return (
    <AnswersContext.Provider value={{ answers, setAnswers }}>
      <Container className="App">
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route
            exact
            path="/survey"
            element={<Survey questions={loveOMeterSurveyQuestions} />}
          />
          <Route exact path="/survey-complete" element={<Result />} />
        </Routes>
        <Row className="center footer defaultFontText">
          Copyright © 2023. All Rights Reserved.
        </Row>
      </Container>
    </AnswersContext.Provider>
  );
}

export default App;
