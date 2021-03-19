import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUsers, faMapMarkerAlt } from "@fortawesome/free-solid-svg-icons";
import {} from "@fortawesome/free-brands-svg-icons";

const Overview = (props) => {
  const { destinationData, vehicleData } = props;

  return (
    <div className="overview bg-light p-3">
      <div className="overview-route bg-info p-3 mb-2 text-light">
        <p className="mb-3 font-weight-bold">
          from: <FontAwesomeIcon icon={faMapMarkerAlt} />{" "}
          {destinationData?.pickFrom}
        </p>
        <p className="mb-0 font-weight-bold">
          to: <FontAwesomeIcon icon={faMapMarkerAlt} />{" "}
          {destinationData?.pickEnd}
        </p>
      </div>

      <div className="overview-result bg-white">
        <img className="destination-img" src={vehicleData.picture} alt="" />
        <h6>{vehicleData.name}</h6>
        <h6>
          <FontAwesomeIcon icon={faUsers} /> {vehicleData.users}
        </h6>
        <h6>bike</h6>
      </div>

      <div className="overview-result bg-white">
        <img className="destination-img" src={vehicleData.picture} alt="" />
        <h6>{vehicleData.name}</h6>
        <h6>
          <FontAwesomeIcon icon={faUsers} /> {vehicleData.users}
        </h6>
        <h6>bike</h6>
      </div>

      <div className="overview-result bg-white">
        <img className="destination-img" src={vehicleData.picture} alt="" />
        <h6>{vehicleData.name}</h6>
        <h6>
          <FontAwesomeIcon icon={faUsers} /> {vehicleData.users}
        </h6>
        <h6>bike</h6>
      </div>
    </div>
  );
};

export default Overview;
