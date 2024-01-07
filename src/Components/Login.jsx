import React, { useState } from 'react';
import { logIn } from './firebase-service';

const LogIn = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleLogIn = async () => {
        try {
            await logIn(email, password);
            console.log('User logged in successfully!');
        } catch (error) {
            console.error('Error logging in:', error.message);
        }
    };

    return (
        <div>
            <h2>Log In</h2>
            <input type="email" placeholder="Email" onChange={(e) => setEmail(e.target.value)} />
            <input type="password" placeholder="Password" onChange={(e) => setPassword(e.target.value)} />
            <button onClick={handleLogIn}>Log In</button>
        </div>
    );
};

export default LogIn;