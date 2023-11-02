import Home from "./containers/home";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import { Container, Row } from "react-bootstrap";
import Survey from "./containers/survey";
import Result from "./containers/result";
import { useCallback, useEffect, useMemo, useState } from "react";
import AnswersContext from "./hooks/answersContext";
import "./i18n/i18n"; // Import i18n configuration
import { useTranslation } from "react-i18next";
import {
  loveOMeterSurveyQuestions_de,
  loveOMeterSurveyQuestions_en,
  loveOMeterSurveyQuestions_fr,
} from "./utils/questions.data";

function App() {
  const [answers, setAnswers] = useState(
    new Array(loveOMeterSurveyQuestions_en.length).fill("")
  );
  const { i18n } = useTranslation();
  const loadQuestions = useCallback(() => {
    switch (i18n.language) {
      case "en":
        return loveOMeterSurveyQuestions_en;
      case "de":
        return loveOMeterSurveyQuestions_de;
      case "fr":
        return loveOMeterSurveyQuestions_fr;
      default:
        return loveOMeterSurveyQuestions_en;
    }
  }, [i18n.language]);

  const loveOMeterSurveyQuestions = useMemo(
    () => loadQuestions(),
    [loadQuestions]
  );
  useEffect(() => {
    console.log(loveOMeterSurveyQuestions);
  }, [loveOMeterSurveyQuestions]);

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
