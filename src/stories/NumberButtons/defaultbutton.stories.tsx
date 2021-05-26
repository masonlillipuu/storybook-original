import "bootstrap/dist/css/bootstrap.min.css";
import { Button } from "react-bootstrap";
import React from "react";


export default {
  title: "Button/Counting/Default",
  component: Button
};

export const _Button = () => (
  <>
<Button variant="outline-info"><span className="box">24</span></Button>
  </>
);