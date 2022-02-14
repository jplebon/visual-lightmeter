

import React, { useState, useEffect, useRef} from 'react';
import { StyleSheet, Text, View, SafeAreaView, TouchableOpacity, Dimensions, ImageBackground, Image } from 'react-native';
import { Camera } from 'expo-camera';
import Menu from './menu';
import IOSPicker from './picker'
//import Icons from './icons'
 

const screen = Dimensions.get("screen");


export default function App() {
  
  return (
    
    <View >

      
     
    <View style={styles.container}>
          <Menu />
        </View>
    </View>
    
  );
}

const styles = StyleSheet.create({ 

 
  icons: {
    flexDirection: 'row'
  },

  camera:{
    height:screen.height
  },

  scrollviewGeneral:{
    flex:1,
    flexDirection: 'row'
  },

  scrollviewAperture:{
    top: screen.height/1.7,
    left: screen.width*0.11,
    width:100,
  },

  scrollviewISO:{
    top: screen.height/1.7,
    left: 38,
    width:113,
  },

  scrollviewShutter:{
    top: screen.height/1.7,
    left: 30,
    width:150,
  },


  container: {
    flex: 1,
    flexDirection: 'row',
    backgroundColor: 'rgba(52, 52, 52, 0)',
    position: "absolute",
    top: screen.height/1.2,
    width: 500,
    
  },

  text:{
    fontSize: 20,
    color: 'rgba(52, 52, 52, 0)',
    textShadowColor: '#fff',
    textShadowRadius: 5,
    top: screen.height/5
  },

 
  ISOUp: {
    width: 40,
    height: 40,
    top: screen.height/1.59,
    left: screen.width/5.2 //40 to account for horizontal padding

  },

  ISODown: {
    alignSelf: "center",
    width: 40,
    height: 40,
    top: screen.height/1.15,
    left: screen.width/2-20 - 40 //40 to account for horizontal padding

  },

  apertureUp: {
    alignSelf: "center",
    width: 40,
    height: 40,
    top: screen.height/1.59,
    left: screen.width/2.75
    
  },

  apertureDown: {
    alignSelf: "center",
    flex: 1,
    width: 40,
    height: 40,
    top: screen.height/1.15,
    left: screen.width/2-18

  },

  shutterSpeedUp: {
    alignSelf: "center",
    width: 40,
    height: 40,
    top: screen.height/1.59,
    left: screen.width/1.92

  },

  shutterSpeedDown: {
    alignSelf: "center",
    width: 40,
    height: 40,
    top: screen.height/1.15,
    left: screen.width/1.6


  },

}); 


