import React from 'react';

const Footer = () => {
    return (
        <div style={{backgroundColor: '#FBD062'}} className='row mt-5'>
            <div className="col-md-6">
                <h1>Let is handle your project professionally</h1>
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Saepe quae, voluptate officia sed eos voluptatem optio ipsum facilis provident fugit dolorum molestiae eius exercitationem ex, modi iste, harum quaerat non?</p>
            </div>
            <div className="col-md-6">
                <input className="form-control" type="text" placeholder="Your Email Address"/>
                <input className="form-control" type="text" placeholder="Your name/ company's name"/>
                <input style={{height: '200px'}} className="form-control" type="text" placeholder="Your message"/>
                <button className="btn btn-dark">send</button>

            </div>
            <div className="col-md-12 text-center mt-5">
                <p>Copyright Orange labs 2020</p>
            </div>
        </div>
    );
};

export default Footer;