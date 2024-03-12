import React, { useEffect } from 'react';
import {Link} from 'react-router-dom';
// import LoginPage from './LoginPage'

function AccountPage() {

  useEffect(() => {
    document.body.classList.add('accountPageBody');

    return () => {
      document.body.classList.remove('accountPageBody');
    };
  }, []);

  return (
    <div className="AccountPage">
      <div className="flex-container">

        <div className="main-content">

          <header>
            <div className="navigation">
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
                <Link to="/login">
                  <h3>Account Access</h3>
                </Link>
              </div>
            </div>
          </div>

          <div className="sectionBox">
            <div className="box">
              <div className="profileEdit">
                <Link to="/profile">
                  <h3>Edit Profile Picture</h3>
                </Link>
              </div>
            </div>
            </div>
          </div>

        {/* <div className="yourPlaylists">Your Playlists:</div> */}

      </div>
    </div>
  );
}

export default AccountPage;