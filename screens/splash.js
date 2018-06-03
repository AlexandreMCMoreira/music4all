import React, { Component } from 'react';
import { LinearGradient } from 'expo';
import { StyleSheet, Text, View, Button, Alert, Image, requireNativeComponent } from 'react-native';

export default class splash extends React.Component {
  render() {
    return (
      <LinearGradient
      colors={['black', '#7D26CD', '#f702e7']}
      style={{
        position: 'absolute',
        left: 0,
        right: 0,
        top: 0,
        height:850,
        
      }}
    >
      <View style={styles.container}>
      <Image source={require('./images/logo_splash.png')} style = {{height: 350, width: 350, top:-50}} />
           
    </View>
    </LinearGradient>
    );
  }
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  
});