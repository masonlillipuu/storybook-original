import "bootstrap/dist/css/bootstrap.min.css";
import { Button } from "react-bootstrap";
import React from "react";


export default {
  title: "Button/Counting/PrimaryWithBorder",
  component: Button
};

export const _Button = () => (
  <>
      <Button variant="outline-primary"><span className="box">24</span></Button>
  </>
);