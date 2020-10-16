import React, { useContext } from 'react';
import { useForm } from 'react-hook-form';
import { useParams } from 'react-router-dom';
import { UserContext } from '../../../App';
import fakeData from '../../Home/fakeData/fakeData';
import './Order.css'

const Order = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const { register, handleSubmit, errors } = useForm();
    const {id} = useParams();
    const mainService = fakeData.find(data => data.id === id);

    const onSubmit = data => {
    const serviceDetails = { ...loggedInUser, service: mainService , user: data, time: new Date()}
        
    fetch('http://localhost:5000/addService', {
       method: 'POST',
       headers: { 'content-Type' : 'application/json'},
        body: JSON.stringify(serviceDetails)
    })
    .then(res => res.json())
    .then(data => {
        if(data){
            alert("Your order complete successfully")
        }
    })
}

  
    return (
           <div className="register">
                <h3 className="mb-4">Order</h3>
               <form onSubmit={handleSubmit(onSubmit)}>
                <input name="name" defaultValue={loggedInUser.name} ref={register({ required: true })} placeholder="Full Name/Company's Name"/>
                {errors.name && <span className="error">This name is required</span>}
                <br/>   
                <input  name="email" defaultValue={loggedInUser.email}  ref={register({ required: true })} placeholder="Username or Email"/>
                {errors.email && <span className="error">This email is required</span>}
                <br/>
                <input name="title" defaultValue={mainService.name} type="text" ref={register({ required: true })} placeholder=""/>
                {errors.address && <span className="error">This address is required</span>}
                <br/>
                <input style={{height: "150px"}} name="description" defaultValue={mainService.description} ref={register({ required: true })} placeholder="description"/>
                {errors.phone && <span className="error">This phone is required</span>}
                <br/>            
                <input name="Price" defaultValue={mainService.price} ref={register({ required: true })} placeholder="Organize books at the Library"/>
                {errors.phone && <span className="error">This phone is required</span>}
                <br/>
                <button class="reg btn btn-dark"type="submit">Order</button>
            </form>
        </div>
      
    );
};

export default Order;