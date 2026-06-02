import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import HomeScreen from '../screens/HomeScreen';
import PinScreen from  '../screens/PinScreen';

const Stack = createStackNavigator();

const HomeStackNavigator = () => {
    return (

           <Stack.Navigator
      screenOptions={{
        headerStyle: {
        backgroundColor: '#391213',
        elevation: 0, 
        shadowOpacity: 0,
        },
        headerTintColor: '#ffffff',
        headerTitleStyle: {
        fontWeight: 'bold',
        },
      }}
    >
      <Stack.Screen name="Home" component={HomeScreen} options={{ headerShown: false }} />
      <Stack.Screen name="Pin" component={PinScreen} options={{ title: 'Detalhes do Pin' }} />
    </Stack.Navigator>

  ); 
    
};

export default HomeStackNavigator;