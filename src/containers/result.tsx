import React, { FC, useEffect, useState } from "react";
import { Container , Row} from "react-bootstrap";
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
        },5000)
    })

    return <>
        {loading ?
            <Container>
                <Row className="justify-center">
                    <img alt='loading' src={loadingGif} className='!w-72' />
                </Row>
        </Container> 
         :
        <Container> 
            <Level/>
            <Row className='buttonsColumn'>
                 <CustomButton buttonText="Again" buttonFunction={()=>{navigate('/survey')}} />
            </Row>
        </Container>}
    </>;
};

export default Result; 