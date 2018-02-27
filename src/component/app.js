import { connect } from 'react-redux';
import React, { Component, Fragment } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import MetaTags from 'react-meta-tags';

import Landing from './landing';

class App extends Component {
  render() {
    return (
      <Fragment>
        <div className="app">
          <MetaTags>
            <meta name="viewport" content="width=device-width, initial-scale=1" />
          </MetaTags>
          <Landing />
        </div>
      </Fragment>
    );
  }
}

const mapStateToProps = state => ({
  token: state.token,
});

// const mapDispatchToProps = dispatch => ({
// }); 

export default connect(mapStateToProps)(App);
