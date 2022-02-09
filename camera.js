import React from 'react';
import { View, StyleSheet } from 'react-native';
import { RNCamera } from 'react-native-camera';
import { useCamera } from 'react-native-camera-hooks';
export default function CameraApp() {
    
    const [{cameraRef}] = useCamera(null)
    return (
        <View style={styles.body}>
            <RNCamera
                ref={cameraRef}
                type={RNCamera.Constants.Type.back}
                style={styles.preview}
                >
            </RNCamera>
        </View>

    );
}

const styles = StyleSheet.create({
    body:{
        flex: 1,
    }
});