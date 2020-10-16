import React from 'react';
import carousel1 from '../../../images/carousel-1.png';
import carousel2 from '../../../images/carousel-2.png';
import carousel3 from '../../../images/carousel-3.png';
import './Carousel.css'

const Carousel = () => {
    return (
        <div className="container mt-5">
        <div id="carouselExampleIndicators" class="carousel slide" data-ride="carousel">
            <ol class="carousel-indicators">
              <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>
              <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
              <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
            </ol>
            <div class="carousel-inner bg-color">
                <div class="carousel-item active">
                <div class="row align-items-center">
                      <div class="col-md-2">
                      
                      </div>
                      <div class="col-md-8">
                        <img  src={carousel1} class=" w-100" alt="..."/>
                      </div>
                      <div class="col-md-2">
                      
                      </div>
                  </div>
              </div>

              <div class="carousel-item">
                  <div class="row align-items-center">
                      <div class="col-md-2">
                      
                      </div>
                      <div class="col-md-8">
                        <img src={carousel2} class="d-block w-100" alt="..."/>
                      </div>
                      <div class="col-md-2">
                      
                      </div>
                  </div>
              </div>
              <div class="carousel-item">
              <div class="row align-items-center">
                      <div class="col-md-2">
                      
                      </div>
                      <div class="col-md-8">
                        <img src={carousel2} class="d-block w-100" alt="..."/>
                      </div>
                      <div class="col-md-2">
                      
                      </div>
                  </div>
              </div>
            </div>
            <a class="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
              <span class="carousel-control-prev-icon" aria-hidden="true"></span>
              <span class="sr-only">Previous</span>
            </a>
            <a class="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
              <span class="carousel-control-next-icon" aria-hidden="true"></span>
              <span class="sr-only">Next</span>
            </a>
          </div>
    </div>
    
    );
};

export default Carousel;