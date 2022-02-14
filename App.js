 import IOSPicker from './picker';
 import Menu from './menu';
 import React, {Component, useState, useEffect} from 'react';
 import {Platform, StyleSheet,Dimensions, Text,Button, View, Alert,Image} from 'react-native';
 import NativeCamera from './NativeCameraModule/NativeCameraModule'

 const screen = Dimensions.get("screen");

 type Props = {};
 export default class App extends Component<Props> {
 
   constructor(props){
     super(props)
     this.image = null
   }
 
   render() {
        
     return (
       <View style={styles.container}>
      
          <NativeCamera  
           onImageReturn={this._newImageTaken}
           ref={e=>{this.camera = e}}
           style={styles.camera} >
          </NativeCamera> 
         
         <View style={styles.scrollviewGeneral}>
           <IOSPicker />
         </View>
        
       </View>
     );
   }
 }
 
 const styles = StyleSheet.create({
   container: {
    height: screen.height
   },
   welcome: {
     fontSize: 20,
     textAlign: 'center',
     margin: 10,
   },
   instructions: {
     textAlign: 'center',
     color: '#333333',
     marginBottom: 5,
   },
   camera: {
       height: screen.height,
    width: screen.width,
    backgroundColor: 'rgba(150, 150, 150, 0)',
   },

  icons: {
    flexDirection: 'row'
  },

  camera:{
    height:screen.height
  },

  scrollviewGeneral:{
    flex:1,
    flexDirection: 'row',
    backgroundColor: 'rgba(150, 150, 150, 0)',
    bottom: 500
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


  container2: {
    flex: 1,
    flexDirection: 'row',
    backgroundColor: 'rgba(52, 52, 52, 0)',
    top: screen.height/1.2,
    width: 5000
    
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
    left: screen.width/5.2 

  },

  ISODown: {
    alignSelf: "center",
    width: 40,
    height: 40,
    top: screen.height/1.15,
    left: screen.width/2-20 - 40 

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
    left: screen.width/1.5


  },
 });
 
