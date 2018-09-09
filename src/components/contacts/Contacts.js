import React, { Component } from 'react';
import Contact from './Contact';
import { connect } from 'react-redux';
// When we call anything from the Redux state it's put into props so we want prop-types
import PropTypes from 'prop-types';
import { getContacts } from '../../actions/contactActions';


class Contacts extends Component {

  componentDidMount(){
    this.props.getContacts();
  }

  render() {
    const { contacts } = this.props;
    return (
      <React.Fragment>
        <h1 className="display-4 mb-2">
          <span className="text-danger">Contact</span> List
        </h1>
        {contacts.map(contact => (
          <Contact key={contact.id} contact={contact} />
        ))}
      </React.Fragment>
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
