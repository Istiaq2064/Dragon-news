import React from 'react';
import SocialLogIn from '../SocialLogIn';
import FindUs from '../FindUs';
import QZone from '../QZone';

const RightNavBar = () => {
    return (
        <div className='space-y-5'>
            <SocialLogIn></SocialLogIn>
            <FindUs></FindUs>
            <QZone></QZone>
        </div>
    );
};

export default RightNavBar;