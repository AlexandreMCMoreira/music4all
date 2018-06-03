import React from 'react';
import { StyleSheet, Text, View, Button, Alert, Image, requireNativeComponent } from 'react-native';


export default class teste extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        
        
        <Image source={require('./images/logo_inicio.png')} style = {{height: 300, width: 300,}} />
        
        <Button onPress={onPressLearnMore} title="Learn More" color="#373737" accessibilityLabel="Learn more about this grey button"/>
      </View>
      
      
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  
});


function onPressLearnMore(){
  Alert.alert(
    'não aparece os text',
    "minha mensagem do erro",
    [
      {Text:'ask me later', onPress:() => console.log('ask me later pressed')},
      {Text:'cancel', onPress:() => console.log('cancel pressed'), style: 'cancel'},
      {Text:'ok', onPress:() => console.log('ok pressed')},

    ],
{cancelable: true}
  )
}
