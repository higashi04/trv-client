import React from "react";

import "./DriverData.css";

const DriverData = (props) => {
  return (
    <div className="container">
      <div className="row my-5">
        <img src={props.url} alt={props.driver.name} />
        <div className="data p-5 mt-5">
          Coordinador: {props.driver.coordinator}
          <hr />
          Nombre: {props.driver.name}
          <hr />
          IMSS: {props.driver.imss}
          <hr />
          Dirección: {props.driver.address}
        </div>
      </div>
    </div>
  );
};

export default DriverData;
