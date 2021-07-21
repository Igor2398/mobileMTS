import React, { Component } from 'react';
import { Text, View, ImageBackground, StyleSheet, TouchableOpacity, TextInput } from 'react-native';
import { TouchableHighlight } from 'react-native-gesture-handler';
import styles from './style.js'

const image = { uri: "https://i.ibb.co/qrVf8Ss/t-o-do-apki.png" };

export let cycles = 20;

class Palette extends React.Component {

    state = {
        inp: ''
    }

    handleInp = (text) => {
        this.setState({ inp: text })
    }

    render(){
        return(
            <ImageBackground source={image} style={styles.image}>
                <View style={styles.container}>
                    <TextInput  
                        placeholder="Enter number of cycles "  
                        underlineColorAndroid='transparent'  
                        style={styles.TextInputStyle}  
                        keyboardType={'numeric'}
                        onChangeText = { this.handleInp } 
                    />
                    <TouchableOpacity style={styles.paletteButton}
                     onPress = { ()=> { cycles = this.state.inp; console.log(cycles)}
                     }>
                        <Text>Submit</Text>
                    </TouchableOpacity> 
                </View>
            </ImageBackground>
        );
    }
}

export default Palette;