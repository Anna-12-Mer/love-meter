import React from 'react';
import { loveOMeterSurveyQuestions_ar } from '../utils/questions.data';

const AnswersContext = React.createContext({answers: new Array(loveOMeterSurveyQuestions_ar.length).fill(""), setAnswers : (answers)=>{}});

export default AnswersContext;
