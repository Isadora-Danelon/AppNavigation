import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import TabNavigator from './TabNavigation';
import { categories } from "../data/categories";
import { View, Text, FlatList, TouchableOpacity, StyleSheet } from 'react-native';

const Drawer = createDrawerNavigator();

const CustomDrawerContent = (props) => {
  return (
    <View style={{ flex: 1 }}>
        <View style={styles.header}>
            <Text style={styles.title}>Pinterest</Text>
        </View>
        <FlatList
            data={categories}
            keyExtractor={item => item.id}
            renderItem={({item}) => (
                <TouchableOpacity style={styles.item}>
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
        drawerActiveTintColor: '#c1bab2'
      }}
      drawerContent={props => <CustomDrawerContent {...props} />}
    >
      <Drawer.Screen name="Mercado Livre" component={TabNavigator} />
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
    },
    item: {
        padding: 15,
        borderBottomWidth: 1,
        borderBottomColor: '#c1bab2'
    },
    itemText: {
        fontSize: 16,
        color: '#170F0C'
    }
})

export default DrawerNavigator;