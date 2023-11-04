import React from "react";
import { Col, Form } from "react-bootstrap";
import { useTranslation } from "react-i18next";

const LanguageSelector: React.FC = () => {
    const { i18n } = useTranslation();

    const changeLanguage = (e) => {
        i18n.changeLanguage(e.target.value);
    }

    return (
        <Col>
          <Form.Select onChange={changeLanguage}>
            <option value="en">English</option>
            <option value="fr">French</option>
            <option value="de">Deutsch</option>
          </Form.Select>
        </Col>
    );
 }
export default LanguageSelector; 