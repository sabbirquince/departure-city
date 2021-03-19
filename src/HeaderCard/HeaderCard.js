import React from "react";
import { useHistory } from "react-router-dom";
import "./headerCard.css";

const HeaderCard = (props) => {
  const { picture, name } = props.eachData;

  const history = useHistory();
  const handleRoute = () => {
    history.push(`/vehicle/${name}`);
  };

  return (
    <div className="col-12 col-lg-3">
      <div className="header-img-box bg-secondary">
        <div onClick={handleRoute}>
          <img className="header-img" src={picture} alt="" />
        </div>
        <h4 className="p-2 text-light">{name}</h4>
      </div>
    </div>
  );
};

export default HeaderCard;
