import React, { Component } from 'react';
import { View, Text, StyleSheet, Image} from 'react-native';
import LoginForm from './loginForm';

const FBSDK = require('react-native-fbsdk');
const {
  LoginButton,
  AccessToken,
  LoginManager,
  GraphRequest,
  GraphRequestManager
} = FBSDK;



export default class Login extends Component{

  goToHomePage(accessToken) {
 this.props.navigator.replace({id: 'Homepage'});
}

componentWillMount () {
    console.log(AccessToken)
    AccessToken.getCurrentAccessToken().then(
      (data) => {
        if(data)
        this.goToHomePage();
      }
    )
  }


    render(){
      return(
        <View style={styles.wrapper}>
        <View style={styles.logoContainer}>
        <Image
          style={styles.logo}
          source={require('../../images/charity.png')}
        />
            <Text style={styles.title}>Facebook Login Exercise</Text>
        </View>


          <View style={styles.formContainer}>
            <LoginButton
              // publishPermissions={["publish_actions"]}
              readPermissions={["email","public_profile"]}
              onLoginFinished={
                (error, result) => {
                  if (error) {
                    alert("login has error: " + result.error);
                  } else if (result.isCancelled) {
                    alert("login is cancelled.");
                  } else {
                    AccessToken.getCurrentAccessToken().then(
                  (data) => {
                    this.goToHomePage();
                  })
                    // AccessToken.getCurrentAccessToken().then(
                    //   (data) => {
                    //     alert(data.accessToken.toString())
                    //   }
                    // )
                  }
                }
              }
              onLogoutFinished={() => alert("logout.")}/>
          </View>



          <View>
            <Text style={styles.footer}>Mithat C.</Text>
          </View>

        </View>

      )

    }

}


const styles= StyleSheet.create({
  formContainer:{
    alignItems:'center',
    flexGrow:1
  },
  logoContainer:{
    alignItems:'center',
    flexGrow:1,
    justifyContent:'center',

  },
  logo:{
    width:100,
    height:100
  },
  wrapper:{
    backgroundColor: '#2980b9',
    flex:1,

  },

  titleWrapper:{
    flex:1,
    justifyContent:'center',
    alignItems:'center',
  },
title:{
    color:'white',
    fontSize:35,
    marginTop:10,
    fontWeight: 'bold',
    textAlign:'center',
},
info:{
  color:'white',
  fontSize:20,
  fontWeight:'300',
  marginTop:10,
  opacity:0.9,
},
footer:{
  color:'black',
  fontWeight:'100',
  textAlign:'center',
},

});
