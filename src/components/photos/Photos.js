import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getPhotos } from '../../actions/photoActions';
import Gallery from 'react-photo-gallery';


class Photos extends Component {

  componentDidMount(){
    this.props.getPhotos();
  }

  getGallery = node => { 
    this.pg = node; 
    // console.log(this.pg.props.photos); 
  };

  render() {
    const { photos } = this.props;

    const PHOTO_SET = photos.map( (photo, i) => {
      return {
        src: photo.urls.small,
        width: 4,
        height: 3
      }
    });

    // console.log(photos);
    // console.log(PHOTO_SET);
    
    return (
      <div className="container-fluid">
        <div className="container">
            <h1 className="display-3">A little gallery courtesy of <a href="">unsplash.com</a></h1>
          </div>
        <div className="gallery-row">
          { console.log(PHOTO_SET) }
          {this.props.photos.length !== 0 && <Gallery
            photos={PHOTO_SET}
            direction={"column"}
            ref={this.getGallery}
          />}
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  photos: state.photo.photos
})

export default connect(mapStateToProps, { getPhotos })(Photos);