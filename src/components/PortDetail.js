import React from "react";
import { useParams } from "react-router-dom";
import data from "../PortData";
import { Navigate } from "react-router-dom";

const PortDetail = () => {
  const { slug } = useParams(); // use methods to grab a var from app.js
  const port = data.find((ports) => ports.slug === slug); //find in data objs if the slug in the data match the slug in the app.js.

  if (!port) {
    // if there is no detail go home.
    return <Navigate to="/" />;
  }

  return (
    <div className="port-details-container">
      <div className="port-details">
        <div className="tester auto-scroll">
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <img
            className="img-fluid rounded mb-5 mt-5"
            src={port.img}
            alt="..."
          />
          <div className="mb-4">
            <h4>Name : {port.name}</h4>
            <br />
            <h4>Description :</h4>
            <h6> {port.desc}</h6>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PortDetail;
