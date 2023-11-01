import Home from "./containers/home";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import { Container, Row } from "react-bootstrap";
import Survey from "./containers/survey";
import Result from "./containers/result";
import { useEffect, useState } from "react";
import AnswersContext from "./hooks/answersContext";
import "./i18n/i18n"; // Import i18n configuration
import LanguageSelector from "./components/languageSelector";
import { useTranslation } from "react-i18next";
import {
  loveOMeterSurveyQuestions_ar,
  loveOMeterSurveyQuestions_de,
  loveOMeterSurveyQuestions_en,
  loveOMeterSurveyQuestions_fr,
} from "./utils/questions.data";

function App() {
  const [answers, setAnswers] = useState(
    new Array(loveOMeterSurveyQuestions_en.length).fill("")
  );
  const { i18n } = useTranslation();
  const [loveOMeterSurveyQuestions, setLoveOMeterSurveyQuestions] = useState(
    []
  );
  const loadQuestions = () => {
    switch (i18n.language) {
      case "en":
        setLoveOMeterSurveyQuestions(loveOMeterSurveyQuestions_en);
        break;
      case "de":
        setLoveOMeterSurveyQuestions(loveOMeterSurveyQuestions_de);
        break;
      case "fr":
        setLoveOMeterSurveyQuestions(loveOMeterSurveyQuestions_fr);
        break;
      default:
        setLoveOMeterSurveyQuestions(loveOMeterSurveyQuestions_en);
    }
  };
  useEffect(() => {
    loadQuestions();
  }, [i18n.language, loveOMeterSurveyQuestions]);
  return (
    <AnswersContext.Provider value={{ answers, setAnswers }}>
      <Row className="languageSelector defaultFontText">
        <LanguageSelector />
      </Row>
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
