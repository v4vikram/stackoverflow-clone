import React,{useState} from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import './auth.css';
// import login from '../../asserts/img/login.svg'
import login from '../../asserts/img/logo-line.png'
import AboutAuth from './AboutAuth';
// import logout from '../../asserts/img/logout.svg'

import { authSignup, authLogin } from '../../actions/auth';

const Auth = () => {
  const [isSignup, setIsSignup] = useState(false);
  const [input, setInput] = useState({
    name:"",
    email:"",
    password:""
  });

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = (e) =>{
    e.preventDefault();
    // dispatch(input, navigate)

    if(isSignup){
      dispatch(authSignup(input, navigate));
   
    }
    else{
      dispatch(authLogin(input, navigate));
    }
    
  }
  // console.log(input)

  const handleSwitch = ()=>{
    setIsSignup(!isSignup)
  }
  return (
   <section className="auth-section">
    {
      isSignup && <AboutAuth/>
    }
      <div className="auth-container-2">
          {!isSignup &&
            <div className="login-line-div">
              <img src={login} alt="Stack Overflow" className='login-logo' width='100px'/> 
            </div>
          }
            <form action="" onSubmit={handleSubmit}>
              {
                isSignup && (
                  <label>
                      <h4>Display Name</h4>
                      <input type="text" name='name' onChange={(e)=>setInput({...input,name:e.target.value})}/>
                  </label>
                ) 
              }
                <label htmlFor="">
                  <h4>Email</h4>
                  <input type="email" name='email'  onChange={(e)=>setInput({...input, email:e.target.value})}/>
                </label>
                <label htmlFor="">
                  <div style={{display: 'flex', justifyContent:'space-between'}}>
                    <h4>Password</h4>
                      {
                        !isSignup && <h4 style={{color: "#007ac6"}}>Forgot Password</h4> 
                      }
                  </div>
                  <input type="password" name='password' id='password' onChange={(e)=>setInput({...input,password:e.target.value})}/>
                  {isSignup && <p >Passwords must contain at least eight characters,<br/> including at least 1 letter and 1 number.</p>}
                </label>
                <br/>
                {
                  isSignup && (
                    <label htmlFor='check' className='check-label'>
                        <input type="checkbox" name="" id="check" /><br/>
                        <p>Opt-in to receive occasional product<br/> updates, user research invitations, company<br/> announcements, and digests.</p>
                    </label>
                  )
                }

                <button type='submit' className='auth-btn'>{isSignup ? 'Sign Up' : 'Login'}</button>

            </form>
            <p>
              {isSignup? 'Already have an account?': "Don't have an account?"}
              <button type='submit' className='nav-btn' onClick={handleSwitch}>{isSignup? "Login": "Signup"}</button>
            </p>
            
            {
                  isSignup && (
                    <p style={{color: "#666767", fontSize: "13px"}}>
                      By clicking “Sign up”, you agree to our 
                      <span style={{color: "#007ac6"}}>terms of service</span>
                      <span style={{color: "#007ac6"}}> privacy policy</span>and 
                      <span style={{color: "#007ac6"}}>cookie policy</span>
                    </p>
                  )
                }

          
      </div>
   </section>
  )
}

export default Auth