import React, { FC, useCallback, useContext, useEffect, useMemo, useState} from "react";
import { Row } from "react-bootstrap";
import { levels, levels_de, levels_fr, weights, weights_de, weights_fr } from "../utils/questions.data";
import AnswersContext from "../hooks/answersContext";
import { useTranslation } from "react-i18next";

const Level: FC = () => {
    const [loveMeterScore, setLoveMeterScore] = useState(0); 
    const {answers} = useContext(AnswersContext);
    const { i18n } = useTranslation();
    const { t } = useTranslation();

    const weightsByLanguage = useMemo(() => {
        return {
        en: weights,
        fr: weights_fr,
        de: weights_de,
        };
    }, []);

    const levelsByLanguage = useMemo(() => {
        return {
            en: levels,
            fr: levels_fr,
            de: levels_de
        }
    }, [])

    const calculateLoveScore = useCallback((answers, language) => {
    let loveScore = 0;
    const weights = weightsByLanguage[language];

    answers.forEach((answer) => {
      if (weights[answer]) {
        loveScore += weights[answer];
      }
    });

    return loveScore;
  }, [weightsByLanguage]);


    useEffect(() => {
    const handleLoveScore = () => {
      const score = calculateLoveScore(answers, i18n.language);
      setLoveMeterScore(score);
    };
    handleLoveScore();
  }, [answers, i18n.language, calculateLoveScore]);

    const getLevel = (score, language) => {
        if (score <= 30 && score >= 25) {
        return levelsByLanguage[language][30];
        } else if (score < 25 && score >= 10) {
        return levelsByLanguage[language][20];
        } else {
        return levelsByLanguage[language][10];
        }
    };

  const level = getLevel(loveMeterScore, i18n.language);
    
    return <>
      <Row className='center'>
        <img alt='result love-meter' src={level.image} className='loveMeterScoreImage' />

      </Row>
      <Row className='center percentageFontText'>{((loveMeterScore / 30) * 100).toFixed(0)}%</Row>
      <Row className='center statusFontText'>{level.status}</Row>
      <Row className='center defaultFontText'></Row>
      <p className='subDefaultFontText'>
        {t('rememberMessage')}
      </p>
    </>
    
}

export default Level; 