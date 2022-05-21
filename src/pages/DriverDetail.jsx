import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

import axios from "axios";
import DriverData from "../components/DriverData/DriverData";

const DriverDetail = () => {
  const { id } = useParams();
  const [driver, setDriver] = useState("");
  const url = `https://transportes-villarreal.herokuapp.com/drivers/getDrivers/${id}`;

  const handleData = async () => {
    const options = { method: "GET", url: url };
    await axios
      .request(options)
      .then((res) => setDriver(res.data))
      .catch(function(error) {
        console.error(error);
      });
  };

  useEffect(() => {
    handleData();
  });

  return (
    <div>
        { driver && <DriverData driver={driver} url={driver.photo.url} />}
    </div>
  );
};
export default DriverDetail;
