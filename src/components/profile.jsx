import React from 'react'
import About from './About'

const profile = () => {
  return (
    <div>
      <section id="resume" class="tm-padding-top-bottom-100">
        <div class="container">
          <div class="row">
            <div class="col-md-6 col-sm-6">
              <h2 class="title">
                My
                <strong> Profile</strong>
              </h2>
              <p>
                <span class="tm-info-label">Name</span>
                Phyo Thant
              </p>
              <p>
                <span class="tm-info-label">Age</span>
                21
              </p>
              <p>
                <span class="tm-info-label">Email</span>
                phyothantzin.w@gmail.com
              </p>
              <p>
                <span class="tm-info-label">Certificates</span>
                <ul>
                  <li>
                    <span>Page Myanmar Web Design Certificate</span>
                  </li>
                  <li>
                    <span>Page Myanmar PHP Certificate</span>
                  </li>
                  <li>
                    <span>FreeCodeCamp FrontEnd Libraries Certificate</span>
                  </li>
                  <li>
                    <span>FreeCodeCamp Web Design Certificate</span>
                  </li>
                </ul>
              </p>
              <p>
                <span class="tm-info-label">Languages</span>
                <ul>
                  <li>
                    <span>HTML CSS Javascript</span>
                  </li>
                  <li>
                    <span>Figma Web Design</span>
                  </li>
                  <li>
                    <span>PHP, Laravel, C</span>
                  </li>
                  <li>
                    <span>Wordpress CMS, Odoo, Sanity</span>
                  </li>
                  <li>
                    <span>GitHub</span>
                  </li>
                  <li>
                    <span>MongoDB, Mysql, Firebase, Sqlite, APIs</span>
                  </li>
                  <li>
                    <span>AWS Cloud Service And Other Hosting Services</span>
                  </li>
                </ul>
              </p>
              <p>
                <span className="tm-info-label">Frameworks</span>
                <ul>
                  <li>
                    <span className="tm-info-label">FrontEnd</span>
                    <span>Astro, React, Vue</span>
                  </li>
                  <li>
                    <span className="tm-info-label">CSS</span>
                    <span>
                      Bootstrap5, React Bootstrap, Tailwinds, MaterialUI
                    </span>
                  </li>
                  <li>
                    <span className="tm-info-label">Javascript</span>
                    <span>
                      MERN Stack ( MongoDB, Express, React, Nodejs ), NextJs
                    </span>
                  </li>
                  <li>
                    <span className="tm-info-label">ORM</span>
                    <span>Mongoose, Prisma, Sequelize</span>
                  </li>
                </ul>
              </p>
            </div>
            <div class="col-md-6 col-sm-6">
              <h2 class="title">
                <strong>Skills</strong>
              </h2>
              <p>
                As a full-stack developer, I have expertise in both front-end
                and back-end web development. I excel in creating attractive
                user interfaces using HTML, CSS, and JavaScript, while also
                possessing strong server-side programming skills for efficient
                data management and functionality.
              </p>
              <h4 class="tm-progress-label">
                FrontEnd Development
                <small class="progress-percent-small">100%</small>
              </h4>
              <div class="progress tm-progress">
                <div
                  class="progress-bar progress-bar-danger"
                  role="progressbar"
                  aria-valuenow="100"
                  aria-valuemin="0"
                  aria-valuemax="100"
                  style={{ width: '100%' }}
                ></div>
              </div>
              <h4 class="tm-progress-label">
                BackEnd Development
                <small class="progress-percent-small">100%</small>
              </h4>
              <div class="progress tm-progress">
                <div
                  class="progress-bar progress-bar-danger"
                  role="progressbar"
                  aria-valuenow="100"
                  aria-valuemin="0"
                  aria-valuemax="100"
                  style={{ width: '100%' }}
                ></div>
              </div>
              <h4 class="tm-progress-label">
                FullStack Development
                <small class="progress-percent-small">100%</small>
              </h4>
              <div class="progress tm-progress">
                <div
                  class="progress-bar progress-bar-danger"
                  role="progressbar"
                  aria-valuenow="100"
                  aria-valuemin="0"
                  aria-valuemax="100"
                  style={{ width: '100%' }}
                ></div>
              </div>
              <h4 class="tm-progress-label">
                Web Design
                <small class="progress-percent-small">100%</small>
              </h4>
              <div class="progress tm-progress">
                <div
                  class="progress-bar progress-bar-danger"
                  role="progressbar"
                  aria-valuenow="100"
                  aria-valuemin="0"
                  aria-valuemax="100"
                  style={{ width: '100%' }}
                ></div>
              </div>
              <h4 class="tm-progress-label">
                Wordpress CMS, Ecommerce, SEO
                <small class="progress-percent-small">100%</small>
              </h4>
              <div class="progress tm-progress">
                <div
                  class="progress-bar progress-bar-danger"
                  role="progressbar"
                  aria-valuenow="100"
                  aria-valuemin="0"
                  aria-valuemax="100"
                  style={{ width: '100%' }}
                ></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <About />
    </div>
  )
}

export default profile
