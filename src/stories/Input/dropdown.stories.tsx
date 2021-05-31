import "bootstrap/dist/css/bootstrap.min.css";
import Form from 'react-bootstrap/Form';


import React from "react";


export default {
  title: "Input/Dropdown",
  component: Form
};

export const _Form = () => (
    <Form.Group>
    <Form.Control as="select">
      <option>Default select</option>
      <option>Option 1</option>
      <option>Option 1</option>
      <option>Option 1</option>
    </Form.Control>
  </Form.Group>
);