import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import TabNavigator from './TabNavigation';
import { categories } from "../data/categories";
import { View, Text, FlatList, TouchableOpacity, StyleSheet } from 'react-native';

const Drawer = createDrawerNavigator();

const CustomDrawerContent = (props) => {
  const handleNavigation = (categoryName) => {
    // Map category names to tab names
    const tabMap = {
      'Home': 'Início',
      'Perfil': 'Perfil',
      'Chat': 'Chat',
      'Pesquisa': 'Pesquisa'
    };
    
    props.navigation.navigate('HomeTabs', {
      screen: tabMap[categoryName]
    });
    props.navigation.closeDrawer();
  };

  return (
    <View style={{ flex: 1 }}>
        <View style={styles.header}>
            <Text style={styles.title}>Pinterest</Text>
        </View>
        <FlatList
            data={categories}
            keyExtractor={item => item.id}
            renderItem={({item}) => (
                <TouchableOpacity 
                  style={styles.item}
                  onPress={() => handleNavigation(item.name)}
                >
                    <Text style={styles.itemText}>{item.name}</Text>
                </TouchableOpacity>
            )}
        />
    </View>
  );
}


const DrawerNavigator = () => {
  return (
    <Drawer.Navigator 
      screenOptions={{
        headerStyle: { backgroundColor: '#170F0C', elevation: 0, shadowOpacity: 0 },
        headerTintColor: '#ffffff',
        drawerActiveBackgroundColor: '#391213',
        drawerActiveTintColor: '#c1bab2',
        fontFamily: 'SansitaOne'
      }}
      drawerContent={props => <CustomDrawerContent {...props} />}
    >
      <Drawer.Screen name="HomeTabs" component={TabNavigator} />
    </Drawer.Navigator>
  );
};


const styles = StyleSheet.create({
    header: {
        backgroundColor: '#170F0C',
        paddingTop: 50,
        paddingBottom: 20,
        
    },
    title: {
        fontSize: 22,
        fontWeight: 'bold',
        color: '#333333',
        marginHorizontal: 20,
        fontFamily: 'SansitaOne',
    },
    item: {
        padding: 15,
        borderBottomWidth: 1,
        borderBottomColor: '#c1bab2',
        
    },
    itemText: {
        fontSize: 16,
        color: '#170F0C',
        fontFamily: 'SansitaOne',
    }
})

export default DrawerNavigator;