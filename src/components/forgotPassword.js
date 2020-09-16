import React from 'react';
import { Link } from 'react-router-dom'

function ForgotPassword (){
    return (
        <div className="login">

            <div className="login_container">
                <h3>
                 Forgot Password
                </h3>
                <form>
                    
                    <input 
                    type="text" 
                    placeholder="Enter Email Address"
                    required /> 
                    <Link><button class="login_button">Send Mail</button></Link>
                </form>
                <Link to="/forgotpassword" className="forgot_password"><p>Forgot password?</p></Link> 
            </div>
        </div>
    )
}

export default ForgotPassword;