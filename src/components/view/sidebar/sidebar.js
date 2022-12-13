import React from 'react';
import profileImg from '../../../assets/img/prof.svg'
import UProgress from "../../ui/progress/u-progress.tsx";

const Sidebar = () => {
return (
  <div className="column w-[300px] h-screen p-4 bg-black" dir="rtl">
    <div id="profile" className="column center-content text-beige">
      <img src={profileImg} alt={"Profile"} className="w-32 rounded-full" />
      <h3 className={"mt-5"}>محمدامین محودی</h3>
      <span>09022405474</span>
    </div>
    <div id="skills">
      <UProgress/>
    </div>
  </div>
);
};

export default Sidebar;