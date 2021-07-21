import React, {Component} from "react";
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Palette from './components/Palette';
import Clock from './components/Clock';
import Menu from "./components/Menu";
import Archive from "./components/Archive";
import Power from "./components/Power";
import Show from "./components/Show";
import Push from "./components/Push";

const Stack = createStackNavigator();


class App extends Component {
  componentDidMount(){
    Push();
  }
  render(){
    return(
      <NavigationContainer>
        <Stack.Navigator>
            <Stack.Screen
            name="Home"
            component={Menu}
            />

            <Stack.Screen
            name="Clock"
            component={Clock}
            />

            <Stack.Screen
            name="Archive"
            component={Archive}
            />

            <Stack.Screen
            name="Palette"
            component={Palette}
            />

            <Stack.Screen
            name="Power"
            component={Power}
            />

            <Stack.Screen
            name="Show" 
            component={Show}
            /> 

        </Stack.Navigator>
        
      </NavigationContainer>
      );
  }
};

export default App; 
