import React from 'react';
import { Link } from 'react-router-dom';
import './SignIn.css' // Assuming you use React Router for navigation

const SignInForm = () => {
    const handleSubmit = (event) => {
        event.preventDefault();
        // Handle form submission logic here
    };

    return (
        <div className="signin-form">
            <h2>Sign In</h2>
            <form onSubmit={handleSubmit}>
                <label htmlFor="phone">Phone Number:</label>
                <input type="tel" id="phone" name="phone" required />

                <label htmlFor="password">Password:</label>
                <input type="password" id="password" name="password" required />

                <button type="submit">Sign In</button>
            </form>

            <p>Don't have an account? <Link to="/signup">Sign Up</Link></p>
        </div>
    );
};

export default SignInForm;
