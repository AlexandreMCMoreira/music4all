import React, { Component } from "react";
import { View, Text, FlatList, Linking } from "react-native";
import { List, ListItem, Icon } from "react-native-elements";

class Download extends Component {
  constructor(props) {
    super(props);

    this.state = {
      loading: false,
      data: [{
          'id': '1',
          'artist': 'Marshmallo',
          'title': 'You can try',
          'url': 'https://firebasestorage.googleapis.com/v0/b/music4all-8a2d2.appspot.com/o/Marshmello%20x%20Juicy%20J%20-%20You%20Can%20Cry%20(Ft.%20James%20Arthur).mp3?alt=media&token=0d2343a8-2f13-4f44-85b4-14ca0959c139'
          },
          {
          'id': '2',            
          'artist': 'Maroon 5',
          'title': 'Girls Like You ft. Cardi B',
          'url': 'https://firebasestorage.googleapis.com/v0/b/music4all-8a2d2.appspot.com/o/Maroon%205%20-%20Girls%20Like%20You%20ft.%20Cardi%20B.mp3?alt=media&token=c054f46d-87b9-445f-838f-9e0a63da783e'
          }],
      page: 1,
      seed: 1,
      error: null,
      refreshing: false,
    };
  }

 
  
  renderSeparator = () => {
    return (
      <View
        style={{
          height: 1,
          // width: "86%",
          backgroundColor: "#CED0CE",
          // marginLeft: "14%"
        }}
      />
    );
  };
  
  clickItem = (item) => {
    console.log(item.title);
    Linking.openURL(item.url);
  };

  render() {
    return (
      <List containerStyle={{ borderTopWidth: 0, borderBottomWidth: 0 }}>
        <FlatList
          data={this.state.data}
          renderItem={({ item }) => (
            <ListItem
              title={`${item.artist}`}
              subtitle={item.title}
              leftIcon={{'name': 'play-circle-outline'}}
              rightIcon={{'name': 'arrow-downward'}}
              // avatar={{ uri: item.picture.thumbnail }}
              containerStyle={{ borderBottomWidth: 0 }}
              button onPress={() => { this.clickItem(item) }}
            />
          )}
          keyExtractor={item => item.id}
          ItemSeparatorComponent={this.renderSeparator}
        />
      </List>
    );
  }
}

export default Download;