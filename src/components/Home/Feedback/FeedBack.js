import React, { useState } from 'react';
import { useEffect } from 'react';
import ReviewBox from '../ReviewBox/ReviewBox';

const Feedback = () => {
    const [reviews, setReviews] = useState([])

    useEffect(() => {
        fetch('http://localhost:5000/reviews')
        .then(res => res.json())
        .then(data => setReviews(data))
    }, [])


    return (
       <div className=" container mt-5">
            <h1 className="text-center mb-5">Client <span style={{color: 'green'}}>Feedback</span></h1>
            <div  className="row">
                {
                    reviews.map(review => <ReviewBox review={review} id={review._id}></ReviewBox>)
                }
            </div>
      </div>
    );
};

export default Feedback;