import React from 'react';
import students from '../../../images/logos/Frame.png'
import './HeaderMain.css'

const HeaderMain = () => {
    return (
        <div className='row'>
            <div style={{marginTop: '50px'}} className='col-md-5'>
                <h1>Let's Grow Your <br/> Brand To The <br/> Next Level</h1>
                <p className='mt-3'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum neque enim ullam alias mollitia eum dignissimos impedit, error sit soluta est laudantium quasi dolor. Expedita laboriosam reprehenderit velit numquam alias.</p>
                <button className='btn btn-dark mt-2'>Hire Us</button>
            </div>
            <div className="col-md-7">
                <img className='img-fluid' src={students} alt=""/>
            </div>
        </div>
    );
};

export default HeaderMain;