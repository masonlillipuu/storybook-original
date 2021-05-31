import "bootstrap/dist/css/bootstrap.min.css";
import Form from 'react-bootstrap/Form';


import React from "react";


export default {
  title: "Selectors/Toggle",
  component: Form
};

export const _Form = () => (
    <Form>
  <Form.Check 
    type="switch"
    id="custom-switch"
  />

</Form>
);