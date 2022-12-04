import React from 'react';
import profileImg from '../../assets/img/prof.svg'
import "./style.css"

const Sidebar = () => {
    return (
        <div className="flex-col h-screen" dir="rtl">
            <div id="profile" className={"flex-col tw-text-gray"}>
                <img src={profileImg} alt={"Profile"} className="img" />
                <h3 className={"text-gray"}>محمدامین محودی</h3>
                <span>09022405474</span>
            </div>
            <div id="skills"></div>
        </div>
    );
};

export default Sidebar;