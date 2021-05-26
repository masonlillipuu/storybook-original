import "bootstrap/dist/css/bootstrap.min.css";
import { Button } from "react-bootstrap";
import React from "react";


export default {
  title: "Button/Counting/Success",
  component: Button
};

export const _Button = () => (
  <>
    <div>
      <Button variant="success"><span className="box">24</span></Button>
    </div>
  </>
);