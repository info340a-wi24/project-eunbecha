import React, {useState} from 'react';
import { Link, useNavigate } from 'react-router-dom';

function LoginPage() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const handleEmailChange = (event) => {
        setEmail(event.target.value);
    };

    const handlePasswordChange = (event) => {
        setPassword(event.target.value);
    };

    const handleSignIn = (event) => {
        event.preventDefault();
        try {
            if (!email.includes('@')) {
                console.error('Invalid email format');
                return;
            }
            navigate('/');
        } catch (error) {
            console.error('Error during sign in:', error);
        }
    };


    return (
        <div>
            <div className="login-container">
                <h1 id="logo_login"> <Link to="/">Musicify</Link></h1>
                <p id="intro">Share music with all.</p>
                <form onSubmit={handleSignIn}>
                    <label htmlFor="email">Email:</label>
                    <input type="email" id="email" name="email" placeholder="email"
                    value={email} onChange={handleEmailChange} />
                    <label htmlFor="password">Password:</label>
                    <input type="password" id="password" name="password" placeholder="password" required
                    value={password} onChange={handlePasswordChange} />
                    <button className="signin" type="submit" aria-label="SignIn">Sign In</button>
                </form>
            </div>
        </div>
    )
}

export default LoginPage;