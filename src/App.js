import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

// ======= COMPONENTS =========
// Pages
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import Landing from './components/layout/Landing';
import About from './components/pages/About';
import NotFound from './components/pages/NotFound';
// Contacts
import Contacts from './components/contacts/Contacts';
import AddContact from './components/contacts/AddContact';
import EditContact from './components/contacts/EditContact';
// Photos
import Photos from './components/photos/Photos';

// Redux
import { Provider } from 'react-redux';
import store from './store';

import 'jquery/dist/jquery.min';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/main.css';

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router>
          <div className="App">
            <Header branding="React F2B w/ Redux" />
              <Switch>
                {/* Pages */}
                <Route exact path="/" component={Landing} />
                <Route exact path="/about" component={About} />
                {/* Contacts */}
                <Route exact path="/contacts" component={Contacts} />
                <Route exact path="/contacts/add" component={AddContact} />
                <Route exact path="/contact/edit/:id" component={EditContact} />
                {/* Photos */}
                <Route exact path="/photos" component={Photos} />
                {/* Default */}
                <Route component={NotFound} />
              </Switch>
            <Footer />
          </div>
        </Router>
      </Provider>
    );
  }
}

export default App;
