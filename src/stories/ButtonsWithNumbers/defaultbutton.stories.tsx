import "bootstrap/dist/css/bootstrap.min.css";
import { Button, Badge } from "react-bootstrap";
import React from "react";


export default {
  title: "Button/RTL/Default",
  component: Button
};

export const _Button = () => (
  <>
<Button variant="info"> Button <Badge className="bg-gray">9</Badge> </Button>
  </>
);