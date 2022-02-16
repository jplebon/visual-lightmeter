 import { Picker } from '@react-native-picker/picker';
 import React, {Component, useState, useEffect} from 'react';
 import {StyleSheet, Dimensions, View} from 'react-native';
 import NativeCamera from './NativeCameraModule/NativeCameraModule';
 import Icons from './icons';

 const screen = Dimensions.get("screen");

 type Props = {};
 export default class App extends Component<Props> {
 
   constructor(props){
     super(props)
     this.image = null
     this.state = {
      ISOValue: 400,
      shutterValue: 1/250,
      apertureValue: 5.6
    }

   }
  
   render() {
        
     return (
       <View style={styles.container}>

        
          <NativeCamera  
            ref={e=>{this.camera = e}}>  
          </NativeCamera> 
      
  
        
        <View style={styles.scrollviewGeneral}>

          <Icons style={styles.icons}/>

          <Picker
            style={styles.pickers}
            selectedValue={ this.state.ISOValue }
            onValueChange={(itemValue, itemIndex) => {
              this.setState({ ISOValue: itemValue});
              this.camera._onISOChange(itemValue)}
          }>
            
            <Picker.Item label='1600' value={1600} color='white' />
            <Picker.Item label='800' value={800} color='white' />
            <Picker.Item label='400' value={400} color='white' />
            <Picker.Item label='200' value={200} color='white' />
            <Picker.Item label='160' value={160} color='white' />
            <Picker.Item label='100' value={100} color='white' />
            <Picker.Item label='50' value={50} color='white' />
          </Picker>

          <Picker
            style={styles.pickers}
            selectedValue={ this.state.apertureValue}
            onValueChange={(itemValue, itemIndex) => {
              this.setState({ apertureValue: itemValue});
              /*this.camera._onISOChange(itemValue)*/}
          }>
   
            <Picker.Item label='1' value={1} color='white' />
            <Picker.Item label='1.4' value={1.4} color='white' />
            <Picker.Item label='2' value={2} color='white' />
            <Picker.Item label='2.8' value={2.8} color='white' />
            <Picker.Item label='4' value={4} color='white' />
            <Picker.Item label='5.6' value={5.6} color='white' />
            <Picker.Item label='8' value={8} color='white' />
            <Picker.Item label='11' value={11} color='white' />
            <Picker.Item label='16' value={16} color='white' />
            <Picker.Item label='22' value={22} color='white' />
            <Picker.Item label='32' value={32} color='white' />
            <Picker.Item label='45' value={45} color='white' />
            <Picker.Item label='64' value={64} color='white' />
            <Picker.Item label='90' value={90} color='white' />
            <Picker.Item label='128' value={128} color='white' />
          </Picker>   

          <Picker
            style={styles.pickers}
            selectedValue={ this.state.shutterValue }
            onValueChange={(itemValue, itemIndex) => {
              this.setState({ shutterValue: itemValue});
              this.camera._onShutterChange(itemValue)}
          }>
   
            {/* <Picker.Item label='500s' value={500} color='white' />
            <Picker.Item label='250s' value={250} color='white' />
            <Picker.Item label='125s' value={125} color='white' />
            <Picker.Item label='60s' value={60} color='white' />
            <Picker.Item label='30s' value={30} color='white' />
            <Picker.Item label='15s' value={15} color='white' />
            <Picker.Item label='8s' value={8} color='white' />
            <Picker.Item label='4s' value={4} color='white' />
            <Picker.Item label='2s' value={2} color='white' /> */}
            <Picker.Item label='1s' value={1} color='white' />
            <Picker.Item label='1/2' value={2} color='white' />
            <Picker.Item label='1/4' value={4} color='white' />
            <Picker.Item label='1/8' value={8} color='white' />
            <Picker.Item label='1/15' value={15} color='white' />
            <Picker.Item label='1/30' value={30} color='white' />
            <Picker.Item label='1/60' value={60} color='white' />
            <Picker.Item label='1/125' value={125} color='white' />
            <Picker.Item label='1/250' value={250} color='white' />
            <Picker.Item label='1/500' value={500} color='white' />
            <Picker.Item label='1/1000' value={1000} color='white' />
            <Picker.Item label='1/2000' value={2000} color='white' />
          </Picker>   
          
        </View>
        
        
       </View>
     );
   }
 }
 
 const styles = StyleSheet.create({
   container: {
    height: screen.height
   },

  scrollviewGeneral:{
    
    width: screen.width/3.18,
    flex: 1,
    flexDirection: 'row',
    bottom: 0,
    left: screen.width/40

  },

  pickers:{
    width: screen.width/3.18,
    top: 100
  },

  icons:{
    bottom: 0,
    flex: 1
  }

 });
 