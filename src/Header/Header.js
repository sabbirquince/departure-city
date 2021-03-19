import React, { useEffect, useState } from "react";
import "./header.css";
import fakeData from "../fakeData/fakeData.json";
import HeaderCard from "../HeaderCard/HeaderCard";

const Header = () => {
  const [vehicleData, setVehicleData] = useState([]);

  useEffect(() => {
    setVehicleData(fakeData);
  }, []);

  return (
    <div className="header">
      <div className="container">
        <div className="row">
          {vehicleData.map((eachData) => (
            <HeaderCard eachData={eachData}></HeaderCard>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Header;
