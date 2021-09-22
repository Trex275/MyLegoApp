import { StatusBar } from 'expo-status-bar';
import * as React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {createSwitchNavigator, createAppContainer} from "react-navigation"
import Legoinfo from './Screens/legoinfo';
import Homescreen from './Screens/Homescreen';
import Agegroups from './Screens/agegroup';
import Sets from './Screens/sets';

export default class App extends React.Component{
  render(){
    return(
      <View>
        <Evergreen/>
      </View>
    )
  }
}

const Gps = createSwitchNavigator({
  HomeScreen: Homescreen,
  Agegroups: Agegroups,
  Legoinfo: Legoinfo,
  Sets: Sets
});
const Evergreen = createAppContainer(Gps);