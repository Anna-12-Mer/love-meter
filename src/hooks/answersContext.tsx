import React from 'react';
import { loveOMeterSurveyQuestions } from '../utils/questions.data';

const AnswersContext = React.createContext({answers: new Array(loveOMeterSurveyQuestions.length).fill(""), setAnswers : (answers)=>{}});

export default AnswersContext;
