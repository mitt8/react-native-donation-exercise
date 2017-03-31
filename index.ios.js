/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
    Navigator,
  Text,
  View
} from 'react-native';
import Splash from './Splash';
import Login from './src/components/Login/login';
import Homepage from './src/components/Homepage/homepage';

export default class ChallengeApp extends Component {
  render() {
    return (
      // <Login />
      <Navigator
        initialRoute={{id:'Login', name:'Index'}}
        renderScene={this.renderScene.bind(this)}
        configureScene={(route)=>{
          if(route.sceneConfig){
            return route.sceneConfig;
          }
          return Navigator.SceneConfigs.FloatFromRight;
        }} />


    );
  }


renderScene(route, navigator) {
    var routeId = route.id;
    if (routeId === 'Login') {
      return (
        <Login
          navigator={navigator} />
      );
    }

    if (routeId === 'Homepage') {
     return (
       <Homepage
         navigator={navigator} />
     );
   }
 }
//
// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//     backgroundColor: '#F5FCFF',
//   },
//   welcome: {
//     fontSize: 20,
//     textAlign: 'center',
//     margin: 10,
//   },
//   instructions: {
//     textAlign: 'center',
//     color: '#333333',
//     marginBottom: 5,
//   },
// });
}
AppRegistry.registerComponent('ChallengeApp', () => ChallengeApp);
