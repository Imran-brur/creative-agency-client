import React, { useContext, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUsers, faCartPlus, faAddressBook, faCommentAlt, faPeople } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom';
import { UserContext } from '../../../App';
import { useState } from 'react';

const SideBar = () => {

    const [loggedInUser, setLoggedInUser] = useContext(UserContext)
    const [isAdmin, setIsAdmin] = useState(false);

    useEffect(() => {
        fetch('http://localhost:5000/isAdmin',{
            method: 'POST',
            headers: { 'content-Type': 'application/json'},
            body: JSON.stringify({email: loggedInUser.email})
        })
        .then(res => res.json())
        .then(data => setIsAdmin(data))
    }, [])

    return (
        <div>
            <ul className="list-unstyled">
                <li>
                    <Link to="/order">
                        <FontAwesomeIcon icon={faCartPlus} /> <span>Order</span>
                    </Link>
                </li>
                <li>
                    <Link to="/serviceList">
                        <FontAwesomeIcon icon={faAddressBook} /> <span>Service List</span>
                    </Link>
                </li>
                <li>
                    <Link to="/review">
                        <FontAwesomeIcon icon={faCommentAlt} /> <span>Review</span>
                    </Link>
                </li>
              { isAdmin && <div>
               <li>
                    <Link to="/userList">
                        <FontAwesomeIcon icon={faUsers} /> <span>UserList</span>
                    </Link>
                </li>
                <li>
                    <Link to="/addService">
                        <FontAwesomeIcon icon={faCartPlus} /> <span>Add Service</span>
                    </Link>
                </li>
                <li>
                    <Link to="/makeAdmin">
                        <FontAwesomeIcon icon={faUsers} /> <span>Make Admin</span>
                    </Link>
                </li>
               </div>}
                </ul>
        </div>
    );
};

export default SideBar;