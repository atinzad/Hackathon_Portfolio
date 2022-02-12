import React from "react";
import PortData from "../PortData";
import PortItem from "./PortItem";

const Port = () => {
  const ports = PortData.map((port) => <PortItem port={port} />);
  return (
    <div className="port">
      {/* <div>Port</div> */}
      <section class="page-section portfolio" id="portfolio">
        <div class="container">
          <h2 class="page-section-heading text-center text-uppercase text-secondary mb-0">
            Portfolio
          </h2>
          <br />
          {/* <center>
                    <SearchBar setQuery={setQuery} />
          <button className="btn btn-primary btn-xl">Easy</button>
          <button className="btn btn-primary btn-xl">Moderate</button>
          <button className="btn btn-primary btn-xl">Hard</button>
        </center> */}
          <div class="divider-custom">
            <div class="divider-custom-line"></div>
            <div class="divider-custom-icon">
              <i class="fas fa-star"></i>
            </div>
            <div class="divider-custom-line"></div>
          </div>

          <div class="row justify-content-center">{ports}</div>
        </div>
      </section>
    </div>
  );
};

export default Port;
