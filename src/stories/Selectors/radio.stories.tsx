import "bootstrap/dist/css/bootstrap.min.css";
import Form from 'react-bootstrap/Form';
import './style.css';


import React from "react";


export default {
  title: "Selectors/Radio",
  component: Form
};

export const _Form = () => (
    <Form.Check type="radio" aria-label="radio 1" />
);