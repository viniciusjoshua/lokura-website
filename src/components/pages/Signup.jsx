import React from 'react';
import './SignUp.css'; //

function Signup() {
    const handleSubmit = (event) => {
        event.preventDefault(); // Prevent default form submission

        
    };

    return (
        <div>
            <header>
                <div className="logo">
                    <img src="logo.png" alt="Winery Logo" />
                    <p>The best drinks in the town</p>
                </div>
            </header>

            <nav>
                <ul>
                    <li><a href="index.html">Home</a></li>
                    <li>
                        <a href="#products">Products &#9660;</a>
                        <ul>
                            <li><a href="redwine.html">Red Wine</a></li>
                            <li><a href="rose.html">Rose</a></li>
                            <li><a href="otherproducts.html">Other Products</a></li>
                        </ul>
                    </li>
                    <li><a href="about.html">About</a></li>
                    <li><a href="blog.html">Blog</a></li>
                    <li><a href="contactus.html">Contact Us</a></li>
                    <li><a href="signin.html">Sign In</a></li>
                    <li><a href="signup.html">Sign Up</a></li>
                </ul>
            </nav>

            <main>
                <h1>Sign Up</h1>
                <form onSubmit={handleSubmit}>
                    <label htmlFor="email">Email Address:</label>
                    <input type="email" id="email" name="email" required />
                    <br /><br />

                    <label htmlFor="password">Password:</label>
                    <input type="password" id="password" name="password" required />
                    <br /><br />

                    <label htmlFor="confirmPassword">Confirm Password:</label>
                    <input type="password" id="confirmPassword" name="confirmPassword" required />
                    <br /><br />

                    <button type="submit" id="submitBtn">Sign Up</button>
                    <button type="reset" id="resetBtn">Reset</button>
                </form>
            </main>

            <footer>
                <p>&copy; 2023 Winery. All Rights Reserved.</p>
            </footer>
        </div>
    );
}

export default Signup;
