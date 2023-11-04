import React from 'react';
import { loveOMeterSurveyQuestions_en} from '../utils/questions.data';

const AnswersContext = React.createContext({answers: new Array(loveOMeterSurveyQuestions_en.length).fill(""), setAnswers : (answers)=>{}});

export default AnswersContext;
