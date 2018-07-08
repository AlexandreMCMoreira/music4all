import React, { Component } from "react";
import { View, Text, FlatList, Linking, Alert } from "react-native";
import { List, ListItem, Icon } from "react-native-elements";
import { Constants, Audio } from 'expo';
import BottomNavigation, { IconTab, Badge } from 'react-native-material-bottom-navigation';

class Online extends Component {
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
      activeIndex: null
    };
  }

   componentDidMount() {
     this.playbackObject = new Audio.Sound();
     Audio.setAudioModeAsync({
       allowsRecordingIOS: false,
       interruptionModeIOS: Audio.INTERRUPTION_MODE_IOS_DO_NOT_MIX,
       playsInSilentModeIOS: true,
       shouldDuckAndroid: true,
       interruptionModeAndroid: Audio.INTERRUPTION_MODE_ANDROID_DO_NOT_MIX,
     });
   }

   // Bottom Navigation
   state = {
    activeTab: 'stop'
  }

  tabs = [
    {
      key: 'stop',
      label: 'Stop',
      barColor: '#1565C0',
      pressColor: 'rgba(255, 255, 255, 0.16)',
      icon: 'stop'
    }
  ]

  state = {
    activeTab: this.tabs[0].key
  }

  renderIcon = icon => ({ isActive }) => (
    <Icon size={24} color="white" name={icon} />
  )

  renderTab = ({ tab, isActive }) => (
    <IconTab
      isActive={isActive}
      showBadge={tab.key === 'movies-tv'}
      renderBadge={() => <Badge>2</Badge>}
      key={tab.key}
      label={tab.label}
      renderIcon={this.renderIcon(tab.icon)}
    />
  )
 

//receber um url e busca a musica , 

   loadMusic = async (source) => {
     const status = await this.playbackObject.getStatusAsync();

     if (status.isLoaded && status.uri === source.uri) {
       console.warn('[loadMusic] already loaded');
       return false;
     } else if (status.isLoaded) {
       if (status.isPlaying) {
         await this.playbackObject.stopAsync();
       }

       await this.playbackObject.unloadAsync();
     }

     await this.playbackObject.loadAsync(source);

     return true;
   }
   //dar play na musica
   playMusic = async () => {
     const status = await this.playbackObject.getStatusAsync();
    //se nao houver musica a tocar avisa
     if (!status.isLoaded) {
       console.warn('[playMusic] not loaded');
       return false;
     }
     //quando ha musica a tocar, para e toca a outra escolhida
     await this.playbackObject.stopAsync();
     Audio.setAudioModeAsync({
       allowsRecordingIOS: false,
       interruptionModeIOS: Audio.INTERRUPTION_MODE_IOS_DO_NOT_MIX,
       playsInSilentModeIOS: true,
       shouldDuckAndroid: true,
       interruptionModeAndroid: Audio.INTERRUPTION_MODE_ANDROID_DO_NOT_MIX,
     });
     await this.playbackObject.playAsync();

     return true;
   }
   //parar a musica
   stopMusic = async () => {
     const status = await this.playbackObject.getStatusAsync();

     if (!status.isLoaded) {
       //console.warn('[stopMusic] not loaded');
       Alert.alert('Não existe música em reprodução');
       return false;
     }

     await this.playbackObject.stopAsync();

     return true;
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
  //carrega a musica selecionada na lista e toca
  clickItem = async (item) => {
    console.log(item.title);

    await this.loadMusic({
      uri: item.url
    })

    await this.playMusic()
  };

  render() {
    return (
      <View style={{ flex: 1 }}>
        <List containerStyle={{ borderTopWidth: 0, borderBottomWidth: 0 }}>
          <FlatList
            data={this.state.data}
            renderItem={({ item }) => (
              <ListItem
                title={`${item.artist}`}
                subtitle={item.title}
                rightIcon={{'name': 'play-circle-outline'}}
                // avatar={{ uri: item.picture.thumbnail }}
                containerStyle={{ borderBottomWidth: 0 }}
                button onPress={() => { this.clickItem(item) }}
              />
            )}
            keyExtractor={item => item.id}
            ItemSeparatorComponent={this.renderSeparator}
          />
        </List>
        {/*barra do stop*/}
        <BottomNavigation
          tabs={this.tabs}
          activeTab={this.state.activeTab}
          onTabPress={newTab => this.stopMusic()}
          renderTab={this.renderTab}
          useLayoutAnimation
        />
      </View>
    );
  }
}

export default Online;