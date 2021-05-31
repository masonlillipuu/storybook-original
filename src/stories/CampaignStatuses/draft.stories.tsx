import "bootstrap/dist/css/bootstrap.min.css";
import { Badge } from "react-bootstrap";
import React from "react";
import './style.css';


export default {
  title: "Tags/Success",
  component: Badge
};

export const _Button = () => (
    <Badge pill variant="warning">
    Draft
  </Badge>
);