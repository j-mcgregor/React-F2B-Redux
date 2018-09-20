import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getPhotos } from '../../actions/photoActions';
import Modal from '../layout/Modal';



class Photos extends Component {

  componentDidMount(){
    this.props.getPhotos();
  }

  closeModal(el){
    console.log(el);
  }

  render() {
    const { photos } = this.props;

    let counter = 0;
    let column0 = [];
    let column1 = [];
    let column2 = [];
    let column3 = [];
    
    photos.forEach(element => {
      switch (counter) {
        case 0:
          column0.push(element);
          counter++
          break;
        case 1:
          column1.push(element);
          counter++
          break;
        case 2:
          column2.push(element);
          counter++
          break;
        case 3:
          column3.push(element);
          counter = 0;
          break;
        default:
          break;
      }
    });
    
    return (
      <div className="container-fluid gallery">
        <div className="container text-center">
            <h4 className="display-5 py-5">A little gallery courtesy of <br/>unsplash.com's <a href="https://unsplash.com/developers" target="_blank">API</a></h4>
          </div>
        <div className="gallery-row">
          <div className="gallery-col">
            { console.log(column0) }
            {column0.map((photo,index) => {
              return (
                <div key={index} >
                  <img 
                    src={photo.urls.small} 
                    alt="alt-something" 
                    data-toggle="modal" 
                    data-target={"#modal-" + photo.id}
                  />
                  <Modal 
                    image={photo}
                    onclick={this.closeModal(this)}
                  />
                </div>
              )
            })}
          </div>
          <div className="gallery-col">
            {column1.map((photo,index) => {
              return (
                <div key={index} >
                  <img 
                    src={photo.urls.small} 
                    alt="alt-something" 
                    data-toggle="modal" 
                    data-target={"#modal-" + photo.id}
                  />
                  <Modal 
                    image={photo}
                  />
                </div>
              )
            })}
          </div>
          <div className="gallery-col">
            {column2.map((photo,index) => {
              return (
                <div key={index} >
                  <img 
                    src={photo.urls.small} 
                    alt="alt-something" 
                    data-toggle="modal" 
                    data-target={"#modal-" + photo.id}
                  />
                  <Modal 
                    image={photo}
                  />
                </div>
              )
            })}
          </div>
          <div className="gallery-col">
            {column3.map((photo,index) => {
              return (
                <div key={index} >
                  <img 
                    src={photo.urls.small} 
                    alt="alt-something" 
                    data-toggle="modal" 
                    data-target={"#modal-" + photo.id}
                  />
                  <Modal 
                    image={photo}
                  />
                </div>
              )
            })}
          </div>
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  photos: state.photo.photos
})

export default connect(mapStateToProps, { getPhotos })(Photos);