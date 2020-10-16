import React, { useContext } from 'react';
import * as firebase from "firebase/app";
import "firebase/auth";
import logo from '../../images/logos/logo.png'
import './Login.css';
import logo1 from '../../images/logos/google.png';
import { useHistory, useLocation } from 'react-router-dom';
import { UserContext } from '../../App';
import firebaseConfig from './FirebaseConfig/FirebaseConfig';

if(firebase.apps.length === 0) {
    firebase.initializeApp(firebaseConfig);

}

const LogIn = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext)
    let history = useHistory();
    let location = useLocation();
    const { from } = location.state || { from: { pathname: "/" } };


    const handleGoogleSignIn = () => {
        var provider = new firebase.auth.GoogleAuthProvider();
        firebase.auth().signInWithPopup(provider).then(function(result) {
            const {displayName, email, photoURL} = result.user;
            console.log(result.user);
            const signedInUser = {name: displayName, email: email, photoURL: photoURL}
           setLoggedInUser(signedInUser)
           storeAuthToken();
          }).catch(function(error) {
            
          });
    }

    const storeAuthToken = () => {
        firebase.auth().currentUser.getIdToken(/* forceRefresh */ true)
          .then(function (idToken) {
            sessionStorage.setItem('token', idToken);
            history.replace(from);
          }).catch(function (error) {
            // Handle error
          });
      }


    return (
        <div className="login-container App">
            <div>
                <img style={{width:'30%'}} src={logo} alt=""/>
            </div>
            <div className="login">
                <h4>Login with</h4>
                <button className="social-button" onClick={handleGoogleSignIn}>
                <img style={{height: "25px", width: "25px", marginRight:"100px"}} src={logo1} alt=""/> Continue With google</button>  
                <p>Don't' have an account?<a style={{color: 'blue', borderBottom: '2px solid blue', cursor: 'pointer'}} href="/login">Create an account</a></p>      
            </div>
        </div>
    );
};

export default LogIn;