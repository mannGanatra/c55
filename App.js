import * as React from 'react';
import { Button, View, Text, TouchableOpacity } from 'react-native';
import { Audio } from 'expo-av';



class DJbutton extends React.Component {
  playSound = async () => {
    await Audio.Sound.createAsync(
      {
        uri:
          'http://www.accesscontrolsales.com/Ingram_Products/mp3/pb525dch-x.mp3',
      },
      { shouldPlay: true }
    );
  };

  render() {
    return (
      <TouchableOpacity
        style={{
          backgroundColor: 'purple',
          marginTop: 10,
          marginLeft: 75,
          borderWidth: 3,
          borderColor: 'white',
          alignItems: 'center',
          justifyContent: 'center',
          width: 170,
          height: 80,
          borderRadius: 50,
        }}
        onPress={this.playSound}>
        <Text
          style={{
            fontSize: 10,
          }}>
          Sound 1
        </Text>
      </TouchableOpacity>
    );
  }
}

class DJbutton1 extends React.Component {
  playSound = async () => {
    await Audio.Sound.createAsync(
      { uri: 'http://starmen.net/mother2/soundfx/hypno.wav' },
      { shouldPlay: true }
    );
  };
  render() {
    return (
      <TouchableOpacity
        style={{
          backgroundColor: 'blue',
          marginLeft: 75,
          marginTop: 17,
          borderWidth: 3,
          borderColor: 'white',
          alignItems: 'center',
          justifyContent: 'center',
          width: 170,
          height: 80,
          borderRadius: 50,
        }}
        onPress={this.playSound}>
        <Text
          style={{
            fontSize: 10,
          }}>
          Sound 2
        </Text>
      </TouchableOpacity>
    );
  }
}

class DJbutton2 extends React.Component {
  playSound = async () => {
    await Audio.Sound.createAsync(
      {
        uri:
          'http://www.cs.fsu.edu/~myers/cis3931/notes/deitel/Elevator/com/deitel/jhtp5/elevator/view/sounds/bell.wav',
      },
      { shouldPlay: true }
    );
  };
  render() {
    return (
      <TouchableOpacity
        style={{
          backgroundColor: 'yellow',
          marginLeft: 75,
          marginTop: 17,
          borderWidth: 3,
          borderColor: 'white',
          alignItems: 'center',
          justifyContent: 'center',
          width: 170,
          height: 80,
          borderRadius: 50,
        }}
        onPress={this.playSound}>
        <Text
          style={{
            fontSize: 10,
          }}>
          Sound 3
        </Text>
      </TouchableOpacity>
    );
  }
}

class DJbutton3 extends React.Component {
  playSound = async () => {
    await Audio.Sound.createAsync(
      { uri: 'http://www.fun-lover.com/music/wavs/fireworks.wav' },
      { shouldPlay: true }
    );
  };
  render() {
    return (
      <TouchableOpacity
        style={{
          backgroundColor: 'green',
          marginLeft: 75,
          marginTop: 17,
          borderWidth: 3,
          borderColor: 'white',
          alignItems: 'center',
          justifyContent: 'center',
          width: 170,
          height: 80,
          borderRadius: 50,
        }}
        onPress={this.playSound}>
        <Text
          style={{
            fontSize: 10,
          }}>
          Sound 4
        </Text>
      </TouchableOpacity>
    );
  }
}

class DJStopbutton extends React.Component {
  
  render() {
    return (
      <TouchableOpacity
        style={{
          backgroundColor: 'red',
          marginLeft: 75,
          marginTop: 15,
          borderWidth: 2,
          borderColor: 'cyan',
          alignItems: 'center',
          justifyContent: 'center',
          width: 170,
          height: 40,
          borderRadius: 50,
        }}
        onPress={() => { 

          Audio.setIsEnabledAsync(false);
        
         }}>

        <Text
          style={{
            fontSize: 10,
          }}>
          Stop Sound
        </Text>
      </TouchableOpacity>
    );
  }
}

export default class App extends React.Component {
  render() {
    return (
      <View  style={{backgroundColor:"orange"}}>
        <DJbutton />
        <DJbutton1 />
        <DJbutton2 />
        <DJbutton3 />
        <DJStopbutton />
      </View>
    );
  }
}
