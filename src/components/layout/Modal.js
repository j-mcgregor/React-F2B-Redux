import React, { Component } from 'react'

class Modal extends Component {
  render() {
    const { image } = this.props;
    return (
      <div className="modal fade" tabIndex="-1" role="dialog" id={"modal-" + image.id}>
        <div className="modal-dialog" role="document">
          <div className="modal-content">
            <div className="modal-body">
              <img src={ image.urls.regular} alt=""></img>
            </div>
            <div class="modal-footer">
              <h3>{image.user.first_name + " " + image.user.last_name} 
              <a href={image.user.links.html} target="_blank">
                <i class="far fa-user-circle"></i>
              </a>
              </h3>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Modal;