import React from 'react'
import yippyhotel1 from '../../assets/images/yippyhotel1.jpg'
import yippyhotel2 from '../../assets/images/yippyhotel2.jpg'
import yippyhotel3 from '../../assets/images/yippyhotel3.jpg'
import { BsChevronDown } from 'react-icons/bs';
import '../scss/Slider.scss'
function Slider() {
    return (
        <div className="caro-hero">
        <div id="carouselExampleCaptions" className="carousel slide">
            <h1>Hi</h1>
            <div className="carousel-indicators">
                <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
                <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
            </div>
            <div className="carousel-inner hotel-images">
                <div className="carousel-item active">
                    <img src={yippyhotel1} className="d-block w-100" alt="yippyhotel1" />
                    <div className="carousel-caption d-none d-md-block">
                    <div className="text-box">
                            <h1>The Destination of<br/> Dreams</h1>
                            {/* <p>Some representative placeholder content for the second slide.</p> */}
                        </div>
                    </div>
                </div>
                <div className="carousel-item">
                    <img src={yippyhotel2} className="d-block w-100" alt="yippyhotel2" />
                    <div className="carousel-caption d-none d-md-block">
                        <div className="text-box">
                            <h1>The Destination of<br/> Dreams</h1>
                        </div>
                    </div>
                </div>
                <div className="carousel-item">
                    <img src={yippyhotel3} className="d-block w-100" alt="yippyhotel3" />
                    <div className="carousel-caption d-none d-md-block">
                    <div className="text-box">
                            <h1>The Destination of<br/> Dreams</h1>
                        </div>
                    </div>
                </div>
            </div>
            <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Previous</span>
            </button>
            <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Next</span>
            </button>

            <div className="arrow-down-area circle-design">
                <BsChevronDown className="BsChevronDown" />
            </div>
        </div>
        </div>
    )
}

export default Slider
