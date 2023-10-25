import React from 'react';
import { Button, Container } from 'react-bootstrap';
interface ButtonProps {
    buttonText: string;
    buttonFunction: React.MouseEventHandler;
}

const CustomButton: React.FC<ButtonProps> = ({ buttonText, buttonFunction }) => {
    return <>
        <Container className='defaultFontText'>
            <Button variant="default"  className='customButton' onClick={buttonFunction}>{buttonText}</Button>
        </Container>
    </>;
};

export default CustomButton;