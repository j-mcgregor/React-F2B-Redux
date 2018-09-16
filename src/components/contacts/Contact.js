import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { deleteContact } from '../../actions/contactActions';
import classnames from 'classnames';

class Contact extends Component {
  state = {
    showContactInfo: false
  };

  onDeleteClick = id => {
    //// DELETE CONTACT ////
    this.props.deleteContact(id)
  };

  render() {
    const { id, name, email, phone } = this.props.contact;
    const { showContactInfo } = this.state;

    return (
        <div 
          className={
            classnames('tab-pane fade', {
              'show active': (id === 1)
            })
          }
          id={`#list-user-${id}`}
          role="tabpanel" 
          aria-labelledby={`list-user-${id}-list`}
        >
          <h6>
            <i
            className="fas fa-times"
            style={{ cursor: 'pointer', float: 'right', color: 'red' }}
            onClick={this.onDeleteClick.bind(this, id)}
          />
          <Link to={`contact/edit/${id}`}>
            <i
              className="fas fa-pencil-alt"
              style={{
                cursor: 'pointer',
                float: 'right',
                color: 'black',
                marginRight: '1rem'
              }}
            />
          </Link>
        </h6>
          {email} <br/>
          {phone}
      </div>
    );
  }
}

Contact.propTypes = {
  contact: PropTypes.object.isRequired,
  deleteContact: PropTypes.func.isRequired
};

export default connect(null, { deleteContact })(Contact);
