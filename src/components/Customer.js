import React, { Component } from "react";
import { Carousel } from "react-bootstrap";
import "../Customer.css";

const Customer = () => {
  return (
    <div>
      <Carousel>
        <Carousel.Item>
          <div className="myImage">
            <img
              className="d-block w-100"
              src="http://anne-hardy.co.uk/wp-content/uploads/2019/12/85A3297-Edit.jpg"
              alt="First slide"
            />
            <h3>Jason Mason said</h3>
            <p className="textBlack">
              "was the best photographer I have ever hired. On time. Followed
              through on everything she said she would do. Would highly
              recommend her to family, friends and business associates"
            </p>
          </div>
          <Carousel.Caption></Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <div className="myImage textBlack">
            <img
              className="d-block w-100"
              src="http://anne-hardy.co.uk/wp-content/uploads/2019/12/85A3297-Edit.jpg"
              alt="Second slide"
            />
            <h3>Suzzy Moozy says</h3>
            <p className="textBlack">
              Great photographer to work with. She was energetic, engaging, and
              a lot of fun! We love our wedding pictures!.
            </p>
          </div>
          <Carousel.Caption></Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <div className="myImage textBlack">
            <img
              className="d-block w-100"
              src="http://anne-hardy.co.uk/wp-content/uploads/2019/12/85A3297-Edit.jpg"
              alt="Third slide"
            />
            <h3>Fatooma Boomah said</h3>
            <p>
              is super creative and is genuinely a nice person. Great to work
              with!
            </p>
          </div>

          <Carousel.Caption></Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
};

export default Customer;
