import "bootstrap/dist/css/bootstrap.min.css";
import { Button } from "react-bootstrap";
import React from "react";
import './style.css';


export default {
  title: "Button/Default/Success",
  component: Button
};

export const _Button = () => (
  <>
    <div>
      <Button variant="success">Button</Button>
    </div>
  </>
);