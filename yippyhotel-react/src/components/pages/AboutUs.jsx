import React, {useState} from 'react'
import '../scss/About.scss'

function hadnleClick(){

}
function AboutUs() {
    const [count, setCount] = useState(0)


    return (
        <div id="about-hero">
            <div className="container align-items-center">
                <div className="row py-5">
                <div className="col-md-4">
                        <h1>WHO WE <br />ARE?</h1>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta quis neque provident, veritatis cum enim cumque quisquam molestiae perferendis modi iure accusamus sit ut iusto itaque temporibus quaerat voluptas maiores odio. Debitis amet cum odit illum, ad temporibus sit corrupti officia consequatur illo, deserunt sunt ipsum veritatis nesciunt vero? Perferendis?</p>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta quis neque provident, veritatis cum enim cumque quisquam molestiae perferendis modi iure accusamus sit ut iusto itaque temporibus quaerat voluptas maiores odio. Debitis amet cum odit illum, ad temporibus sit corrupti officia consequatur illo, deserunt sunt ipsum veritatis nesciunt vero? Perferendis?</p>
                    </div>

                    <div className="col-md-2 d-flex">
                        <div className="line-height d-none d-md-block vr d-none"></div>
                    </div>
                <div className="col-md-6">
                        <h1 className="card-title">YIPPY HOTEL<br/>Lorem ipsrem</h1>
                        <div className="pt-5">
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta quis neque provident, veritatis cum enim cumque quisquam molestiae perferendis modi iure accusamus sit ut iusto itaque temporibus quaerat voluptas maiores odio. Debitis amet cum odit illum, ad temporibus sit corrupti officia consequatur illo, deserunt sunt ipsum veritatis nesciunt vero? Perferendis?</p>

                        </div>
                        <div className="pt-5 mx-auto text-center">
                        <button className="btn-outline-taupe">HOTEL DETAILS</button>
                        </div>
                        
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AboutUs
