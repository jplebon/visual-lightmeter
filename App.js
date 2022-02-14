/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 * @lint-ignore-every XPLATJSCOPYRIGHT1
 */

 import IOSPicker from './picker';
 import Menu from './menu';
 import React, {Component, useState, useEffect} from 'react';
 import {Platform, StyleSheet,Dimensions, Text,Button, View, Alert,Image} from 'react-native';
 import NativeCamera from './NativeCameraModule/NativeCameraModule'
 /* import NativeCameraModule from './NativeCameraModuleNativeModule' */
 



 const screen = Dimensions.get("screen");
 const instructions = Platform.select({
   ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
   android:
     'Double tap R on your keyboard to reload,\n' +
     'Shake or press menu button for dev menu',
 });
 
 type Props = {};
 export default class App extends Component<Props> {
 
   constructor(props){
     super(props)
     this.image = null
   

   }
 
 
  //  _onPress = () => {
  //    if(this.camera) {
  //      this.camera._onTakePhoto()
  //    }
  //  }
 
  //  _newImageTaken = (e) => {
  //    this.image = e.nativeEvent.image
  //    Alert.alert(
  //      "hi",
  //      'My Alert Msg',
  //      [
  //        {text: 'Ask me later', onPress: () => console.log('Ask me later pressed')},
  //        {
  //          text: 'Cancel',
  //          onPress: () => console.log('Cancel Pressed'),
  //          style: 'cancel',
  //        },
  //        {text: 'OK', onPress: () => console.log('OK Pressed')},
  //      ],
  //      {cancelable: false},
  //    );
  //    this.forceUpdate()
  //  }
 
 
   render() {


        
     return (
       <View style={styles.container}>

        
         {/* <Text style={styles.welcome}>Welcome to React Native!</Text>
         {
           this.image ? <Image style={{width: 50, height: 50}} source={{uri: this.image}}/> : null
         }
         <Text style={styles.instructions}>hi</Text>
         <Button onPress={() => {this._onPress()}} title="take a photo"></Button>
          */}
         
        
       

        
          <NativeCamera  
           onImageReturn={this._newImageTaken}
           ref={e=>{this.camera = e}}
           style={styles.wrapper} >
              

         </NativeCamera> 
{/* 
        <View style={styles.container2}>
           <Menu />
         </View>   */}
         
         <View style={styles.scrollviewGeneral}>
           <IOSPicker />
         </View>


        
       </View>
     );
   }
 }
 
 const styles = StyleSheet.create({
   container: {
    //  flex: 1,
    //  justifyContent: 'center',
    //  alignItems: 'stretch',
    //  backgroundColor: 'rgba(150, 150, 150, 0)',
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
   wrapper: {
     /* flex: 1,
     width: '100%',
     height: '100%', */
    //  flex:1,
    //  alignItems: 'stretch',
    //  flexDirection: 'column',
    //  justifyContent: 'center',
    //  borderWidth: 1,
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
    left: screen.width/1.5


  },
 });
 