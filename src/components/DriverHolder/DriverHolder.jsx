import React from "react";
import { Link } from "react-router-dom";
import './DriverHolder.css'

const DriverHolder = props => {
    return(
        <div className="box">
            <div>
                {props.name}
            </div>
            <div>
                <Link className="btn btn-primary" to={`/drivers/${props.id}`}>Detalles de Chofer</Link>
            </div>
        </div>
    )
}

export default DriverHolder;