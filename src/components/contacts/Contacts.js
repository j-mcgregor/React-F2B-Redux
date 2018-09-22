import React, { Component } from 'react';
import Contact2 from './Contact2';
import { connect } from 'react-redux';
import classnames from 'classnames';
// When we call anything from the Redux state it's put into props so we want prop-types
import PropTypes from 'prop-types';
import { getContacts } from '../../actions/contactActions';


class Contacts extends Component {
  constructor(){
    super();
    this.state = {
      currentContact: 1
    }
  }

  componentDidMount(){
    this.props.getContacts();
  }

  onClick(e){
    this.setState({ 
      currentContact: parseInt(e.target.id, 10 )
    })
  }

  render() {
    const { contacts } = this.props;
    return (
      <div className="container-fluid px-0 contacts-index">
        <div className="row">
          <div className="col-3">
            <div className="list-group" id="list-tab" role="tablist">
              {contacts.map(contact => (
                <a 
                  className={
                    classnames('py-3 list-group-item list-group-item-action', {
                      'active': (contact.id === 1)
                    })
                  }
                  id={`${contact.id}`}
                  data-toggle="list" 
                  href={`#list-user-${contact.id}`}
                  role="tab" 
                  aria-controls={`user-${contact.id}`}
                  key={contact.id} 
                  contact={contact} 
                  data-id={contact.id}
                  onClick={this.onClick.bind(this)}
                >
                  { contact.name }
                </a>
              ))}
            </div>
          </div>
          <div className="col-9">
            <h1 className="display-4 mb-2 text-center">
              <span className="text-danger">Contacts</span>
            </h1>
            <div className="tab-content" id="nav-tabContent">
              {contacts.map(contact => {
                if (contact.id === this.state.currentContact) {
                  return (
                    <Contact2 key={contact.id} contact={contact} />
                  )
                } else {
                  return null;
                }
              })}
            </div>
          </div>
        </div>
   
      </div>
    );
  }
}

Contacts.propTypes = {
  contacts: PropTypes.array.isRequired,
  getContacts: PropTypes.func.isRequired
}

// First argument is anything we want to map from the redux state to the component
const mapStateToProps = (state) => ({
  // coming from rootReducer (reducers/index.js)
  contacts: state.contact.contacts
})
// Second is any actions we want to dispatch
// const mapDispatchToProps = (dispatch) => ({
//   getContacts: () => dispatch({ type: GET_CONTACTS })
// })

export default connect(mapStateToProps,{ getContacts })(Contacts);
