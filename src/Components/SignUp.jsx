import React, { useState } from 'react';
import { signUp } from './firebase-service';

const SignUp = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSignUp = async () => {
        try {
            await signUp(email, password);
            console.log('User signed up successfully!');
        } catch (error) {
            console.error('Error signing up:', error.message);
        }
    };

    return (
        <div>
            <h2>Sign Up</h2>
            <input type="email" placeholder="Email" onChange={(e) => setEmail(e.target.value)} />
            <input type="password" placeholder="Password" onChange={(e) => setPassword(e.target.value)} />
            <button onClick={handleSignUp}>Sign Up</button>
        </div>
    );
};

export default SignUp;