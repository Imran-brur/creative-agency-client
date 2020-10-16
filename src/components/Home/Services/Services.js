import React, { useState } from 'react';
import fakeData from '../fakeData/fakeData';
import ServicePart from '../ServicePart/ServicePart';
import './Services.css';

const Services = () => {

    return (
       <div className="mt-5">
           <div className="center">
                <h1>Provide Awesome <span style={{color: 'green'}}>Services</span></h1>
           </div>
           <div  className="services mt-5 mb-5">
                {
                    fakeData.map(service => <ServicePart service={service}></ServicePart>)
                }
           </div>
       </div>
    );
};

export default Services;