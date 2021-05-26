import "bootstrap/dist/css/bootstrap.min.css";
import { Button } from "react-bootstrap";
import React from "react";


export default {
  title: "Button/Counting/Primary",
  component: Button
};

export const _Button = () => (
  <>
      <Button variant="primary"><span className="box">24</span></Button>
  </>
);