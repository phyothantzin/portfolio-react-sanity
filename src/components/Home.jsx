import React from 'react'
import workspace from '../assets/workspace-1280538.jpg'
import './js/jquery'
import './js/jquery.nav'
import './js/smoothscroll'
import './js/custom'
// import './js/isotope.js'
import './js/bootstrap.min'
// import './js/imagesloaded.min'
import './css/bootstrap.min.css'
import './css/font-awesome.min.css'
import './css/templatemo-style.css'
import Project from './Project'
import Profile from './profile'
import Social from './Social'
import NavBar from './NavBar'

const home = () => {
  return (
    <>
      <NavBar />

      <section id="home" class="templatemo-home">
        <div class="container">
          <div class="row">
            <div class="col-md-2 col-sm-1"></div>
            <div class="col-md-8 col-sm-10">
              <h1 class="tm-home-title">
                <strong>Phyo Thant</strong>
              </h1>
              <h2 class="tm-home-subtitle">Junior Developer</h2>
              <p style={{ fontSize: '19px', fontWeight: 'bold' }}>
                I am a junior
                <strong> Back-End </strong>
                and
                <strong> Front-End Developer </strong>
                creating modern and responsive designs for
                <strong> Web </strong>
                and
                <strong> Mobile </strong>. Let us work together. Thank you.
              </p>
              <a
                href="#work"
                class="btn btn-default smoothScroll tm-view-more-btn"
              >
                Let's Begin
              </a>
            </div>
            <div class="col-md-2 col-sm-1"></div>
          </div>
        </div>
      </section>

      <section id="work" class="tm-padding-top-bottom-100">
        <div class="container">
          <div class="row">
            <div class="col-md-offset-1 col-md-11">
              <h2 class="title">
                My
                <strong>Work</strong>
              </h2>
            </div>
            <div class="col-md-4 col-sm-4">
              <div class="work-wrapper">
                <i class="fa fa-link"></i>
                <h3 class="text-uppercase tm-work-h3">Responsive Websites</h3>
                <hr />
                <p>
                  Creating responsive websites designing and developing websites
                  that adapt to different screen sizes and devices.
                </p>
              </div>
            </div>
            <div class="col-md-4 col-sm-4">
              <div class="work-wrapper">
                <i class="fa fa-flash"></i>
                <h3 class="text-uppercase tm-work-h3">Web Design</h3>
                <hr />
                <p>
                  Creating visually appealing and user-friendly websites
                  combines with creativity, design principles, and technical
                  skills.
                </p>
              </div>
            </div>
            <div class="col-md-4 col-sm-4">
              <div class="work-wrapper">
                <i class="fa fa-dashboard"></i>
                <h3 class="text-uppercase tm-work-h3">FullStack Developer</h3>
                <hr />
                <p>
                  Handling both front-end and back-end, designing the user
                  interface and implementing server-side using various languages
                  and technologies.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Project />
      <Profile />

      <section id="contact" class="tm-contact">
        <div class="container">
          <div class="row">
            <div class="col-md-12 col-sm-12">
              <p>Copyright &copy; 2023 My Portfolio</p>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default home
