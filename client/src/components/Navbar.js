import React from 'react'
import ExploreIcon from '@mui/icons-material/Explore';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import SearchIcon from '@mui/icons-material/Search';
import TuneIcon from '@mui/icons-material/Tune';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';

export default function Navbar() {
  return (
    <div className='navbar'>
        <div><img height="58px" src="https://www.cipherschools.com/static/media/Cipherschools_icon@2x.3b571d743ffedc84d039.png" /></div>
        <div className='navbarBrand'>CipherSchools</div>
        <div className='browse'><ExploreIcon />Browse <KeyboardArrowDownIcon /></div>
        <div className='navbarRight'>
            <div className='navbarSearchBox'>
                <div><SearchIcon /></div>
                <div style={{ width: "80%" }}><input type="text" className='navSearchInput' placeholder='Search and Learn'/></div>
                <div><TuneIcon /></div>
            </div>
            <div style={{ display: "flex", alignItems: "center", marginLeft: "0.5rem" }}><NotificationsNoneIcon /></div>
            <div style={{ display: "flex", alignItems: "center", marginLeft: "0.5rem" }}><AccountCircleIcon /></div>
        </div>
    </div>
  )
}
