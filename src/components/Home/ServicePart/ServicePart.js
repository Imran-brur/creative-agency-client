import React from 'react';
import { useHistory } from 'react-router-dom';
import './ServicesPart.css';

const ServicePart = ({service}) => {
    const history = useHistory();

    const handleOrderService = () => {
        history.push(`/dashboard/${service.id}`);
    }

    return (
       
             <div onClick={handleOrderService}>
                <div class="card">
                    <img src={service.img} className="rounded mx-auto d-block" alt="..."/>
                <div class="card-body center">
                    <h5 class="card-title">{service.name}</h5>
                    <p class="card-text">{service.description}</p>
                </div>
            </div>
        </div>
    );
};

export default ServicePart;