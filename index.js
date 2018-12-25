/** @format */
/*
import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';

AppRegistry.registerComponent(appName, () => App);

//

*/

//>Import a library to help create a component

import React from 'react';
//import { Text } from 'react-native';
import { AppRegistry } from 'react-native';
import Header from './src/components/header';

//>Create a component
const App = () => (
  //  <Text> Some Text </Text>
  <Header />
);


//>Render component on device
AppRegistry.registerComponent('albums', ()=> App);
