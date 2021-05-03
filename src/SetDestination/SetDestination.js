import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import fakeData from "../fakeData/fakeData.json";
import "./setDestination.css";
import DestinationForm from "../DestinationForm/DestinationForm";
import Overview from "../Overview/Overview";
import MapContainer from "../Map/MapContainer";
import ReactMap from "../Map/ReactMap";

const SetDestination = () => {
  let { vehicle } = useParams();

  ///////// VEHICLE DATA //////
  const [vehicleData, setVehicleData] = useState({});

  useEffect(() => {
    const data = fakeData.find((each) => each.name === vehicle);
    setVehicleData(data);
  }, [vehicle]);

  //////// DESTINATION DATA ORIGINATED FROM USER ////////
  const [destinationData, setDestinationData] = useState({});

  /////// OVERVIEW DATA SHOW OR NOT ///////////
  const [showOverview, setShowOverview] = useState(false);

  return (
    <div className="container-lg destination">
      <div className="row">
        <section className="destination-route col-md-3 ">
          {/* //////// DESTINATION FORM ///////// */}
          {!showOverview && (
            <DestinationForm
              destinationData={destinationData}
              setDestinationData={setDestinationData}
              showOverview={showOverview}
              setShowOverview={setShowOverview}
            />
          )}

          {/* ///// OVERVIEW SEARCH RESULT ///////  */}
          {showOverview && (
            <Overview
              vehicleData={vehicleData}
              destinationData={destinationData}
            />
          )}
        </section>

        <section className="destination-map col-md-9 bg-light">
          <ReactMap />
        </section>
      </div>
    </div>
  );
};

export default SetDestination;
