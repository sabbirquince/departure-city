import React, { useEffect } from "react";
import { useHistory, useParams } from "react-router";
import fakeData from "../fakeData/fakeData.json";

const SetDestination = () => {
  let { vehicle } = useParams();

  console.log(vehicle);

  useEffect(() => {
    fakeData.find((each) => each.name === vehicle);
  }, [vehicle]);

  const history = useHistory();

  return (
    <div>
      <h1>Destination</h1>
      <h1>Destination</h1>
      <button onClick={() => history.push("/overview")}>search</button>
    </div>
  );
};

export default SetDestination;
