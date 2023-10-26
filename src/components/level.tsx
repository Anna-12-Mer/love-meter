import React, { FC, useContext, useEffect, useState} from "react";
import { Row } from "react-bootstrap";
import { levels, weights } from "../utils/questions.data";
import AnswersContext from "../hooks/answersContext";

const Level: FC = () => {
    const [loveMeterScore, setLoveMeterScore] = useState(0); 
    const {answers} = useContext(AnswersContext);

    // Calculate the love meter score
    const handelLoveScore = () => {
        let loveScore = 0;
        answers.forEach((answer) => {
            console.log(weights[answer]);
            
            if (weights[answer]) {

                loveScore += weights[answer];
            }
        });
        setLoveMeterScore(loveScore); 
    }

    useEffect(() => {
        handelLoveScore()
    });
    
    return <>
        {/* <Row className='center'> <img alt='result love-meter' src={} className='result'/></Row> */}
         <Row className='center percentage'>{((loveMeterScore/30)*100).toFixed(0)}%</Row> 
        {(loveMeterScore <= 30 && loveMeterScore >= 25) ?
            <>
            <Row className='center status'>{levels[30].status}</Row>
            <Row className='center defaultFontText'>of respondents in relationships believe they've found "the one," while the other 10% are hoping their partner will stop stealing the blankets at night.</Row>
            <p className="subDefaultFontText">Remember, these percentages are all in good fun and meant to bring a smile to your face. Embrace the joy and laughter, and let love, humor, and happiness guide your way! 🌟😄</p>
            </>
            :
            (loveMeterScore < 25 && loveMeterScore >= 10) ?
                     <>
            <Row className='center status'>{levels[20].status}</Row>
            <Row className='center defaultFontText'></Row>
            <p className="subDefaultFontText">Remember, these percentages are all in good fun and meant to bring a smile to your face. Embrace the joy and laughter, and let love, humor, and happiness guide your way! 🌟😄</p>

            </> :
            <>
            <Row className='center status'>{levels[10].status}</Row>
            <Row className='center defaultFontText'></Row>
            <p className="subDefaultFontText">Remember, these percentages are all in good fun and meant to bring a smile to your face. Embrace the joy and laughter, and let love, humor, and happiness guide your way! 🌟😄</p>

            </>
        }
    </>
}

export default Level; 