import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { deleteContact } from '../../actions/contactActions';

class Contact2 extends Component {
  state = {
    show2Info: false
  };

  onDeleteClick = id => {
    //// DELETE CONTACT ////
    this.props.deleteContact(id)
  };

  render() {
    const { 
      // id, 
      name, 
      username, 
      email, 
      // phone,
      address,
      website,
      company
    } = this.props.contact;
    // const { showContactInfo } = this.state;

    return (
      <div className="container-fluid user-profile">
        <div className="row text-center">
          <div className="col-12">
            <img className="profile-pic mb-4" src="./img/placeholder.gif" alt=""/>
          </div>
        </div>
        <div className="row text-center">
          <div className="col-6 text-right">
            <span className="title align-middle">{ name }</span>
          </div>
          <div className="col-6 text-left">
            <p className="subtitle">@{ username }</p>
            <p className="subtitle">{ email }</p>
          </div>
        </div>
        <div className="row text-center">
          <div className="col-6 text-right">
            <address className="profile-address">
              { address.suite } <br/>
              { address.street } <br/>
              { address.city } <br/>
              { address.zipcode } <br/>
            </address>
          </div>
          <div className="col-6 text-left">
            <address className="profile-company">
              { website } <br/>
              { company.name } <br/>
              { company.bs } <br/>
              { company.catchPhrase } <br/>
            </address>
          </div>
        </div>
      </div>
    );
  }
}

Contact2.propTypes = {
  contact: PropTypes.object.isRequired,
  deleteContact: PropTypes.func.isRequired
};

export default connect(null, { deleteContact })(Contact2);
