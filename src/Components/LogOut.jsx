import React from 'react';
import { logOut } from './firebase-service';

const LogOut = () => {
    const handleLogOut = async () => {
        try {
            await logOut();
            console.log('User logged out successfully!');
        } catch (error) {
            console.error('Error logging out:', error.message);
        }
    };

    return (
        <div>
            <h2>Log Out</h2>
            <button onClick={handleLogOut}>Log Out</button>
        </div>
    );
};

export default LogOut;