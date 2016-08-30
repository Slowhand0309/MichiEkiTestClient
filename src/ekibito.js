
import React from 'react';
import { Router, Scene } from 'react-native-router-flux';

// import {
//   Text,
//   View,
//   StyleSheet
// } from 'react-native';
//
// import Button from 'react-native-button';

import Top from './top';
import Map from './map';


class ekibito extends React.Component {
  render() {
    return (
      <Router>
        <Scene key="root">
          <Scene key="top" component={Top} title="TopPage" initial={true} />
          <Scene key="map" component={Map} title="MapPage" />
        </Scene>
      </Router>
    );
  }
};

module.exports = ekibito;
