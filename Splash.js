import React, { Component } from 'react';
import { View, Text, StyleSheet} from 'react-native';


export default class Splash extends Component{
    render(){
      return(
        <View style={styles.wrapper}>
          <View style={styles.titleWrapper}>
            <Text style={styles.title}> Challenge</Text>
            <Text style={styles.info}>Challenge The World To Donate</Text>
          </View>
          <View>
            <Text style={styles.footer}>by Share360 Team</Text>
          </View>
        </View>

      )

    }

}


const styles= StyleSheet.create({
  wrapper:{
    backgroundColor: '#2980b9',
    flex:1,
    justifyContent:'center',
    alignItems:'center'
  },

  titleWrapper:{
    flex:1,
    justifyContent:'center',
    alignItems:'center',
  },
title:{
    color:'white',
    fontSize:35,
    fontWeight: 'bold',

},
info:{
  color:'white',
  fontSize:20,
  fontWeight:'300',
},
footer:{
  color:'white',
  fontWeight:'100',
}
});
