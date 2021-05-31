import "bootstrap/dist/css/bootstrap.min.css";
import Alert from 'react-bootstrap/Alert';


import React from "react";


export default {
  title: "Alert/Danger",
  component: Alert
};

export const _Alert = () => (
    <Alert variant="danger">
        This is error message
</Alert>
);