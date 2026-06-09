import React from 'react';
import { View, Text, Image, StyleSheet, ScrollView } from 'react-native';

const PinScreen = ({ route }) => {
  const { Pin } = route.params || {};

  if (!Pin) {
    return (
      <View style={styles.center}>
        <Text style={styles.text}>Nenhum Pin selecionado.</Text>
      </View>
    );
  }

  return (
    <ScrollView style={styles.container}>
      <Image source={Pin.image} style={styles.image} />
      <View style={styles.details}>
        <Text style={styles.title}>{Pin.description}</Text>
        <Text style={styles.subtitle}>Detalhes do Pin</Text>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  center: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 16,
    color: '#333333',
    fontFamily: 'SansitaOne',
  },
  image: {
    width: '100%',
    height: 400,
    resizeMode: 'contain',
    backgroundColor: '#F5F5F5',
  },
  details: {
    padding: 16,
    
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#333333',
    marginBottom: 8,
    fontFamily: 'SansitaOne',
  },
  subtitle: {
    fontSize: 16,
    color: '#666666',
    fontFamily: 'Sansita',
  },
});

export default PinScreen;
