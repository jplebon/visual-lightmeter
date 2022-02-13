      

import React from 'react';
import { StyleSheet, View, ImageBackground, TouchableOpacity, Dimensions} from 'react-native';


const screen = Dimensions.get("screen");
export default function Icons (){
    return (
       <View>
        <View style={styles.icons}>
        <TouchableOpacity >
                  <ImageBackground source={require("./ISO.png")} style={styles.ISOUp}>
                  </ImageBackground>
        </TouchableOpacity>

        <TouchableOpacity 
          style={styles.button}
          onPress={() => {
            setType(
              type === Camera.Constants.Type.back
                ? Camera.Constants.Type.front
                : Camera.Constants.Type.back
            );
          }}> 
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

    )
}



const styles = StyleSheet.create({
    icons: {
        flexDirection: 'row'
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