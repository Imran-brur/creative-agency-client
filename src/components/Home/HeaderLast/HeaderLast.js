import React from 'react';
import slack from '../../../images/logos/slack.png'
import google2 from '../../../images/logos/google2.png'
import Uber from '../../../images/logos/uber.png'
import Netflix from '../../../images/logos/netflix.png'
import airbn from '../../../images/logos/airbnb.png'
import './HeaderLast.css'

const HeaderLast = () => {
    return (
        <div className='mt-5 mb-5 row ml-auto d-flex justify-content-center'>
            <div >
                <img style={{width: "150px", height: "70px", padding: "5px", margin: "10px"}} src={slack} alt=""/>
            </div>
            <div className="img">
                <img style={{width: "150px", height: "70px", padding: "5px" , margin: "10px"}} src={google2} alt=""/>
            </div>
            <div className="img">
                <img style={{width: "150px", height: "70px", padding: "5px" , margin: "10px"}} src={Uber} alt=""/>
            </div>
            <div className="img">
                <img style={{width: "150px", height: "70px", padding: "5px" , margin: "10px"}} src={Netflix} alt=""/>
            </div>
            <div className="img">
                <img style={{width: "150px", height: "70px", padding: "5px" , margin: "10px"}} src={airbn} alt=""/>
            </div>

        </div>
    );
};

export default HeaderLast;