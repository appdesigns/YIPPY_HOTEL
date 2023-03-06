import React from 'react'
import '../scss/Footer.scss'
import { Link } from 'react-router-dom'
import {AiFillTwitterCircle} from 'react-icons/ai';
import {BsFacebook} from 'react-icons/bs';
import {AiFillInstagram} from 'react-icons/ai';

function Footer() {
    return (
        <div id="footer-hero">
                <body class="d-flex flex-column">
  {/* <!-- For demo purpose --> */}
  <div class="container-fluid flex-grow-1 flex-shrink-0">
    <div class="px-lg-5">
      <div class="row py-5">
        <div class="col-lg-12 mx-auto text-white text-center">
          <h1 class="display-4">footer</h1>
          <p class="lead mb-0">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam, error.</p>
          <p class="lead">...<a href="" class="text-white">
                        <u>YIPPY</u></a>
          </p>
        </div>
      </div>
    </div>
  </div>
  {/* <!-- End --> */}


  {/* <!-- Footer --> */}
  <footer class="bg-white">
    <div class="container py-5">
      <div class="row py-4">
        <div class="col-lg-4 col-md-6 mb-4 mb-lg-0"><img src='{image}' alt="" width="180" class="mb-3"/>
          <p class="font-italic text-muted">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt.</p>
          <ul class="list-inline mt-4">
            <li class="list-inline-item"><a href="#" target="_blank" title="twitter"><i class="fa fa-twitter"></i></a></li>
            <li class="list-inline-item"><a href="#" target="_blank" title="facebook"><i class="fa fa-facebook"></i></a></li>
            <li class="list-inline-item"><a href="#" target="_blank" title="instagram"><i class="fa fa-instagram"></i></a></li>
            <li class="list-inline-item"><a href="#" target="_blank" title="pinterest"><i class="fa fa-pinterest"></i></a></li>
            <li class="list-inline-item"><a href="#" target="_blank" title="vimeo"><i class="fa fa-vimeo"></i></a></li>
          </ul>
        </div>
        <div class="col-lg-2 col-md-6 mb-4 mb-lg-0">
          <h6 class="text-uppercase font-weight-bold mb-4">Home</h6>
          <ul class="list-unstyled mb-0">
            <li class="mb-2"><a href="#" class="text-muted">Loremson</a></li>
            <li class="mb-2"><a href="#" class="text-muted">Loremson</a></li>
            <li class="mb-2"><a href="#" class="text-muted">Loremson</a></li>
            <li class="mb-2"><a href="#" class="text-muted">Loremson</a></li>
          </ul>
        </div>
        <div class="col-lg-2 col-md-6 mb-4 mb-lg-0">
          <h6 class="text-uppercase font-weight-bold mb-4">Company</h6>
          <ul class="list-unstyled mb-0">
            <li class="mb-2"><a href="#" class="text-muted">Loremson</a></li>
            <li class="mb-2"><a href="#" class="text-muted">Loremson</a></li>
            <li class="mb-2"><a href="#" class="text-muted">Loremson</a></li>
            <li class="mb-2"><a href="#" class="text-muted">Loremson</a></li>
          </ul>
        </div>
        <div class="col-lg-4 col-md-6 mb-lg-0">
          <h6 class="text-uppercase font-weight-bold mb-4">Newsletter</h6>
          <p class="text-muted mb-4">Lorem ipsum dolor sit amet, consectetur adipisicing elit. At itaque temporibus.</p>
          <div class="p-1 rounded border">
            <div class="input-group">
              <input type="email" placeholder="Enter your email address" aria-describedby="button-addon1" class="form-control border-0 shadow-0"/>
              <div class="input-group-append">
                <button id="button-addon1" type="submit" class="btn btn-link"><i class="fa fa-paper-plane"></i></button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    {/* <!-- Copyrights --> */}
    <div class="bg-light py-4">
      <div class="container text-center">
        <p class="text-muted mb-0 py-2">© 2023 YIPPY, All rights reserved.</p>
      </div>
    </div>
  </footer>
  {/* <!-- End --> */}

</body>

        </div>
    )
}

export default Footer
