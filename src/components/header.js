import React from "react";
//import Imagesider from './Imagesider'
import LocalMallIcon from '@material-ui/icons/LocalMall';
import ComputerIcon from '@material-ui/icons/Computer';
import PhoneAndroidIcon from '@material-ui/icons/PhoneAndroid';
import StoreIcon from '@material-ui/icons/Store';
import SportsEsportsIcon from '@material-ui/icons/SportsEsports';
import TvIcon from '@material-ui/icons/Tv';
import DriveEtaIcon from '@material-ui/icons/DriveEta';
import HomeIcon from '@material-ui/icons/Home';
import CategoryIcon from '@material-ui/icons/Category';
const Header = ()=> {
    return (
        <div className="container">
            <div className="row">
                <div className="items">
           <StoreIcon/><a href="/"><span  className="option_">Supermaket</span></a>
            </div>
            <div className="items">
            <LocalMallIcon/><a href="/"><span  className="option_">Clothing</span></a>
            </div>
             <div className="items">
            <ComputerIcon/><a href="/"><span  className="option_">Laptops & Computer</span></a>
            </div>
            <div className="items">
            <SportsEsportsIcon/><a href="/"><span  className="option_">Games</span></a>
            </div>
            <div className="items">
            <PhoneAndroidIcon/><a href="/"><span  className="option_">Phones</span></a>
            </div>
            <div className="items">
            <TvIcon/><a href="/"><span  className="option_">Electronics</span></a>
            </div>
            <div className="items">
            <DriveEtaIcon/><a href="/"><span  className="option_">Automoblies</span></a>
            </div>
            <div className="items">
            <HomeIcon/><a href="/"><span  className="option_">Estate & House</span></a>
            </div>
            <div className="items">
            <CategoryIcon/><a href="/"><span  className="option_">Other Catergories</span></a>
            </div>     
            </div>
            <div className="row2">
            <img alt= "" className="control" src="https://ng.jumia.is/cms/Homepage/2020/W37/Mens-Fashion.jpg" />   
            </div>
            <div className="row">
            <p>Supermaket</p>
                <p>Supermaket</p>
                <p>Supermaket</p>
                <p>Supermaket</p>
                <p>Supermaket</p>
                <p>Supermaket</p>
               
            </div>
        
        </div>
    )
}

export default Header;