import React, { useState } from 'react';
import { Routes, Route, Navigate, Link } from 'react-router-dom';

function ProfilePicPage() {
    const [profilePic, setProfilePic] = useState(null);

    const handleFileUpload = (event) => {
        const file = event.target.files[0];
        const reader = new FileReader();

        reader.onloadend = () => {
            setProfilePic(reader.result);
        };

        if (file) {
            reader.readAsDataURL(file);
        }
    };

    return (
        <div className='profilePicPage'>
            <div className="flex-container">

                <div className="main-content">

                    <header>
                        <div className="NavButton">
                            <Link to="/">
                                <h1 className='logo'>Musicify</h1>
                            </Link>
                        </div>
                    </header>

                <div style={{paddingTop: '20px', paddingLeft: '20px'}}>
                    {profilePic ? (
                        <img src={profilePic} alt="Profile" style={{width: 100, height: 100}} />
                    ) : (
                        <div>No profile picture</div>
                    )}

                    <input type="file" accept="image/*" onChange={handleFileUpload} />
                </div>
                
            </div>
        </div>
    </div>
    )
}

export default ProfilePicPage;