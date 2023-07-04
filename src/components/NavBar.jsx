import React from 'react'
import { NavLink } from 'react-router-dom'

const NavBar = () => {
  return (
    <div
      class="navbar navbar-default bs-dos-nav navbar-fixed-top sticky-navigation"
      role="navigation"
    >
      <div class="container">
        <div class="navbar-header">
          <button
            class="navbar-toggle"
            data-toggle="collapse"
            data-target="#rock-navigation"
          >
            <span class="icon icon-bar"></span>
            <span class="icon icon-bar"></span>
            <span class="icon icon-bar"></span>
          </button>
          <a href="#" class="navbar-brand">
            My Portfolio
          </a>
        </div>
        <nav class="collapse navbar-collapse" id="rock-navigation">
          <ul class="nav navbar-nav navbar-right main-navigation text-uppercase">
            <li>
              <a href="#home" class="smoothScroll">
                Home
              </a>
            </li>
            <li>
              <a href="#work" class="smoothScroll">
                My Work
              </a>
            </li>
            <li>
              <a href="#portfolio" class="smoothScroll">
                Projects
              </a>
            </li>
            <li>
              <a href="#resume" class="smoothScroll">
                Profile
              </a>
            </li>
            <li>
              <a href="#about" class="smoothScroll">
                About
              </a>
            </li>
            <li>
              <a
                href="https://github.com/phyothantzin"
                target="_blank"
                class="smoothScroll"
              >
                <i className="fa fa-github"></i>&nbsp; Github
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  )
}

export default NavBar
