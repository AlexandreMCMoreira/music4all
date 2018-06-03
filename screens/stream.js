import React, { Component } from 'react';
import {View, StyleSheet, FlatList,Text,button , TouchableOpacity} from 'react-native';

export default class ListScreen123 extends Component {
  static navigationOptions = { header: null };
render () {
return (<View style={{ justifyContent: 'center',  flexDirection: 'row', flex: 1}}>
<View>
<TouchableOpacity onPress={()=> this.props.navigation.navigate('registar')} style={{ height: 45, width: 200, marginTop: 10,marginLeft:5,borderColor: 'black', borderWidth: 1 }}>
    <Text style={{textAlign:'center', paddingTop:10,paddingBottom:10}}>teste.</Text>
        </TouchableOpacity>
</View>
<View>
<TouchableOpacity onPress={()=> this.props.navigation.navigate('teste')} style={{ height: 45, width: 80, marginTop: 10,marginRight:5,borderColor: 'black', borderWidth: 1 }}>
    <Text style={{textAlign:'center', paddingTop:10,paddingBottom:10}}>download</Text>
        </TouchableOpacity>
</View>
</View>);
}
}
