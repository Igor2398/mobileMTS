import React, {Component} from "react";
import { ImageBackground, StyleSheet, Text, View, Alert, TouchableOpacity, BackHandler } from "react-native";
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import styles from './style.js'

const image = { uri: "https://i.ibb.co/qrVf8Ss/t-o-do-apki.png" };
const clock = <FontAwesome5 name={'clock'} size={70} />;
const archive = <FontAwesome5 name={'file-archive'} size={70} solid />
const palette = <FontAwesome5 name={'cog'} size={70} />
const power = <FontAwesome5 name={'power-off'} size={70}/>

class Menu extends Component {


  render(){
    return(
        <ImageBackground source={image} style={styles.image}>
        <View style={styles.container}>

          <View style={[styles.menu, {alignItems:"flex-end"}]}>
          <TouchableOpacity 
              style={[styles.button, styles.clock]}
              onPress={() => this.props.navigation.navigate('Clock')}>
              <Text style={styles.icon}>{clock}</Text>
          </TouchableOpacity>

          <TouchableOpacity 
              style={[styles.button, styles.archive]}
              onPress={() => this.props.navigation.navigate('Archive')}>
              <Text style={styles.icon}>{archive}</Text>
          </TouchableOpacity>
          </View>

          <View style={styles.menu}>
          <TouchableOpacity 
              style={[styles.button, styles.palette]}
              onPress={() => this.props.navigation.navigate('Palette')}>
              <Text style={styles.icon}>{palette}</Text>
          </TouchableOpacity>

          <TouchableOpacity 
              style={[styles.button, styles.power]}
              onPress={() => kill()}>
              <Text style={styles.icon}>{power}</Text>
          </TouchableOpacity>
          </View>
        </View>
        </ImageBackground>
        );
  }
};

function kill () {
  Alert.alert("Hold on!", "Are you sure you want to close the app?", [
    {
      text: "Cancel",
      onPress: () => null,
      style: "cancel"
    },
    { text: "YES", onPress: () => BackHandler.exitApp() }
  ]);
  return true;
}

export default Menu;