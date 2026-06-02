import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const PesquisaScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Tela de pesquisa</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
  },
  text: {
    fontSize: 18,
    color: '#333333',
  },
});

export default PesquisaScreen;
