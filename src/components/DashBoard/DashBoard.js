import React from 'react';
import Order from './Order/Order';
import SideBar from './SideBar/SideBar';
import { useContext } from 'react';
import { useForm } from "react-hook-form";
import fakeData from '../Home/fakeData/fakeData';
import { UserContext } from '../../App';
import './DashBoard.css'
import { useHistory, useParams } from 'react-router-dom';
import UpBar from './UpBar/UpBar';




const DashBoard = () => {
   
    return (
       <div>
           <UpBar></UpBar>
            <div className="d-flex">   
                <div style={{fontSize: '20px'}} className="col-md-3 ml-5 mt-3 p-2">
                        <SideBar></SideBar>
                    </div>
                    <div className="col-md-9 bg-light">
                        <Order></Order>
                    </div>
                </div>
            </div>
    );
};

export default DashBoard;