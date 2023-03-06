import React, { useState } from 'react'
import menuIcon from '../../assets/images/icons8-hamburger-menu.jpg'
import { AiOutlineAlignCenter } from 'react-icons/ai';
import { BsChevronDown } from 'react-icons/bs';
import { MdHotelClass } from 'react-icons/md';
import { Link } from 'react-router-dom';
import '../scss/Home.scss'
import Slider from '../inc/Slider';
import SwiperSlider from '../inc/SwiperSlider';
import AboutUs from '../pages/AboutUs'
import RoomsSuites from './RoomsSuites';
import Restaurant from './Restaurant';
import Meetings from './Meetings';




// When the user scrolls down 20px from the top of the document, slide down the navbar
// window.onscroll = function () { scrollFunction() };

// function scrollFunction() {
//   if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
//     document.getElementById("navbar").style.top = "0";
//   } else {
//     document.getElementById("navbar").style.top = "-90px";
//   }
// }

function Home() {
const [view, setView] = useState(false);
const onOverStyle={
  backgroundColor:''
}
if(view){
  onOverStyle.backgroundColor = "green"
}
else{
   onOverStyle.backgroundColor = "green"
}

  return (
    <div>
      <div id="home-hero" onMouseEnter={()=> setView(true)} onMouseOut={()=>setView(false)} style={{onOverStyle}}>
      {/* <Slider /> */}
      
      <SwiperSlider />
      <div className="arrow-down-area circle-design">
        <a href="#aboutus"><BsChevronDown className="BsChevronDown" /></a>
      </div>
      </div>
      <section  id="aboutus">
        <AboutUs/>
      </section>
      <section >
        <RoomsSuites/>
        <Restaurant/>
        <Meetings/>
      
      </section>
      </div>
      
      
  )
}

export default Home
