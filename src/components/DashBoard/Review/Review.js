import React, { useContext } from 'react';
import { useForm } from 'react-hook-form';
import { useHistory } from 'react-router-dom';
import { UserContext } from '../../../App';
import SideBar from '../SideBar/SideBar';
import UpBar from '../UpBar/UpBar';

const Review = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const { register, handleSubmit, errors } = useForm();
    const history = useHistory();

    const onSubmit = data => {
        const reviewDetails = { ...loggedInUser,  review: data, time: new Date()}

        fetch('https://serene-depths-71399.herokuapp.com/addReview', {
            method: 'POST',
            headers: { 'Content-Type' : 'application/json'},
                body: JSON.stringify(reviewDetails)
            })
            .then(res => res.json())
            .then(data => {
                if(data){
                    alert("Thanks for your Opinions!");
                }
            })
            history.push('/')
         }

    return (
       <div>
           <UpBar></UpBar>
            <div className="d-flex">
        <div className="col-md-3">
            <SideBar></SideBar>
        </div>
        <div className="col-md-9">
        <form className="register bg-light" onSubmit={handleSubmit(onSubmit)}>
                <h3>Order</h3>
                <input name="name" ref={register({ required: true })} placeholder="Your Name"/>
                {errors.name && <span className="error">This name is required</span>}
                <br/>   
                <input name="names" ref={register({ required: true })} placeholder="Company's Name, Designation"/>
                {errors.email && <span className="error">This email is required</span>}
                <br/>
                <input style={{height: "100px"}} name="description" type="text" ref={register({ required: true })} placeholder="Description"/>
                {errors.address && <span className="error">This address is required</span>}
                <br/>
                <button class="reg btn btn-dark"type="submit">Submit</button>
            </form>
        </div>
    </div>

       </div>
    );
};

export default Review;