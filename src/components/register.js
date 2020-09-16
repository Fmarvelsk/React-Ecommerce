import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { auth } from '../firebase';

function Register (){
    const [email, setUser] = useState('');
    const [password, setPassword] = useState('')
    const history = useHistory();
    const registerForm = (e) =>{
        e.preventDefault()
        auth.createUserWithEmailAndPassword(email, password)
        .then( (auth) => {
           if(auth){
                history.push('/login')
            console.log(auth)
        }
        }).catch(err => alert(err.message))

    } 

    return (
        <div className="login">

            <div className="login_container">
                <h1>
                    Register an Account
                </h1>
                <form onSubmit={registerForm}>
                    <label>Email</label>
                    <input 
                    type="email" 
                    placeholder="email"
                    
                    onChange ={ (e) => setUser(e.target.value)}
                     required /> 
                    <label> Enter Password</label>
                    <input type="password" placeholder="password"
                    onChange ={ (e) => setPassword(e.target.value)}
                     required />
                  
                    <button class="login_button"> Register</button>
                </form>
                <Link to="/login" className="forgot_password"><p>Already have an account</p></Link>
                
            </div>
        </div>
    )
}
export default Register;