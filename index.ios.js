import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Image,
  Dimensions,
  ScrollView,
  FlatList
} from 'react-native';

const width = Dimensions.get('screen').width;

export default class InstaluraMobile extends Component {
  render() {
    const fotos = [{id: 1, usuario: 'rafael'}
      ,{id: 2, usuario: 'alberto'}
      ,{id: 3, usuario: 'vitor'}];

    return (
      <FlatList style={{marginTop: 20}}
          keyExtractor={item => item.id}
          data={fotos}
          renderItem={ ({item}) =>
            <View>
              <Text>{item.usuario}</Text>
              <Image source={require('./resources/img/alura.jpg')}
                  style={{width: width, height: width}}/>
            </View>
          }
      />
    );
  }
}

AppRegistry.registerComponent('InstaluraMobile', () => InstaluraMobile);
