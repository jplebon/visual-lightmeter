import {Picker} from '@react-native-picker/picker';
import React from 'react';
import { StyleSheet, Text, View, Button, ImageBackground, TouchableOpacity, useWindowDimensions, Dimensions} from 'react-native';


const screen = Dimensions.get("screen");
export default function IOSPicker (){
    return (
        

<View style={styles.scrollviewGeneral}>

    <View>
        <View style={styles.icons}>
        <TouchableOpacity >
                  <ImageBackground source={require("./ISO.png")} style={styles.ISOUp}>
                  </ImageBackground>
        </TouchableOpacity>

        <TouchableOpacity> 
          <ImageBackground source={require("./apertureBlurry.png")} style={styles.apertureUp} >
          </ImageBackground>  


        </TouchableOpacity>
       
        
        

        <TouchableOpacity >
            <ImageBackground source={require("./shutterBlurry.png")} style={styles.shutterSpeedUp}>
            </ImageBackground>
        </TouchableOpacity>

        </View>

        <View style={styles.icons}>

          <TouchableOpacity >
              <ImageBackground source={require("./apertureFocus.png")} style={styles.apertureDown}>
              </ImageBackground> 
          </TouchableOpacity>

         

          <TouchableOpacity >
              <ImageBackground source={require("./shutterFocus.png")} style={styles.shutterSpeedDown}>
              </ImageBackground>
          </TouchableOpacity>

        
        
        
        </View>
    </View> 

  <View style={styles.scrollviewISO} >
    <Picker>

      <Picker.Item label='3200' value={3200} color='white' />
      <Picker.Item label='1600' value={1600} color='white' />
      <Picker.Item label='800' value={800} color='white' />
      <Picker.Item label='400' value={400} color='white' />
      <Picker.Item label='200' value={200} color='white' />
      <Picker.Item label='160' value={160} color='white' />
      <Picker.Item label='100' value={100} color='white' />
      <Picker.Item label='50' value={50} color='white' />
    </Picker>  
  </View>


  <View style={styles.scrollviewAperture} >
    <Picker>

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
  </View>

  

  <View style={styles.scrollviewShutter} >
    <Picker>

      <Picker.Item label='500s' value={500} color='white' />
      <Picker.Item label='250s' value={250} color='white' />
      <Picker.Item label='125s' value={125} color='white' />
      <Picker.Item label='60s' value={60} color='white' />
      <Picker.Item label='30s' value={30} color='white' />
      <Picker.Item label='15s' value={15} color='white' />
      <Picker.Item label='8s' value={8} color='white' />
      <Picker.Item label='4s' value={4} color='white' />
      <Picker.Item label='2s' value={2} color='white' />
      <Picker.Item label='1s' value={1} color='white' />
      <Picker.Item label='1/2' value={1/2} color='white' />
      <Picker.Item label='1/4' value={1/4} color='white' />
      <Picker.Item label='1/8' value={1/8} color='white' />
      <Picker.Item label='1/15' value={1/15} color='white' />
      <Picker.Item label='1/30' value={1/30} color='white' />
      <Picker.Item label='1/60' value={1/60} color='white' />
      <Picker.Item label='1/125' value={1/125} color='white' />
      <Picker.Item label='1/250' value={1/250} color='white' />
      <Picker.Item label='1/500' value={1/500} color='white' />
      <Picker.Item label='1/1000' value={1/1000} color='white' />
      <Picker.Item label='1/2000' value={1/2000} color='white' />
    </Picker>  
</View>

</View>
    )
}



const styles = StyleSheet.create({
    scrollviewGeneral:{
        flex:1,
        flexDirection: 'row'
      },
    
      scrollviewAperture:{
        top: screen.height/1.52,
        right: 109,
        width:130,
      },
    
      scrollviewISO:{
        top: screen.height/1.52,
        right: 110,
        width:132,
      },
    
      scrollviewShutter:{
        top: screen.height/1.52,
        right: 108,
        width:130,
      },
    
    
      container: {
        flex: 1,
        flexDirection: 'row',
        backgroundColor: 'rgba(52, 52, 52, 0)',
        position: "absolute",
        top: screen.height/1.2
        
      },
    
      text:{
        fontSize: 20,
        color: 'rgba(52, 52, 52, 0)',
        textShadowColor: '#fff',
        textShadowRadius: 5,
        top: screen.height/5
      },
      
      icons: {
        flexDirection: 'row'
      },
     
      ISOUp: {
        width: 40,
        height: 40,
        top: screen.height/1.59,
        left: screen.width/6.8 //40 to account for horizontal padding
    
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
        left: screen.width/1.74
    
      },
    
      shutterSpeedDown: {
        alignSelf: "center",
        width: 40,
        height: 40,
        top: screen.height/1.15,
        left: screen.width/1.5
    
    
      },

      
    


});
