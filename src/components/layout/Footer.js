import React from 'react'

export default () => {
  return (
    <div className="footer container-fluid">
      <div className="container">
        <div className="row text-center">
          <div className="col-6">
            <h4>Jack McGregor</h4>
          </div>
          <div className="col-6">
             <a href="http://linkedin.com/in/jack-mcgregor" target="_blank" className="social-icon mx-2"><i className="fab fa-linkedin fa-2x"></i></a>
             <a href="https://twitter.com/wyliesly" target="_blank" className="social-icon mx-2"><i className="fab fa-twitter fa-2x"></i></a>
             <a href="mailto:jackjwmcgregor@gmail.com" target="_blank" className="social-icon mx-2"><i className="fas fa-envelope fa-2x"></i></a>
             <a href="https://github.com/patchyj/" target="_blank" className="social-icon mx-2"><i className="fab fa-github fa-2x"></i></a>
          </div>
        </div>
      </div>
    </div>
  )
}
