import React from "react";
import { Link } from "react-router-dom";
import "./headerCard.css";

const HeaderCard = (props) => {
  const { picture, name } = props.eachData;

  return (
    <div className="col-12 col-lg-3">
      <Link to={`/vehicle/${name}`}>
        <div className=" header-img-box">
          <img className="header-img" src={picture} alt="" />
        </div>
      </Link>
    </div>
  );
};

export default HeaderCard;
