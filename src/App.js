import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
    Navigator,
  Text,
  View
} from 'react-native';
import Login from './components/Login/login';
import Homepage from './components/Homepage/homepage';



export default class App extends Component {
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
 }
