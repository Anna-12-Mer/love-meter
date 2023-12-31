import React, { FC, useEffect, useState } from "react";
import { Container , Row} from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import CustomButton from "../components/button";
import loadingGif from "../assets/loading-img.gif";
import Level from "../components/level";
import { useTranslation } from "react-i18next";

const Result: FC = () => {
    const navigate = useNavigate();
    const [loading, setLoading] = useState(true); 
    const { t } = useTranslation();


    useEffect(() => {
        setTimeout(() => {
            setLoading(false)
        },5000)
    })

    return <>
        {loading ?
            <Container>
                <Row className="center">
                    <img alt='loading' src={loadingGif} className='customLoadingImg' />
                </Row>
        </Container> 
         :
        <Container> 
            <Level/>
            <Row className='buttonsColumn'>
                 <CustomButton buttonText={t('again')} buttonFunction={()=>{navigate('/survey')}} />
            </Row>
        </Container>}
    </>;
};

export default Result; 