import React, { Component } from 'react';
import { LinearGradient } from 'expo';
import { StyleSheet, Text, View, Button, Alert, Image, requireNativeComponent,TouchableOpacity,TextInput } from 'react-native';

import { createStackNavigator } from 'react-navigation';

export default class Menu1234 extends React.Component {
  static navigationOptions = { header: null };
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
      <Image source={require('../images/logo_splash.png')} style = {{height: 180, width: 180, top:-100, }} />

      <TouchableOpacity onPress={onPressLearnMore} style={{ height: 45, width: 300, marginTop: -10,borderColor: 'black', borderWidth: 1 }}>
    <Text style={{textAlign:'center', paddingTop:10, paddingBottom:10}}>Upload</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={()=> this.props.navigation.navigate('download123')} style={{ height: 45, width: 300, marginTop: 30,borderColor: 'black', borderWidth: 1 }}>
    <Text style={{textAlign:'center', paddingTop:10, paddingBottom:10}}>Download</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={()=> this.props.navigation.navigate('playon')} style={{ height: 45, width: 300, marginTop: 30,borderColor: 'black', borderWidth: 1 }}>
    <Text style={{textAlign:'center', paddingTop:10, paddingBottom:10}}>online</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={()=> this.props.navigation.navigate('playoff')} style={{ height: 45, width: 300, marginTop: 30,borderColor: 'black', borderWidth: 1 }}>
    <Text style={{textAlign:'center', paddingTop:10, paddingBottom:10}}>Offline</Text>
        </TouchableOpacity>
        <Button
          title="Go back"
          onPress={() => this.props.navigation.goBack()}
        />




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

function onPressLearnMore() {
  Alert.alert(
    'Alert Title',
    'My Alert Msg',
    [
      {text: 'Ask me later', onPress: () => console.log('Ask me later pressed')},
      {text: 'Cancel', onPress: () => console.log('Cancel Pressed'), style: 'cancel'},
      {text: 'OK', onPress: () => console.log('OK Pressed')},
    ],
    { cancelable: false }
  )
}
