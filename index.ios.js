/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry
} from 'react-native';
import Root from './root';
export default class MyRNApp extends Component {
  render() {
      return (
          <Root/>
      );
  }
}
AppRegistry.registerComponent('MyRNApp', () => MyRNApp);
