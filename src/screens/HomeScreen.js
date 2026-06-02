import React from 'react';
import { View, Text, FlatList, Image, StyleSheet, TouchableOpacity } from 'react-native';
import { imgs } from '../data/imagens';

const HomeScreen = ({ navigation }) => {
  const renderItem = ({ item }) => (
    <TouchableOpacity style={styles.productContainer} onPress={() => navigation.navigate('Pin', { Pin: item })}>
      <Image source={item.image} style={styles.productImage} />
      <View style={styles.descriptionContainer}>
        <Text style={styles.productName}>{item.description}</Text>
      </View>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={imgs}
        renderItem={renderItem}
        keyExtractor={(item) => item.id.toString()}
        numColumns={2}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 8,
    backgroundColor: '#EBEBEB',
  },
  productContainer: {
    flex: 1,
    margin: 4,
    padding: 15,
    backgroundColor: '#FFFFFF',
    borderRadius: 8,
    elevation: 2,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
    alignItems: 'center',
    justifyContent: 'center',
  },
  productImage: {
    width: 120,
    height: 120,
    resizeMode: 'contain',
    marginBottom: 10,
  },
  descriptionContainer: {
    width: '100%',
  },
  productName: {
    fontSize: 14,
    color: '#333333',
    textAlign: 'center',
  },
});

export default HomeScreen;
