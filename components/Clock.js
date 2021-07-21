import React, { Component } from 'react';
import { ActivityIndicator, FlatList, ImageBackground, Text, View } from 'react-native';
import styles from './style.js'
import { cycles } from './Palette'

const image = { uri: "https://i.ibb.co/qrVf8Ss/t-o-do-apki.png" };

let i = 0;

class Clock extends React.Component {
  
  state = {
    data:[]
  }

  fetchData = async() => {
    const response = await fetch("http://192.168.56.1:3000/data");
    const dat = await response.json();
    this.setState({data: dat});
  }

  
  sendNotification = async(action) => {
    if (action === true){
      const response = await fetch("http://192.168.56.1:3000/finished");
    } else {
      const response = await fetch("http://192.168.56.1:3000/brokensample");
    }
  }
 
  componentDidMount() {
    this._interval = setInterval(() => {
      this.fetchData();
      if(this.state.data[i]) {
        if(parseInt(this.state.data[i].a_force) <= 0){
          this.sendNotification(false);
        } else if(this.state.data[cycles - 1]) {
          this.sendNotification(true);
        } else {
          i = i + 1;
        }
      }
    }, 5000)
  }
  
  componentWillUnmount() {
    clearInterval(this._interval);
  }

  render() {
    return (
      <ImageBackground source={image} style={styles.image}>
      <View style={styles.container}>
          <View style={styles.clockContainer}>
          <View style={{flexDirection: "row"}}>
              <Text style={{textAlign: 'left'}}> Test Name {"\t \n"}</Text>
              <Text style={{textAlign: 'left'}}> Cycle Num {"\t \n"}</Text> 
              <Text style={{textAlign: 'left'}}> Axial Force {"\t \n"}</Text> 
              <Text style={{textAlign: 'left'}}> Axial Displacement {"\t \n"}</Text>
            </View>
            <FlatList
              data={this.state.data}
              renderItem={({item}) => 
            <View style={{flexDirection: "row"}}>
              <Text style={{textAlign: 'left'}}> {item.test_name} {"\t"}</Text>
              <Text style={{textAlign: 'left'}}> {item.a_count} {"\t"}</Text> 
              <Text style={{textAlign: 'left'}}>{item.a_force} {"\t"}</Text> 
              <Text style={{textAlign: 'left'}}>{item.a_displacement} {"\t"}</Text>
            </View>}
            />
          </View>
      </View>
      </ImageBackground>
    );
  }
};

export default Clock;