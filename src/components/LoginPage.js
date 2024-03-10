import React from 'react';
import { Routes, Route, Navigate, Link } from 'react-router-dom';

function LoginPage() {
    return (
        <div>

            <div className="flex-container">

            <div className="main-content">

                <header>
                    <div className="NavButton">
                        <Link to="/">
                            <h1 className='logo'>Musicify</h1>
                        </Link>
                    </div>
                </header>
            </div>
            </div>
        </div>
    )
}

export default LoginPage;