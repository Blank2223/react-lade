import React, {memo} from "react";
import "./Login.css";

const Login = () =>{
    return(
        <div className="login_container">  
            <form className="form_2">
                <h2>Login</h2>

                <label htmlFor="email">Email:</label>
                <input type="text"
                 name="email"
                 id="email_1"
                 /><br/>
                
                <label htmlFor="password">Password:</label>
                 <input type="password"
                 name="Password"
                 id="password_1"
                />

                <p><a href="#" id="forgetten password">Forgot password?</a></p>

                 <button id="login">Login</button>

                 <p>Don't have an account?<a href="#" id="signup">Signup</a></p>
                 <p className="last">Or</p>
                
                 <button className="facebook">Login with Facebook</button>
                 <button className="google">Login with Google</button>

            </form>
        </div>
    );
};

export default memo(Login);