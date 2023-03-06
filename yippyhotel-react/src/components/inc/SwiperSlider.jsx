import React from 'react'
import yippyhotel1 from '../../assets/images/yippyhotel1.jpg'
import yippyhotel2 from '../../assets/images/yippyhotel2.jpg'
import yippyhotel3 from '../../assets/images/yippyhotel3.jpg'
import { BsChevronDown } from 'react-icons/bs';
import { Link } from 'react-router-dom';

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
// import Swiper core and required modules
import { Navigation, Pagination, Scrollbar, A11y, EffectFade, EffectCube, EffectFlip} from 'swiper';
import '../scss/SwiperSlider.scss'


function SwiperSlider() {
  return (
    <div>
      <Swiper
      // install Swiper modules
      direction={"horizontal"}
      modules={[Navigation, Pagination, EffectFlip]}
      effect={'flip'}
      cubeEffect= {{
        shadow: true,
        slideShadows: true,
        shadowOffset: 20,
        shadowScale: 0.94,
      }}
      className="mySwiper"
      spaceBetween={30}
      slidesPerView={1}
      navigation
      pagination={{ clickable: true }}
      scrollbar={{ draggable: false }}
      // onSwiper={(swiper) => console.log(swiper)}
      // onSlideChange={() => console.log('slide change')}
    >
      <SwiperSlide><img src={yippyhotel1} alt="yippyhotel1" /></SwiperSlide>
      <SwiperSlide><img src={yippyhotel2} alt="yippyhotel2" /></SwiperSlide>
      <SwiperSlide><img src={yippyhotel3} alt="yippyhotel3" /></SwiperSlide>
      <SwiperSlide><img src={yippyhotel1}  alt="yippyhotel1" /></SwiperSlide>
        <SwiperSlide><img src={yippyhotel2} alt="yippyhotel2" /></SwiperSlide>
        <SwiperSlide><img src={yippyhotel3} alt="yippyhotel3" /></SwiperSlide>     
    </Swiper>
      
    </div>
    
  )
}

export default SwiperSlider
