import React, { FC, useEffect, useState } from "react";
import { Col, Container , Row} from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import CustomButton from "../components/button";
import loadingGif from "../assets/loading-img.gif";
import Level from "../components/level";

const Result: FC = () => {
    const navigate = useNavigate();
    const [loading, setLoading] = useState(true); 

    useEffect(() => {
        setTimeout(() => {
            setLoading(false)
        },2000)
    })

    return <>
        {loading ?
        <Container>
            <img alt='loading' src={loadingGif} className='result' />
        </Container> 
         :
        <Container> 
            <Level/>
            <Row className='buttonsColumn'>
                    <Col style={{
                        justifyContent: 'end', display: 'grid'
                    }}><CustomButton buttonText="Again" buttonFunction={()=>{navigate('/survey')}} /></Col>
                    <Col style={{
                        justifyContent: 'start', display: 'grid'
                    }}> <CustomButton buttonText="Share" buttonFunction={()=>{}} /></Col>
            </Row>
        </Container>}
    </>;
};

export default Result; 