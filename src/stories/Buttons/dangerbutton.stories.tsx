import "bootstrap/dist/css/bootstrap.min.css";
import { Button } from "react-bootstrap";
import React from "react";
import './style.css';


export default {
  title: "Button/Default/Danger",
  component: Button
};

export const _Button = () => (
  <>
  <Button variant="outline-danger">Button</Button>
  </>
);