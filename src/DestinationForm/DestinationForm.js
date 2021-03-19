import React from "react";
import { useForm } from "react-hook-form";

const DestinationForm = (props) => {
  const { setDestinationData, showOverview, setShowOverview } = props;

  const { register, handleSubmit, errors } = useForm();

  const onSubmit = (data) => {
    setDestinationData(data);
    setShowOverview(!showOverview);
  };

  return (
    <form
      className="destination-form bg-light p-3"
      onSubmit={handleSubmit(onSubmit)}
    >
      <input
        className="login-form-field bg-light"
        placeholder="Pick from"
        type="text"
        name="pickFrom"
        ref={register({ required: true })}
      />
      {errors.pickFrom && <span>This field is required</span>}

      <input
        className="login-form-field bg-light"
        placeholder="Pick to"
        type="text"
        name="pickEnd"
        ref={register({ required: true })}
      />
      {errors.pickEnd && <span>This field is required</span>}

      <input
        className="login-form-field bg-light"
        placeholder="Pick to"
        type="date"
        name="journeyDate"
        ref={register({ required: true })}
      />
      {errors.journeyDate && <span>This field is required</span>}

      <input className="btn btn-info btn-block" type="submit" />
    </form>
  );
};

export default DestinationForm;
