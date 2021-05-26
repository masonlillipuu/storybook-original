import "bootstrap/dist/css/bootstrap.min.css";
import { Button, Badge } from "react-bootstrap";
import React from "react";


export default {
  title: "Button/RTL/Success",
  component: Button
};

export const _Button = () => (
  <>
    <Button variant="primary">
  Profile <Badge>9</Badge>
  <span className="visually-hidden">unread messages</span>
</Button>
  </>
);