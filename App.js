import 'react-native-gesture-handler';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { useFonts } from 'expo-font';
import DrawerNavigator from './src/Navigation/DrawerNavigation';

export default function App (){
  const [fontsLoaded] = useFonts({
    SansitaOne: require('./assets/fonts/SansitaOne-Regular.ttf'),
  });

  if (!fontsLoaded) {
    return null;
  }

  return (
    <NavigationContainer>
      <DrawerNavigator/>
    </NavigationContainer>
  );
}