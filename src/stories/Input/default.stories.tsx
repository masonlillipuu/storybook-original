import "bootstrap/dist/css/bootstrap.min.css";
import Form from 'react-bootstrap/Form';


import React from "react";


export default {
  title: "Input/Default",
  component: Form
};

export const _Form = () => (
    <Form>
  <Form.Group className="mb-3" controlId="formBasicEmail">
    <Form.Control type="email" placeholder="Enter email" />
  </Form.Group>
</Form>
);