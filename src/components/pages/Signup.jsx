import React from 'react';
import './SignUp.css';

function Signup() {
    const handleSubmit = (event) => {
        event.preventDefault(); 
    };

    return (
        <div className="signup-container">
            <main className="signup-form-container">
                <h1>Sign Up</h1>
                <form onSubmit={handleSubmit} className="signup-form">
                    <div className="form-group">
                        <label htmlFor="email">Email Address:</label>
                        <input type="email" id="email" name="email" required />
                    </div>

                    <div className="form-group">
                        <label htmlFor="password">Password:</label>
                        <input type="password" id="password" name="password" required />
                    </div>

                    <div className="form-group">
                        <label htmlFor="confirmPassword">Confirm Password:</label>
                        <input type="password" id="confirmPassword" name="confirmPassword" required />
                    </div>

                    <div className="button-container">
                        <button type="submit" id="submitBtn">Sign Up</button>
                        <button type="reset" id="resetBtn">Reset</button>
                    </div>
                </form>
            </main>

            <footer className="footer">
                <p>&copy; 2023 Winery. All Rights Reserved.</p>
            </footer>
        </div>
    );
}

export default Signup;
