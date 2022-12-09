import React, { useEffect } from "react";
import "./navbar.css";
import search from "../../asserts/img/search.svg";
import logo from "../../asserts/img/logo.png";
import Avatar from "../Avatar/Avatar";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { setCurrentUser } from "../../actions/currentUser";
import decode from 'jwt-decode';

const Navbar = () => {
  let user = useSelector((state) => state.currentUserReducer);
  // let userFirstLetter = user.data[0].name.charAt(0)
  
  // console.log('user',user.data[0]._id)

  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {

    
    const token = user?.token 
        if(token){
            const decodedToken = decode(token)
            if(decodedToken.exp * 1000 < new Date().getTime()){
                handleLogout();
            }
        }

    dispatch(setCurrentUser(JSON.parse(localStorage.getItem("profile"))));
  }, [user?.token, dispatch]);

  //console.log("--->", user);
  const handleLogout = () =>{
    // alert('l')
    dispatch({type:'LOGOUT'});
    navigate('/');

    dispatch(setCurrentUser(null));
  }

  return (
    <nav className="main-nav">
      <div className="navbar">
        <Link to="/" className="nav-logo">
          <img src={logo} alt="logo" />
        </Link>
        <Link to="/" className="nav-item">
          About
        </Link>
        <Link to="/" className="nav-item">
          Products
        </Link>
        <Link to="/" className="nav-item">
          For Term
        </Link>

        <form action="">
          <input type="text" placeholder="search..." />
          <img src={search} alt="search" width="25" className="search-icon" />
        </form>
        {
          // console.log(user.result[0].name)
        }
        {user === null ? (
          <Link to="/auth" className="nav-btn">
            Log in
          </Link>
        ) : (
          <>
            
             
                
                {/* <Avatar
                backgroundColor="#009dff"
                px="11px"
                py="9px"
                borderRadius="50px"
                color="white"
                // props={userFirstLetter}
              > */}
                <Link to={`/users/${user?.data[0]?._id}`} style={{background: 'tomato',borderRadius:"50px", padding:'6px 10px'}}>
                  {user.data[0].name.charAt(0)}
                </Link>
                {/* {console.log('user.data', user.data[0].name.charAt(0))} */}
                {/* </Avatar> */}
               
              
            

            <button className="nav-btn" onClick={handleLogout}>Log out</button>
          </>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
