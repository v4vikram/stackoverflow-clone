import React,{useState} from "react";
import './user-profile.css'
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { LeftSidebar } from "../../components";
import ProfileBio from './ProfileBio'
import EditProfileForm from './EditProfileForm'

const UserProfile = () => {

  const [handleswicth, handleSetSwitch] = useState(false);
  const { id } = useParams();

  let user =  useSelector( (state) => state.usersReducer);
  let currentUser = useSelector((state) => state.currentUserReducer);
  const currentProfile = user.filter((user) => user._id === id)[0];

  // console.log(handleswicth)

  return (
    <div className="home-container-1">
      <LeftSidebar />
      <div className="home-container-2">
        <div className="user-details-container">
          <div className="user-details" style={{ marginTop: "80px" }}>
            <h1
              style={{
                background: "teal",
                padding: "10px",
                width: "75px",
                height: "70px",
              }}
            >
              {currentProfile.user.charAt(0).toUpperCase()}
            </h1>
            <p>{currentProfile.user}</p>
            {/* {console.log("id", id, currentUser.data[0]._id)} */}
            {currentUser.data[0]._id === id && (
              <button className="nav-btn" onClick={() => handleSetSwitch(true)}>
                Edit
              </button>
            )}
          </div>
              <>
                {
                  handleswicth ? <EditProfileForm  currentUser={currentUser} handleSetSwitch={handleSetSwitch} /> : <ProfileBio currentProfile={currentProfile}/>

                }
              </>
        </div>
      </div>
    </div>
  );
};

export default UserProfile;
