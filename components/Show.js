import React, { Component } from 'react';
import { Button, Text, View, FlatList, ImageBackground, TouchableOpacity } from 'react-native';
import styles from './style.js'
import { Archive, test } from './Archive'

const image = { uri: "https://i.ibb.co/qrVf8Ss/t-o-do-apki.png" };


class Show extends React.Component {

    state = {
        data:[]
      }
    
      fetchData = async()=>{
        const response = await fetch("http://192.168.56.1:3000/data/"+test);
        const dat = await response.json();
        this.setState({data: dat});
      }
    
      componentDidMount() {
        this.fetchData();
      }

      deleteRecord(record) {
        var data = {
            testName: record.testName
        }
        fetch("http://192.168.56.1:3000/delete/"+record, {
            method: 'DELETE',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(data)
        }).then( (response)=> {
            if (response.status >= 400) {
            throw new Error("Server error");
            }
            return response.json();    
        }).then(function(data) {
            if(data === "success"){
               this.setState({msg: "Data deleted."});  
                }
        }).catch( (err)=>{
            console.log(err)
        });
      }


    render(){
        console.log(test)
        return(
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
                            renderItem={({item, index}) => 
                            <View style={{flexDirection: "row"}}>
                            <Text style={{textAlign: 'left'}}> {item.test_name} {"\t"}</Text>
                            <Text style={{textAlign: 'left'}}> {item.a_count} {"\t"}</Text> 
                            <Text style={{textAlign: 'left'}}>{item.a_force} {"\t"}</Text> 
                            <Text style={{textAlign: 'left'}}>{item.a_displacement} {"\t"}</Text>
                            </View>}
                            keyExtractor={(item, index) => index.toString()}
                        />
                        <TouchableOpacity style={styles.listElement}
                        onPress={()=> {this.deleteRecord(test)}}>
                            <Text style={{color:'#f7b731'}}>Delete</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </ImageBackground>
        );
    }
}

export default Show;