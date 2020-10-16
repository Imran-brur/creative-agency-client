import React from 'react';
import AdminServiceList from './AdminServiceList/AdminServiceList';
import SideBar from '../DashBoard/SideBar/SideBar';
import UpBar from '../DashBoard/UpBar/UpBar';




const AdminDashBoard = () => {
   
    return (
       <div>
           <UpBar></UpBar>
            <div className="d-flex">   
                <div style={{fontSize: '20px'}} className="col-md-3 ml-5 mt-3 p-2">
                        <SideBar></SideBar>
                    </div>
                    <div className="col-md-9 bg-light">
                        <AdminServiceList></AdminServiceList>
                    </div>
                </div>
            </div>
    );
};

export default AdminDashBoard;