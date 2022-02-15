 //Any absolute value written in the stylesheet is a placeholder, meant to be replaced in the near future


 import IOSPicker from './picker';
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
  
   camera: {
       height: screen.height,
    width: screen.width,
    backgroundColor: 'rgba(150, 150, 150, 0)',
   },

  scrollviewGeneral:{
    flex:1,
    flexDirection: 'row',
    backgroundColor: 'rgba(150, 150, 150, 0)',
    bottom: 500
  },
 });
 
