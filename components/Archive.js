import React, { Component } from 'react';
import { Button, Text, View, FlatList, ImageBackground, TouchableOpacity, Alert } from 'react-native';
import styles from './style.js'

const image = { uri: "https://i.ibb.co/qrVf8Ss/t-o-do-apki.png" };

export let test = ''


class Archive extends React.Component {
    state = {
        data:[]
      }
    
      fetchData = async()=>{
        const response = await fetch("http://192.168.56.1:3000/names");
        const dat = await response.json();
        this.setState({data: dat});
      }
    
      componentDidMount() {
        this.fetchData();
      }
    

    render(){
        return(
            <ImageBackground source={image} style={styles.image}>
            <View style={styles.container}>
                    <FlatList
                    data={this.state.data}
                    renderItem={({item, index}) => 
                        <View style={{flexDirection: "row", justifyContent:'center'}}>
                            <TouchableOpacity style={styles.listElement}
                                onPress={() => {this.props.navigation.navigate('Show');
                                test = item.test_name}}>
                                <Text style={{color:'#f7b731', fontSize:30}}> {item.test_name} </Text>
                            </TouchableOpacity>
                        </View>}
                        keyExtractor={(item, index) => index.toString()}
                    />
            </View>
            </ImageBackground>
        );
    }
}

export default Archive;