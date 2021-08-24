import React from "react";
import './profile.css';
import NavBar from "../NavBar";
// import Image from 'react-bootstrap/Image';
// import cover from "../cover.jpg";
const Profile = () => {
    return (
        <div id="themainprofilediv">
            <NavBar></NavBar>
            <div id="testid">
            {/* <Image src={cover} fluid  /> */}
            </div>
            <div id="profilepicture">

            </div>
            <div id="name-surname">
                <h1 id="designnamesurname">Joe Milleas .Ms</h1>
                <h4 id="midProfession">Proffesor</h4>
                </div>
            <div id="aboutmediv">
                <div id="aboutmetitle">
                    <h2 id="editingtitles">Details:</h2>
                </div>
            </div>
        </div>
    )
}
export default Profile;