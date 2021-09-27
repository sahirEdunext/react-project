import React from 'react'
import './sliderTop.css'
import Slider from "react-slick";
import sliderImg1 from "../../assets/images/sliderImages/sliderImage2.png";
import sliderImg2 from "../../assets/images/sliderImages/sliderImage1.png";

function SliderTop() {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
      };
    return (
        <div className="container sliderTop">
           <Slider {...settings}>
            <div className="slider-container position-relative">
                <img src={sliderImg1} />
                <div className="slider-text">
                    <div className="slider-text-container ml_3rem">
                    <p className="slider-sub-head mb_1rem">SUMMER COLLECTION 2019</p>
                    <h3 className="my-2">Colorful summer dresses are already in store</h3>
                    <button className="slider-button">Learn More</button>
                    </div>
                </div>
            </div>
        
            <div className="slider-container position-relative">
                <img src={sliderImg1} />
                <div className="slider-text">
                    <div className="slider-text-container ml_3rem">
                    <p className="slider-sub-head mb_1rem">SUMMER COLLECTION 2019</p>
                    <h3 className="my-2">Colorful summer dresses are already in store</h3>
                    <button className="slider-button">Learn More</button>
                    </div>
                </div>
            </div>
        
            <div className="slider-container position-relative">
                <img src={sliderImg1} />
                <div className="slider-text">
                    <div className="slider-text-container ml_3rem">
                    <p className="slider-sub-head mb_1rem">SUMMER COLLECTION 2019</p>
                    <h3 className="my-2">Colorful summer dresses are already in store</h3>
                    <button className="slider-button">Learn More</button>
                    </div>
                </div>
            </div>
        
            <div className="slider-container position-relative">
                <img src={sliderImg1} />
                <div className="slider-text">
                    <div className="slider-text-container ml_3rem">
                    <p className="slider-sub-head mb_1rem">SUMMER COLLECTION 2019</p>
                    <h3 className="my-2">Colorful summer dresses are already in store</h3>
                    <button className="slider-button">Learn More</button>
                    </div>
                </div>
            </div>
        
            <div className="slider-container position-relative">
                <img src={sliderImg1} />
                <div className="slider-text">
                    <div className="slider-text-container ml_3rem">
                    <p className="slider-sub-head mb_1rem">SUMMER COLLECTION 2019</p>
                    <h3 className="my-2">Colorful summer dresses are already in store</h3>
                    <button className="slider-button">Learn More</button>
                    </div>
                </div>
            </div>

        

        

        
        </Slider>
        </div>
    )
}

export default SliderTop
