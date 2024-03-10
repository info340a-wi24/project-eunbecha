import React from 'react';
import { Routes, Route, Navigate, Link } from 'react-router-dom';

function LoginPage() {
    return (
        <div>
            <div className="login-container">
                <h1 id="logo_login"> <Link to="/">Musicify</Link></h1>
                <p id="intro">Share music with all.</p>
                <form>
                    <label for="email">Email:</label>
                    <input type="email" id="email" name="email" placeholder="email" />
                    <label for="pass">Password:</label>
                    <input type="password" id="pass" name="password" placeholder="password" required />
                    <button class="signin" type="signin" aria-label="SignIn">Sign In</button>
                </form>
            </div>
        </div>
    )
}

export default LoginPage;