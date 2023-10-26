import React , { useState }from 'react';
import Question from '../components/question';
import { useNavigate } from "react-router-dom";

interface SurveyProps {
  questions: {
    question: string,
    options: string[]
    image: string
  }[];
}
const Survey: React.FC<SurveyProps> = ({ questions }) => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const navigate = useNavigate();

  const handleNextQuestion = () => {
    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex((prevIndex) => prevIndex + 1);
    } else {
      // Handle survey completion or submission here
      navigate('/survey-complete');
    }
  };

  const handlePreviousQuestion = () => {
    if (currentQuestionIndex > 0) {
      setCurrentQuestionIndex((prevIndex) => prevIndex - 1);
    } else {
      // If it's the first question, navigate back to the home page
      navigate('/');
    }
  };

  return <>
    <Question
        questionIndex = {currentQuestionIndex}
        question={questions[currentQuestionIndex].question}
        options={questions[currentQuestionIndex].options}
        imagePath={questions[currentQuestionIndex].image}
        onNext={handleNextQuestion}
        onBack={handlePreviousQuestion}
      />
  </>;
};

export default Survey; 