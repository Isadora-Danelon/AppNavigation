import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons } from '@expo/vector-icons';
import HomeStackNavigator from "./StackNavigation";
import ChatScreen from '../screens/ChatScreen';
import PesquisaScreen from '../screens/PesquisaScreen';
import ProfileScreen from '../screens/ProfileScreen';

const Tab = createBottomTabNavigator();


const TabNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;

          if (route.name === 'Início') {
            iconName = focused ? 'home' : 'home-outline';
          } else if (route.name === 'Chat') {
            iconName = focused ? 'chatbubble' : 'chatbubble-outline';
          } else if (route.name === 'Pesquisa') {
            iconName = focused ? 'search' : 'search-outline';
          } else if (route.name === 'Perfil') {
            iconName = focused ? 'person' : 'person-outline';
          }

          return <Ionicons name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: '#391213',
        tabBarInactiveTintColor: '#c1bab2',
        tabBarInactiveBackgroundColor:'#170F0C',
        headerShown: false,
        fontFamily: 'SansitaOne',
      })}
    >
      <Tab.Screen name="Início" component={HomeStackNavigator} />
      <Tab.Screen name="Chat" component={ChatScreen} />
      <Tab.Screen name="Pesquisa" component={PesquisaScreen} />
      <Tab.Screen name="Perfil" component={ProfileScreen} />
    </Tab.Navigator>
  );
};

export default TabNavigator;