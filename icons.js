import React from 'react';
import { StyleSheet, View, ImageBackground, TouchableOpacity, useWindowDimensions, Dimensions} from 'react-native';
const screen = Dimensions.get("screen");
export default function Icons (){
    
    return(

<View style={styles.scrollviewGeneral}>

    <View>
        <View style={styles.icons}>
        <TouchableOpacity >
            <ImageBackground source={require("./ios/assets/ISO.png")} style={styles.ISOUp}>
            </ImageBackground>
        </TouchableOpacity>

        <TouchableOpacity> 
            <ImageBackground source={require("./ios/assets/apertureBlurry.png")} style={styles.apertureUp} >
            </ImageBackground>  
        </TouchableOpacity>
   
   
        

        <TouchableOpacity >
            <ImageBackground source={require("./ios/assets/shutterBlurry.png")} style={styles.shutterSpeedUp}>
            </ImageBackground>
        </TouchableOpacity>

        </View>

        <View style={styles.icons}>

          <TouchableOpacity >
              <ImageBackground source={require("./ios/assets/apertureFocus.png")} style={styles.apertureDown}>
              </ImageBackground> 
          </TouchableOpacity>

         

          <TouchableOpacity >
              <ImageBackground source={require("./ios/assets/shutterFocus.png")} style={styles.shutterSpeedDown}>
              </ImageBackground>
          </TouchableOpacity>

        
        
        
        </View>
    </View> 

</View>

    )
    
}



const styles = StyleSheet.create({
    scrollviewGeneral:{
        flex:1,
        flexDirection: 'row',
        bottom: 500
      },
    
      scrollviewAperture:{
        top: screen.height/1.46,
        right: 109,
        width:130,
      },
    
      scrollviewISO:{
        top: screen.height/1.46,
        right: 110,
        width:132,
      },
    
      scrollviewShutter:{
        top: screen.height/1.46,
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
        left: screen.width/8.5
    
      },
    
      apertureUp: {
        alignSelf: "center",
        width: 40,
        height: 40,
        top: screen.height/1.59,
        left: screen.width/2.1
        
      },
    
      apertureDown: {
        alignSelf: "center",
        flex: 1,
        width: 40,
        height: 40,
        top: screen.height/1.12,
        left: screen.width/2.1
    
      },
    
      shutterSpeedUp: {
        alignSelf: "center",
        width: 40,
        height: 40,
        top: screen.height/1.59,
        left: screen.width/1.27
    
      },
    
      shutterSpeedDown: {
        alignSelf: "center",
        width: 40,
        height: 40,
        top: screen.height/1.12,
        left: screen.width/1.27
    
      },

      
    


});

