import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';
import { FlashList } from '@shopify/flash-list';
import { imgs } from '../data/imagens';

const HomeScreen = ({ navigation }) => {
  const renderItem = ({ item }) => (
    <TouchableOpacity
      style={[styles.productContainer, { height: item.height }]}
      onPress={() => navigation.navigate('Pin', { Pin: item })}
    >
      <Image source={item.image} style={styles.productImage} />
      <View style={styles.descriptionContainer}>
        <Text style={styles.productName}>{item.description}</Text>
      </View>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <View style={styles.subtitle}>
        <Text style={[styles.text, styles.subtitleText]}>Design</Text>
        <Text style={[styles.text, styles.subtitleText]}>Books</Text>
        <Text style={[styles.text, styles.subtitleText]}>Art</Text>
      </View>
      <FlashList
        data={imgs}
        renderItem={renderItem}
        keyExtractor={(item) => item.id.toString()}
        estimatedItemSize={220}
        contentContainerStyle={styles.listContent}
        masonry={{ columns: 2, spacing: 12 }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 8,
    backgroundColor: '#000',
    
  },
  productContainer: {
    width: '100%',
    marginBottom: 12,
    backgroundColor: '#111',
    borderRadius: 18,
    overflow: 'hidden',
    elevation: 4,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.15,
    shadowRadius: 8,
  },
  productImage: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
  },
  descriptionContainer: {
    position: 'absolute',
    left: 0,
    right: 0,
    bottom: 0,
    padding: 10,
    backgroundColor: 'rgba(0,0,0,0.32)',
  },
  productName: {
    fontSize: 13,
    color: '#fff',
    fontFamily: 'SansitaOne',
    lineHeight: 18,
  },
  listContent: {
    paddingHorizontal: 10,
    paddingBottom: 20,
  },
  subtitle: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    paddingVertical: 20,
  },
  subtitleText: {
    textDecorationLine: 'underline',
    textDecorationColor: '#fff',
    textDecorationStyle: 'solid',
    textAlign: 'center',
    minWidth: 100,
  },
    text: {
    fontSize: 18,
    color: '#fff',
    fontFamily: 'SansitaOne',
  },
});

export default HomeScreen;
