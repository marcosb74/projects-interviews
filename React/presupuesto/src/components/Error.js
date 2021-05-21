import React from "react";
import propTypes from "prop-types";
const Error = ({ mensaje }) => (
  <p className="alert alert-danger error">{mensaje}</p>
);
Error.prototype = {
  mensaje: propTypes.string.isRequired,
};
export default Error;
