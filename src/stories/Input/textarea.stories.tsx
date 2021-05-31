import "bootstrap/dist/css/bootstrap.min.css";
import Form from 'react-bootstrap/Form';


import React from "react";


export default {
  title: "Input/Text Area",
  component: Form
};

export const _Form = () => (
    <Form>
  <Form.Group controlId="exampleForm.ControlTextarea1">
    <Form.Control as="textarea" placeholder="Text area" rows={3} />
  </Form.Group>
</Form>
);