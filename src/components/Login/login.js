import React, { Component } from 'react';
import { View, Text, StyleSheet, Image} from 'react-native';
import LoginForm from './loginForm';


export default class Login extends Component{
    render(){
      return(
        <View style={styles.wrapper}>
        <View style={styles.logoContainer}>
        <Image
          style={styles.logo}
          source={require('../../images/charity.png')}
        />
            <Text style={styles.title}>DONAT</Text>
            <Text style={styles.info}>Challenge The World To Donate</Text>
        </View>


          <View style={styles.formContainer}>
            <LoginForm/>
          </View>
          <View>
            <Text style={styles.footer}>by Share360 Team</Text>
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
