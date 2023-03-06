import React from 'react'
import '../scss/Restaurant.scss'

export default function Restaurant() {
    return (
        <div>
            <div id="restaurant-hero">
                <div className="container align-items-center">
                    <div className="row py-5">
                        <div className="col-md-6">
                            <h1>RESTAURANTS & BAR</h1>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta quis neque provident, veritatis cum enim cumque quisquam molestiae perferendis modi iure accusamus sit ut iusto itaque temporibus quaerat voluptas maiores odio. Debitis amet cum odit illum, ad temporibus sit corrupti officia consequatur illo, deserunt sunt ipsum veritatis nesciunt vero? Perferendis?</p>
                            <div className="d-block">
                                <button type="button" className="btn btn-primary" data-toggle="modal" data-target="#exampleModal">
                                    Launch demo modal
                                </button>
                                {/* <!-- Modal --> */}
                                <div className="modal fade" id="exampleModal" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                                    <div className="modal-dialog" role="document">
                                        <div className="modal-content">
                                            <div className="modal-header">
                                                <h5 className="modal-title" id="exampleModalLabel">Modal title</h5>
                                                <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                                    <span aria-hidden="true">&times;</span>
                                                </button>
                                            </div>
                                            <div className="modal-body">
                                                <p>Modal Body here</p>
                                            </div>
                                            <div className="modal-footer">
                                                <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                                                <button type="button" className="btn btn-primary">Save changes</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="pt-5 mx-auto">
                                <button className="btn-outline-taupe">READ MORE</button>
                            </div>
                        </div>

                        <div className="col-md-6" id="restaurant-bg">

                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
