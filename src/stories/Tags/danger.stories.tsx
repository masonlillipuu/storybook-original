import "bootstrap/dist/css/bootstrap.min.css";
import { Badge } from "react-bootstrap";
import React from "react";


export default {
  title: "Tags/Danger",
  component: Badge
};

export const _Button = () => (
    <Badge pill variant="danger">
    Danger
  </Badge>
);