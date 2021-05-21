import React, { Fragment } from "react";
import { revisarPresupuesto } from "../helpers";
import propTypes from "prop-types";
const ControlPresupuesto = ({ presupuesto, resto }) => {
  return (
    <Fragment>
      <div className="alert alert-primary">Presupuesto:$ {presupuesto}</div>
      <div className={revisarPresupuesto(presupuesto, resto)}>
        Restante: ${resto}
      </div>
    </Fragment>
  );
};
ControlPresupuesto.prototype = {
  presupuesto: propTypes.number.isRequired,
  resto: propTypes.number.isRequired,
};
export default ControlPresupuesto;
