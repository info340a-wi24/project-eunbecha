import React from 'react';
import { Routes, Route, Navigate, Link } from 'react-router-dom';

function AccountPage() {
  return (
    <div>
      <div className="flex-container">

        <div className="main-content">

          <header>
            <div className="NavButton">
              <h1>Musicify</h1>
              <Link to="/">
                <span className="material-icons md-64">home</span>
              </Link>
            </div>
          </header>  

            <h2 className="accountDetails">Account Details</h2>
            
            <div className="sectionBox">
                <h3>Account Access</h3>
                <div className="box">
                    <div className="accountAccess">
                        <h4>Log in</h4>
                        <h4>Sign in</h4>
                        <h4>Log out</h4>
                    </div>
                </div>
            </div>

            <div className="sectionBox">
                <h3>Edit Profile</h3>
                <div className="box">
                    <div className="profileEdit">
                        <h4>Email</h4>
                        <h4>Password</h4>
                        <h4>Profile Picture</h4>
                    </div>
                </div>
            </div>
        </div>

        <div className="yourPlaylists">Your Playlists:</div>

      </div>
    </div>
  );
}

export default AccountPage;