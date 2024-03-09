import React from 'react';
import { Routes, Route, Navigate, Link } from 'react-router-dom';

function AccountPage() {
  return (
    <div>
      <div className="flex-container">

        <div className="main-content">

          <header>
            <div className="NavButton">
              <a href="/">
                <h1 className='logo'>Musicify</h1>
              </a>
              <Link to="/">
                <span className="material-icons md-64">home</span>
              </Link>
            </div>
          </header>  

            <h2 className="accountDetails">Account Details</h2>
            
            <div className="sectionBox">
              <div className="box">
                  <div className="accountAccess">
                    <a href="/LoginPage.js">
                      <h3>Account Access</h3>
                    </a>
                  </div>
              </div>
            </div>

            <div className="sectionBox">
                <div className="box">
                    <div className="profileEdit">
                      <a href="/profilePicPage">
                        <h3>Edit Profile Picture</h3>
                      </a>
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