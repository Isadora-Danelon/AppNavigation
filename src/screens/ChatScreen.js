import React from 'react';
import { ScrollView, View, Text, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const ChatScreen = () => {
  return (
    <ScrollView>
    <View style={styles.container}>

      <View style={styles.title}> 
      <Text style={styles.text}>Chat de conversa</Text>
      </View>

      <View style={styles.subtitle}>
        <Text style={[styles.text, styles.subtitleText]}>Atualizações</Text>
        <Text style={[styles.text, styles.subtitleText]}>Caixa de Entrada</Text>
      </View>

      <View style={styles.title2}>
        <Text style={styles.text}>News</Text>
      </View>

      <View style={styles.news}>

        <View style={styles.pares}>
        <Ionicons style={styles.pImage} name="person" size={30} color="#900"/>
        <Text style={styles.c}>
          a
        </Text>

        <View style={styles.info}>
          Isadora compartilhou fora do Pinterest
        </View>

        </View>

        <View style={styles.pares}>

        <Ionicons style={styles.pImage} name="person" size={30} color="#900"/>
        <Text style={styles.c}>
          Marcela
        </Text>

        <View style={styles.info}>
          Isadora compartilhou fora do Pinterest
        </View>

        </View>

        <View style={styles.pares}>
        <Ionicons style={styles.pImage} name="person" size={30} color="#900"/>
        <Text style={styles.c}>
         Star ❤
        </Text>
        <View style={styles.info}>
          Isadora compartilhou fora do Pinterest
        </View>

        </View>

        <View style={styles.pares}>
        
        <Ionicons  style={styles.pImage} name="person" size={30} color="#900"/>
        <Text style={styles.c}>
          Ana
        </Text>

        <View style={styles.info}>
          Isadora compartilhou fora do Pinterest
        </View>

        </View>

      <View style={styles.title3}>

        <Text style={styles.text}>Contatos</Text>
      </View>
      

        <View style={styles.contato}>
      <View style={styles.pares}>

        <Ionicons  style={styles.pImage} name="person" size={30} color="#900"/>
        <Text style={styles.c}>
          a
        </Text>

        <View style={styles.info}>
          Isadora compartilhou fora do Pinterest
        </View>

      </View>

       <View style={styles.pares}>
        <Ionicons style={styles.pImage} name="person" size={30} color="#900"/>
        <Text style={styles.c}>
          Marcela
        </Text>
        <View style={styles.info}>
          Isadora compartilhou fora do Pinterest
        </View>
      </View>

      <View style={styles.pares}>
        <Ionicons style={styles.pImage} name="person" size={30} color="#900"/>
        <Text style={styles.c}>
          Star ❤
        </Text>
        <View style={styles.info}>
          Isadora compartilhou fora do Pinterest
        </View>
      </View>
      <View style={styles.pares}>
        <Ionicons style={styles.pImage} name="person" size={30} color="#900"/>
        <Text style={styles.c}>
          Ana
        </Text>
        <View style={styles.info}>
          Isadora compartilhou fora do Pinterest
        </View>
      </View>

      </View>
      </View>
    </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#170F0C',
  },
  text: {
    fontSize: 18,
    color: '#fff',
    fontFamily: 'SansitaOne',
  },

  title: {
    paddingVertical: 20,
    paddingHorizontal: 16,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    fontSize: 18,
    color: '#fff',
  },

  title2: {
    paddingVertical: 12,
    paddingHorizontal: 16,
    flexDirection: 'row',
    fontSize: 18,
    color: '#fff',
  },

  title3: {
    paddingVertical: 10,
    marginTop: 0,
    marginBottom: 8,
    flexDirection: 'row',
    fontSize: 18,
    color: '#fff',
  },

  news: {
    paddingHorizontal: 16,
    paddingBottom: 10,
    fontSize: 15,
    color: '#fff',
  },
  contato: {
    paddingBottom: 10,
    fontSize: 15,
    color: '#fff',
  },
  subtitle: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    paddingVertical: 12,
  },
  subtitleText: {
    textDecorationLine: 'underline',
    textDecorationColor: '#fff',
    textDecorationStyle: 'solid',
    textAlign: 'center',
    minWidth: 140,
  },
  c: {
    flex: 1,
    fontSize: 18,
    color: '#fff',
    fontFamily: 'SansitaOne',
  },
  pares: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 8,
    backgroundColor:'',
  },
  info: {
    flex: 1,
    paddingLeft: 12,
    color: '#fff',
    fontFamily: 'SansitaOne',
  },
  pImage: {
    width: 30,
    marginRight: 10,
  },
});

export default ChatScreen;


