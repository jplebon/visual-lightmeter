import React from 'react';
import { StyleSheet, Dimensions, requireNativeComponent, NativeModules, UIManager, findNodeHandle, } from 'react-native';

const screen = Dimensions.get("screen");
const CameraView = requireNativeComponent('CameraModule')

export default class NativeCameraModule extends React.Component {

    constructor(props) {
        super(props)
    }

    _onISOChange = (value) => {
       NativeModules.CameraModuleManager.onISOChange(value);
    }

    _onShutterChange = (value) => {
        NativeModules.CameraModuleManager.onShutterChange(value);
    }

    render() {
        return <CameraView
            ref={e => { this.camera = e }}
            style={[styles.container, this.props.style]}
            height={this.props.height}
            width={this.props.width}
        >{this.props.children}
        </CameraView>
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'stretch',
        justifyContent: 'center',
        height: screen.height,
       }
})
