import React, { useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import '../styles/styles.css'
import CustomButton from './button';
//react animation
import styled, { keyframes, css } from 'styled-components';
import { zoomIn } from 'react-animations';


// Create the wobble animation
const wobbleAnimation = keyframes`${zoomIn}`;
const animatedStyles = css`
  animation: 1s ${wobbleAnimation} ease;
`;

const AnimatedQuestion = styled.p<{ animate: boolean }>`
  ${({ animate }) => animate && animatedStyles}
`;

const AnimatedRadioInput = styled.div<{ animate: boolean }>`
  ${({ animate }) => animate && animatedStyles}
`;



interface QuestionProps {

    question: string;
    options: string[];
    imagePath: string
    onNext: () => void;
    onBack: () => void;
}
const Question: React.FC<QuestionProps> = ({ question, options, imagePath, onNext, onBack }) => {
    const [selectedOption, setSelectedOption] = useState('');
    const [animateQuestion, setAnimateQuestion] = useState(true);
    const [animateRadioInputs, setAnimateRadioInputs] = useState(true);
    const handleOptionChange = (event) => {
        setSelectedOption(event.target.value);
    };
    const handleBackButtonClick = () => {
        // Handle going back to the previous question or navigate to home if it's the first question
        onBack();
    };


    const handleNextButtonClick = () => {
        setTimeout(() => {
            onNext();
            setAnimateQuestion(true);
            setAnimateRadioInputs(true);
        }, 300);
        setAnimateQuestion(false);
        setAnimateRadioInputs(false);
    };
    return <Container className='defaultFontText'>
        <Row className='center'>
            <img alt='love-o-meter question image' src={imagePath} className='questionImage' />
        </Row>
        <AnimatedQuestion animate={animateQuestion}>{question}</AnimatedQuestion>
        <Container className='options'>
            {options.map((option, index) => (
                <AnimatedRadioInput key={index} animate={animateRadioInputs} className='item'>
                    <input
                        type="radio"
                        id={`option-${index}`}
                        name="relationshipStatus"
                        value={option}
                        checked={selectedOption === option}
                        onChange={handleOptionChange}
                    />
                    <label htmlFor={`option-${index}`}>{option}</label>
                </AnimatedRadioInput>
            ))}
        </Container>
        <Row className='buttonsColumn'>
            <Col style={{
                justifyContent: 'end', display: 'grid'
            }}><CustomButton buttonText="Back" buttonFunction={handleBackButtonClick} /></Col>
            <Col style={{
                justifyContent: 'start', display: 'grid'
            }}> <CustomButton buttonText="Next" buttonFunction={handleNextButtonClick} /></Col>
        </Row>
    </Container>
};

export default Question; 