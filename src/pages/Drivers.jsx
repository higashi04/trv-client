import React, { useState, useEffect } from "react";
import axios from "axios";

import DriverHolder from "../components/DriverHolder/DriverHolder";

const Drivers = () => {
    const [drivers, setDrivers] = useState([])
    const url = 'https://transportes-villarreal.herokuapp.com/drivers/getDrivers'

    useEffect(() => {
        const handleData = () => {
            const options = { method: 'GET', url: url }
            axios.request(options).then( res => setDrivers(res.data) ).catch(function (error) {
                console.error(error);
              });
        }
        handleData()
    }, [])
    return(
        <div className="listHolder">
            {drivers.map(i => <DriverHolder key={i._id} name={i.name} id={i._id} /> )}
        </div>
    )
}

export default Drivers;