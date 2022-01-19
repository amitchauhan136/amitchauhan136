import React, { Component } from "react";
import Slider from "react-slick";
import {  Image } from "react-bootstrap";
import AOS from "aos";
import "aos/dist/aos.css";


export default class RelatedSlider extends Component {
  componentWillUnmount() {
    AOS.init();
  }
  render() {
    var settings = {
      draggable: true,
      swipe: true,
      touchMove: true,
      centerMode: true,
      arrows: true,
      slidesToShow: 4,
      slidesToScroll: 1,
      autoplay: false,
      loop: true,
      responsive: [
        {
          breakpoint: 768,
          settings: {
            slidesToShow: 2,
          },
        },
        {
          breakpoint: 480,
          settings: {
            centerMode: false,
            slidesToShow: 1,
          },
        },
      ],
    };
    return (
      <div className="productstore relatedSlider" data-aos="zoom-in">
        <Slider {...settings}>
          <div>
            <div className="product-one">
              <Image className="pimg" src="/assets/i/hero-brand.png" />
            </div>
          </div>
          <div>
            <div className="product-one">
              <Image className="pimg" src="/assets/i/m-1.png" />
            </div>
          </div>
          <div>
            <div className="product-one">
              <Image className="pimg" src="/assets/i/hero-brand.png" />
            </div>
          </div>
          <div>
            <div className="product-one">
              <Image className="pimg" src="/assets/i/m-1.png" />
            </div>
          </div>
          <div>
            <div className="product-one">
              <Image className="pimg" src="/assets/i/hero-brand.png" />
            </div>
          </div>
          <div>
            <div className="product-one">
              <Image className="pimg" src="/assets/i/m-1.png" />
            </div>
          </div>
          <div>
            <div className="product-one">
              <Image className="pimg" src="/assets/i/hero-brand.png" />
            </div>
          </div>
          <div>
            <div className="product-one">
              <Image className="pimg" src="/assets/i/m-1.png" />
            </div>
          </div>
          <div>
            <div className="product-one">
              <Image className="pimg" src="/assets/i/hero-brand.png" />
            </div>
          </div>
          <div>
            <div className="product-one">
              <Image className="pimg" src="/assets/i/m-1.png" />
            </div>
          </div>
          <div>
            <div className="product-one">
              <Image className="pimg" src="/assets/i/hero-brand.png" />
            </div>
          </div>
          <div>
            <div className="product-one">
              <Image className="pimg" src="/assets/i/m-1.png" />
            </div>
          </div>
        </Slider>
      </div>
    );
  }
}
