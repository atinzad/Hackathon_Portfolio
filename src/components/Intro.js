import React from "react";
import { Link } from "react-router-dom";

const Intro = () => {
  return (
    <div>
      Intro
      <Link to="/about">
        <button type="button" className="bg-light text-dark">
          go to about
        </button>
      </Link>
    </div>
  );
};

export default Intro;
