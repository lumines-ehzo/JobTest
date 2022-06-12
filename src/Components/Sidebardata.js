import React from 'react'
import homeicon from "../img/home.png";
import usericon from "../img/user.png";
import moneyicon from "../img/money.png";
import moreicon from "../img/more.png";

export const Sidebardata = [
    {
        title:"หน้าหลัก",
        icon:<img src={homeicon} style={{width:40}}/>,
        link:"/home"
    },
    {
        title:"บัญชีของฉัน",
        icon:<img src={usericon} style={{width:40}}/>,
        link:"/home"
    },
    {
        title:"กองทุน",
        icon:<img src={moneyicon} style={{width:40}}/>,
        link:"/home"
    },
    {
        title:"เพิ่มเติม",
        icon:<img src={moreicon} style={{width:40}}/>,
        link:"/home"
    },
];
