import React from 'react';

const ReviewBox = ({ review }) => {

    return (
        <div className="col-md-4 mb-3">
           <div class="card p-3 rounded" >
             <div class="d-flex mb-4">
                <img style={{width:'70px', borderRadius:'50%'}} src={review.photoURL} class="card-img" alt="..."/>
               <div className="ml-2">
                    <h5 class="card-title">{review.review.name}</h5>
                    <h5 class="card-text">{review.review.names}</h5>
                </div>
                </div> 
                <p>{review.review.description}</p>
        </div>
        </div>
    );
};

export default ReviewBox;