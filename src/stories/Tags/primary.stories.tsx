import "bootstrap/dist/css/bootstrap.min.css";
import { Badge } from "react-bootstrap";
import React from "react";


export default {
  title: "Tags/primary",
  component: Badge
};

export const _Button = () => (
    <Badge pill variant="primary">
    Success
  </Badge>
);