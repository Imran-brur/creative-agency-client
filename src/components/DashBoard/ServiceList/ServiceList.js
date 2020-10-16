import React, { useContext, useEffect, useState } from 'react';
import { UserContext } from '../../../App';
import SideBar from '../SideBar/SideBar';
import UpBar from '../UpBar/UpBar';
import './ServiceList.css'

const ServiceList = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext)
    const [users, setUsers] = useState([])

    useEffect(() =>{
        fetch('http://localhost:5000/userServices')
        .then(res => res.json())
        .then(data => {
            setUsers(data)
        })
    },[])

    return (
        <div>
            <UpBar></UpBar>
            <div className="d-flex">
            <div style={{fontSize: '20px'}} className="col-md-3 ml-5 mt-3 p-2">
                <SideBar></SideBar>
            </div>
            <div className="col-md-9 bg-light row">
                {
                    users.map(user => 
                        <div className=" col-md-4">
                            <div class="card">
                            <img src={user.service.img} className="rounded mx-auto d-block" alt="..."/>
                        <div class="card-body center">
                            <h5 class="card-title">{user.user.title}</h5>
                            <p class="card-text">{user.user.description}</p>
                        </div>
                        </div>
                        </div>
                    )
                }
            </div>
        </div>
        </div>

    );
};

export default ServiceList;