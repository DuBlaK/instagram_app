import React from 'react';
import User from './User';
import Palette from './Palette';

const Profile = () => {
    return (
        <div className="container profile">
            <User
                src="https://img.buzzfeed.com/buzzfeed-static/static/2015-01/8/12/campaign_images/webdr06/24-things-that-happen-when-you-date-a-man-with-a--2-17654-1420738954-5_dblbig.jpg" 
                alt="man" 
                name="just_a_man"/>
            <Palette/>
        </div>
    )
}
export default Profile;