import React from "react";
import "../about.css";
import "video-react/dist/video-react.css";
import { Player } from "video-react";
import ReactPlayer from "react-player";
const About = () => {
  return (
    <section class="section about-section gray-bg" id="about">
      <div class="container">
        <div class="row align-items-center flex-row-reverse">
          <div class="col-lg-6">
            <div class="about-text go-to">
              <h3 class="dark-color">About Me</h3>
              <h6 class="theme-color lead">
                Anne Hardy Born in United Kingdom. Lives and works in London,
                United Kingdom.
              </h6>
              <p>
                Anne Hardy is internationally recognised for her photography and
                large-scale sculptural installations or ‘FIELDWORKS’, which
                combine physical materials with light and sound to create
                immersive and sensual environments. These works derive from
                places she calls ‘pockets of wild space’ – gaps in the urban
                space where materials, atmospheres, and emotions gather. Hardy
                thinks of these works as moments out of time – voids within the
                ‘everyday’ space, that act as a spell or dream in which to
                re-encounter our relationships to the worlds that we inhabit.
              </p>
            </div>
          </div>
          <div class="col-lg-6">
            <div class="about-avatar">
              <img
                src=" http://t2.gstatic.com/licensed-image?q=tbn:ANd9GcTlCLwQuH--JJgqKaIxlkLVu3PfHWSJ9jXqFBM3g5GxU11dCbp-23wlRQI0JKac"
                title=""
                alt=""
              />
            </div>
          </div>
          <div className="video">
            <ReactPlayer url="https://youtu.be/pVO60nSmHuI" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
