import "bootstrap/dist/css/bootstrap.min.css";
import Alert from 'react-bootstrap/Alert';


import React from "react";


export default {
  title: "Alert/Success",
  component: Alert
};

export const _Alert = () => (
    <Alert variant="success">
        This is error message
</Alert>
);