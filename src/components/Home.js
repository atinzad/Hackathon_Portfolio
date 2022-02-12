import React from "react";
import Customer from "./Customer";
import Footer from "./Footer";
import Intro from "./Intro";
import Port from "./Port";
// abdullah
function Home() {
  return (
    <div>
      <header class="masthead bg-secondary text-white text-center">
        <div class="container d-flex align-items-center flex-column myHeader">
          <h1 class="masthead-heading text-uppercase mb-0 ">
            Welcome To Anne Hardy
          </h1>
        </div>
      </header>
      <div>
        <Intro />
      </div>
      <div>
        <Port />
      </div>
      <div>
        <Customer />
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
}

export default Home;
