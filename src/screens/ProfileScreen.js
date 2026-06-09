import React from 'react';
import { ScrollView, View, Text, FlatList, Image, StyleSheet, TouchableOpacity, TextInput, Dimensions } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import Entypo from '@expo/vector-icons/Entypo';

const ProfileScreen = () => {

  return (
    <ScrollView>
    <View style={styles.container}>
        <View style={styles.searchBarOverlay}>
          <View style={styles.searchBar}>
            <Ionicons name="search" size={20} color="#999" />
            <TextInput 
              style={styles.searchInput}
              placeholder="Pesquisar"
              placeholderTextColor="#999"
            />
          </View>
        </View>
      <View style={styles.perfil}>
        <Ionicons name="person" size={24} size={50}color="#fff" />
        </View>
    </View>

    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#000',
  },
  searchBar: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
    borderRadius: 25,
    paddingHorizontal: 20,
    marginHorizontal: 15,
    marginTop: 5,
    marginBottom: 10,
    height: 45,
    fontFamily: 'SansitaOne',
  },
  searchInput: {
    flex: 1,
    marginLeft: 10,
    fontSize: 16,
    color: '#000',
    fontFamily: 'SansitaOne',
  },
  text: {
    fontSize: 18,
    color: '#333333',
    fontFamily: 'SansitaOne',
  },
  searchBarOverlay: {
    paddingTop: 15,
    paddingHorizontal: 15,
    paddingBottom: 15,
    alignItems: 'center',
  },
  perfil: {
  marginLeft:30,
  width:70,
  height:70,
  backgroundColor: 'red',
  padding:10,
  borderRadius:'50%',
  },
});

export default ProfileScreen;
