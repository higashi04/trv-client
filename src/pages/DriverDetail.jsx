import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

import axios from "axios";
import ImageHolder from "../components/ImageHolder/ImageHolder";

const DriverDetail = () => {
    const {id} = useParams();
    const [driver, setDriver] = useState('')
    const url = `https://transportes-villarreal.herokuapp.com/drivers/getDrivers/${id}`
   
    useEffect(() => {
        const handleData = async () => {
            const options = { method: 'GET', url: url }
            await axios.request(options).then( res => setDriver(res.data) ).catch(function (error) {
                console.error(error);
              });
        }
        handleData();
    })
    return(
        <div className="container">
            <div className="row my-5">
                <div className="col-6">
                     {/* <ImageHolder url={driver.photo} /> */}
                     {/* {driver.photo.url ? 'hay foto' : 'no hay nada'} */}
                </div>
                <div className="col-6">
                    <div className="row">
                    {driver.name}
                    </div>
                    <div className="row">
                    {driver.imss}
                    </div>
                </div>
            </div>
        </div>
    )
}
export default DriverDetail;