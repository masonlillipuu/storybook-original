import "bootstrap/dist/css/bootstrap.min.css";
import Form from 'react-bootstrap/Form';
import Badge from 'react-bootstrap/Badge';


import React from "react";


export default {
  title: "Input/Tags",
  component: Form
};

export const _Form = () => (
    <Form.Group>
    <Form.Control as="select">
    <Form.Control type="email" placeholder="Enter email" ><Badge className="bg-gray">9</Badge></Form.Control>
    </Form.Control>
  </Form.Group>
);