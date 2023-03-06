import React from 'react'
import '../scss/Signin.scss'
import { Link } from 'react-router-dom'

function Signin() {
  return (
    <div id="hotel-bg">
      <div className="container">
    <div className="row">
      <div className="col-md-6 offset-md-3">
        <h2 className="text-center text-white mt-5">SIGN IN</h2>
        <div className="card my-4">
          <form className="card-body cardbody-color p-lg-5">

            {/* <div className="text-center">
              <img src="https://cdn.pixabay.com/photo/2016/03/31/19/56/avatar-1295397__340.png" className="img-fluid profile-image-pic img-thumbnail rounded-circle my-3"
                width="200px" alt="profile"/>
            </div> */}

            <div className="mb-3">
            <label htmlFor="email">Email</label>
              <input type="email" className="form-control" id="email" aria-describedby="emailHelp"
                placeholder="emailid@email.com"/>
            </div>
            <div className="mb-3">
              <label htmlFor="password">Password</label>
              <input type="password" className="form-control" id="password" placeholder="******"/>
            </div>
            <div id="passwordHelp" className=" mb-5 text-dark">
              <Link to="/" className="text-muted fw-bold">Forgot Password?</Link>
            </div>
            <div className="text-center"><button type="submit" className="btn btn-color px-5 mb-5 w-100">SIGN IN</button></div>
            <div id="emailHelp" className="form-text text-center mb-5 text-dark">
              OR BECOME A MEMBER? <a href="#" className="text-dark fw-bold">SIGN UP</a>
            </div>
          </form>
        </div>

      </div>
    </div>
  </div>
    </div>
  )
}

export default Signin
