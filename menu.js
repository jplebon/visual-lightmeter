import React from 'react';
import { StyleSheet, Text, View, Button, ImageBackground, TouchableOpacity, useWindowDimensions, Dimensions} from 'react-native';


const screen = Dimensions.get("screen");
console.log(screen.width);
export default function Menu (){
    return (

    <View style={styles.container}>
     

        <View style={styles.header}>
            
            <Text style={[styles.aperture]}>{'Aperture'}</Text>
            <Text style={[styles.ISO]}>{'ISO'}</Text>
            <Text style={[styles.shutterSpeed]}>{'Shutter\nSpeed'}</Text>
        </View>
   </View>
    )
}

const styles = StyleSheet.create({

    container:{
        flex: 1,
        flexDirection: 'row'
    },

    header: {
        alignItems: 'center',
        height: 500,
        borderRadius: 10,
        bottom:220,
        backgroundColor: 'rgba(100, 100, 100, 0.7)',
        flex: 1,
        flexDirection: 'row',
        
    },

    aperture: {
        color: 'rgba(18, 18, 18, 0)',
        textAlign: 'center',
        fontSize: 20,
        left: screen.width/7.5
        
    },

    ISO: {
        color: 'rgba(18, 18, 18, 0)',
        textAlign: 'center',
        fontSize: 20,
        left: screen.width/3.6
        
    },

    shutterSpeed: {
        color: 'rgba(18, 18, 18, 0)',
        textAlign: 'center',
        fontSize: 20,
        left: screen.width/2.3
        
    },

    
    



});