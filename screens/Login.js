import React from 'react';
import { StyleSheet, Text, View, Button, Alert ,TextInput, TouchableOpacity} from 'react-native';

import { createStackNavigator } from 'react-navigation';
/*import * as firebase from 'firebase';*/

// Set the configuration for your app
// TODO: Replace with your project's config object
/* var config = {
  apiKey: "AIzaSyAigT6dJG7c_WzreoxjykgIzAbxvBolnAo",
  authDomain: "music4all-8a2d2.firebaseapp.com",
  databaseURL: "https://music4all-8a2d2.firebaseio.com/",
  storageBucket: "gs://music4all-8a2d2.appspot.com"
};
firebase.initializeApp(config);

// Get a reference to the database service
var database = firebase.database();


var ref = database.ref();
ref.on("value", function (snapshot) {
  console.log(snapshot.val());
}, function (error) {
  console.log("Error: " + error.code);
}); */




export default class Home2 extends React.Component {
  static navigationOptions = { header: null };
  
  render() {
    return(
      <View style={styles.container}>
        
        <Text style={{color: '#fff' ,fontSize:50 ,marginBottom:50}}>Login</Text>
        <Text style={{color: '#fff' ,fontSize:20}}>email:</Text>
        <TextInput style={{height: 40, width: 300,borderColor: 'transparent', borderWidth: 1 ,color: '#fff', fontSize:20 }}
      />
      <Text style={{color: '#fff' ,fontSize:20, marginTop:60}}>password:</Text>
        <TextInput style={{height: 40, width: 300,borderColor: 'transparent', borderWidth: 1 ,color: '#fff', fontSize:20, marginBottom:50 }} secureTextEntry={true}
      />



          <TouchableOpacity onPress={()=> this.props.navigation.navigate('Upload2')} style={{ height: 45, width: 300, marginTop: 10,borderColor: 'black', borderWidth: 1 }}>
    <Text style={{textAlign:'center', paddingTop:10,paddingBottom:10}}>login as guest</Text>
        </TouchableOpacity>


        <TouchableOpacity onPress={()=> this.props.navigation.navigate('teste')} style={{ height: 45, width: 300, marginTop: 10,borderColor: 'black', borderWidth: 1 }}>
    <Text style={{textAlign:'center', paddingTop:10,paddingBottom:10}}>Login</Text>
        </TouchableOpacity>




        <TouchableOpacity onPress={()=> this.props.navigation.navigate('registar')} style={{ height: 45, width: 300, marginTop: 10,borderColor: 'transparent', borderWidth: 0 }}>
    <Text style={{textAlign:'center', paddingTop:10,paddingBottom:10}}>If you dont have account register here.</Text>
        </TouchableOpacity>
    
      
      </View>
    );
  }
}



const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    // color: '#fff',
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

const buttonContainer= StyleSheet.create( {
  container:{
    height: 45, width: 300,
  alignItems: 'center',
},
});



const buttonText= StyleSheet.create( {
  container:{
  textAlign: 'center',
  color: '#4C64FF',
  padding: 15,
  height: 45, width: 300
},
});
