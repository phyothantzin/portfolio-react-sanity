import React from 'react'

const Social = () => {
  return (
    <div className="social-container">
      <section id="social" className="tm-social">
        <div className="container">
          <div className="row">
            <div
              className="col-md-4 col-sm-4 wow rotateInUpLeft"
              data-wow-delay="0.3s"
            >
              <div className="media facebook">
                <a href="#">
                  <div className="media-object pull-left">
                    <i className="fa fa-facebook"></i>
                  </div>
                  <div className="media-body">
                    <h4 className="media-heading tm-social-title">
                      Follow me on
                    </h4>
                    <h3>Social Facebook</h3>
                  </div>
                </a>
              </div>
            </div>
            <div
              className="col-md-4 col-sm-4 wow rotateInUpLeft"
              data-wow-delay="0.6s"
            >
              <div className="media github">
                <a href="#">
                  <div className="media-object pull-left">
                    <i className="fa fa-github"></i>
                  </div>
                  <div className="media-body">
                    <h4 className="media-heading tm-social-title">
                      Follow me on
                    </h4>
                    <h3>Social Github</h3>
                  </div>
                </a>
              </div>
            </div>
            {/* <div
              className="col-md-4 col-sm-4 wow rotateInUpLeft"
              data-wow-delay="0.9s"
            >
              <div className="media pinterest">
                <a href="#">
                  <div className="media-object pull-left">
                    <i className="fa fa-pinterest"></i>
                  </div>
                  <div className="media-body">
                    <h4 className="media-heading tm-social-title">Pin me on</h4>
                    <h3>Social Pinterest</h3>
                  </div>
                </a>
              </div>
            </div> */}
          </div>
        </div>
      </section>
    </div>
  )
}

export default Social
