import "bootstrap/dist/css/bootstrap.min.css";
import { Button, Badge } from "react-bootstrap";
import React from "react";


export default {
  title: "Button/RTL/Primary",
  component: Button
};

export const _Button = () => (
  <>
      <Button variant="primary">
  Profile <Badge className="bg-gray">9</Badge>
</Button>
  </>
);