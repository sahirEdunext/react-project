import React from "react";
import './featuredSection.css'

function FeaturedSection() {
  return (
    <div className="container">
        <div className="spacer-1rem"></div>
      <div className="row ">
        <div className="col-md-3">
          <div className="featured-card-container">
            <div className="slider-text">
              <div className="">
                <p className="slider-sub-head">SUMMER COLLECTION 2019</p>
                <h3 className="my-2">
                  Colorful summer dresses are already in store
                </h3>
                <p>Find stunning women's cocktail dresses and party dresses. Stand out in lace and metallic cocktail dresses and party dresses from all your favorite brands.</p>
                <button className="slider-button">Learn More</button>
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-6">
        <div style={{backgroundImage: "url(../../assets/images/banner E.png)"}} className="featured-card-container">
            <div className="slider-text">
              <div className="">
                <p className="slider-sub-head">SUMMER COLLECTION 2019</p>
                <h3 className="my-2">
                  Colorful summer dresses are already in store
                </h3>
                <p>Find stunning women's cocktail dresses and party dresses. Stand out in lace and metallic cocktail dresses and party dresses from all your favorite brands.</p>
                <button className="slider-button">Learn More</button>
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-3">
        <div className="featured-card-container bg-light">
            <div className="slider-text">
              <div className="">
                <p className="slider-sub-head">SUMMER COLLECTION 2019</p>
                <h3 className="my-2">
                  Colorful summer dresses are already in store
                </h3>
                <button className="slider-button">Learn More</button>
              </div>
            </div>
          </div>
        <div className="featured-card-container bg-light eg-img">
            <div className="slider-text">
              <div className="">
                <p className="slider-sub-head">SUMMER COLLECTION 2019</p>
                <h3 className="my-2">
                  Colorful summer dresses are already in store
                </h3>
                <button className="slider-button">Learn More</button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="spacer-1rem"></div>
    </div>
  );
}

export default FeaturedSection;
