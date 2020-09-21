import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { auth } from '../firebase'; 

function Login (){
    const history = useHistory();
const [email, setUser] = useState('');
const [password, setPassword]= useState('')
const Signin = (e) => {
    e.preventDefault()
    
    auth.signInWithEmailAndPassword(email, password).then(auth => {
        if(auth){
            history.push('/')
        }
        else {
            alert('Wrong email and password')
        }
    }).catch ( err=> console.log(err))
    setUser('')
    setPassword('')
}

    return (
        <div className="login">

            <div className="login_container">
                <h1>
                    Sign In
                </h1>
                <form onSubmit={Signin}>
                    <input 
                    type="text" 
                    placeholder="email"
                    value={email}
                    name="email"
                    onChange ={ (e) => setUser(e.target.value)}
                    />
                    <input type="password" placeholder="password"
                    value={password}
                    name="password"
                    onChange ={ (e) => setPassword(e.target.value)}
                    />
                    <button class="login_button"> Sign In</button>
                </form>
                <Link to="/forgotpassword" className="forgot_password"><p>Forgot password?</p></Link>
                <p>
                    By siging-in you agree to the terms & conditon of the Use & Sale. Please see our Privacy Notice, our Cookies Notice
                </p>
                <Link to='/register'><button className="new_button">Create an Account</button></Link>
                
            </div>
        </div>
    )
}

export default Login;