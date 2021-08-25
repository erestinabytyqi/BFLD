import React from "react";
import './profile.css';
import NavBar from "../NavBar";
// import Image from 'react-bootstrap/Image';
// import cover from "../cover.jpg";
import ProfileName from "./ProfileName";
import EventPage from "./EventPage";
const Profile = () => {
    return (
        <div id="themainprofilediv">
            <NavBar></NavBar>
            <div id="testid">
            {/* <Image src={cover} fluid  /> */}
            </div>
            <div id="profilepicture">

            </div>
         <ProfileName></ProfileName>

         <div id="addtogether">
            <div id="aboutmediv">
                <div id="aboutmetitle">
                    <h2 id="editingtitles">Details:</h2>
                </div>
            </div>
            <div id="tabs">
              <a href="####" className="colorforlinks">  <div className="buttons"><h3>Posts</h3></div></a>
              <a href="####" className="colorforlinks"> <div className="buttons"><h3>About</h3></div></a>
              <a href ="####" className="colorforlinks"><div className="buttons"><h3>Followers</h3></div></a>
              <a href="####" className="colorforlinks"><div className="buttons"><h3>Photos</h3></div></a>
            </div>
            <EventPage></EventPage>
        </div>
        </div>
    )
}
export default Profile;