import "bootstrap/dist/css/bootstrap.min.css";
import Alert from 'react-bootstrap/Alert';


import React from "react";


export default {
  title: "Alert/Primary",
  component: Alert
};

export const _Alert = () => (
    <Alert variant="primary">
        This is error message
</Alert>
);