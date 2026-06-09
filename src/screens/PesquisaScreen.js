import React from 'react';
import { ScrollView, View, Text, FlatList, Image, StyleSheet, TouchableOpacity, TextInput, Dimensions } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import Entypo from '@expo/vector-icons/Entypo';


const PesquisaScreen = () => {
  const { width: SCREEN_WIDTH } = Dimensions.get('window');
  const VISIBLE_CARDS = 4;
  const HORIZONTAL_PADDING = 32; 
  const CARD_WIDTH = Math.floor((SCREEN_WIDTH - HORIZONTAL_PADDING) / VISIBLE_CARDS);
  const CARD_HEIGHT = Math.round(CARD_WIDTH * 1.45);

  return (
    <ScrollView>
    <View style={styles.container}>
      
      <View style={styles.headerImage}>
        <Image 
          source={require('../../assets/fundoPesquisa.png')}
          style={styles.img}
        />

        <View style={styles.searchBarOverlay} pointerEvents="box-none">
          <View style={styles.searchBar}>
            <Ionicons name="search" size={20} color="#999" />
            <TextInput 
              style={styles.searchInput}
              placeholder="Pesquisar"
              placeholderTextColor="#999"
            />
          </View>
        </View>

        <View style={styles.textOverlay}>
          <Text style={styles.subtitleText}>Ideias para sair da rotina</Text>
          <Text style={styles.mainText}>Dates criativos</Text>
        </View>

        <View style={styles.pinterestBadge}>
          <Ionicons name="logo-pinterest" size={20} color="#E60023" />
          <Text style={styles.badgeText}>Pinterest Brasil</Text>
        </View>
      </View>

      <View style={styles.threePoints}>
      <Entypo name="dots-three-horizontal" size={24} color="#999" />
    
      </View>

      <View style={styles.allC}>
        <Text style={styles.title}>
          Ideias para você
        </Text>
        <Text style={styles.subtitle}>
          Books
        </Text>
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        style={styles.carousel}
        contentContainerStyle={styles.carouselContent}
      >
        <View style={[styles.card, { width: CARD_WIDTH, height: CARD_HEIGHT }]}> 
          <Image source={require('../../assets/booksIdeias1.png')} style={styles.cardImage} />
        </View>
        <View style={[styles.card, { width: CARD_WIDTH, height: CARD_HEIGHT }]}> 
          <Image source={require('../../assets/booksIdeias2.png')} style={styles.cardImage} />
        </View>
        <View style={[styles.card, { width: CARD_WIDTH, height: CARD_HEIGHT }]}> 
          <Image source={require('../../assets/booksIdeias3.png')} style={styles.cardImage} />
        </View>
        <View style={[styles.card, { width: CARD_WIDTH, height: CARD_HEIGHT }]}> 
          <Image source={require('../../assets/booksIdeias4.png')} style={styles.cardImage} />
        </View>
      </ScrollView>

      </View>


      <View style={styles.allC}>
        <Text style={styles.title}>
          Ideias para você
        </Text>
        <Text style={styles.subtitle}>
          Books
        </Text>
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        style={styles.carousel}
        contentContainerStyle={styles.carouselContent}
      >
        <View style={[styles.card, { width: CARD_WIDTH, height: CARD_HEIGHT }]}> 
          <Image source={require('../../assets/IdeiasDylan1.png')} style={styles.cardImage} />
        </View>
        <View style={[styles.card, { width: CARD_WIDTH, height: CARD_HEIGHT }]}> 
          <Image source={require('../../assets/IdeiasDylan2.png')} style={styles.cardImage} />
        </View>
        <View style={[styles.card, { width: CARD_WIDTH, height: CARD_HEIGHT }]}> 
          <Image source={require('../../assets/IdeiasDylan3.png')} style={styles.cardImage} />
        </View>
        <View style={[styles.card, { width: CARD_WIDTH, height: CARD_HEIGHT }]}> 
          <Image source={require('../../assets/IdeiasDylan4.png')} style={styles.cardImage} />
        </View>
      </ScrollView>

      </View>

      <View style={styles.allC}>
        <Text style={styles.title}>
          Ideias para você
        </Text>
        <Text style={styles.subtitle}>
          Books
        </Text>
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        style={styles.carousel}
        contentContainerStyle={styles.carouselContent}
      >
        <View style={[styles.card, { width: CARD_WIDTH, height: CARD_HEIGHT }]}> 
          <Image source={require('../../assets/ideiasPaint1.png')} style={styles.cardImage} />
        </View>
        <View style={[styles.card, { width: CARD_WIDTH, height: CARD_HEIGHT }]}> 
          <Image source={require('../../assets/ideiasPaint2.png')} style={styles.cardImage} />
        </View>
        <View style={[styles.card, { width: CARD_WIDTH, height: CARD_HEIGHT }]}> 
          <Image source={require('../../assets/ideiasPaint3.png')} style={styles.cardImage} />
        </View>
        <View style={[styles.card, { width: CARD_WIDTH, height: CARD_HEIGHT }]}> 
          <Image source={require('../../assets/ideiasPaint4.png')} style={styles.cardImage} />
        </View>
      </ScrollView>

      </View>

    </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
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
  headerImage: {
    position: 'relative',
    width: '100%',
    height: 350,
    overflow: 'hidden',
  },
  img: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
  },
  searchBarOverlay: {
    position: 'absolute',
    top: 15,
    left: 15,
    right: 15,
    zIndex: 5,
    alignItems: 'center',
  },
  textOverlay: {
    display:'flex',
    alignItems: 'center',
    position: 'absolute',
    bottom: 40,
    left: 15,
    right: 15,
  },
  subtitleText: {
    fontSize: 14,
    color: '#fff',
    fontFamily: 'SansitaOne',
    marginBottom: 5,
  },
  mainText: {
    fontSize: 28,
    color: '#fff',
    fontFamily: 'SansitaOne',
    fontWeight: 'bold',
  },
  pinterestBadge: {
    position: 'absolute',
    bottom: 10,
    left: 0,
    right: 0,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  badgeText: {
    color: '#fff',
    fontSize: 12,
    marginLeft: 8,
    fontFamily: 'SansitaOne',
    textAlign: 'center',
  },
  text: {
    fontSize: 18,
    color: '#333333',
    fontFamily: 'SansitaOne',
  },
  threePoints:{
    display:'flex',
    alignItems: 'center',
  },
  allC: {
    width: '100%',
    alignItems: 'flex-start',
    paddingBottom: 16,
    paddingHorizontal: 16,
  },
  carrossel: {
    width: '100%',
    alignItems: 'center',
    marginTop: 12,
  },
  carouselContent: {
    paddingHorizontal: 0,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  card: {
    borderRadius: 12,
    overflow: 'hidden',
    marginRight: 0,
    backgroundColor: '#eee',
  },
  cardImage: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
  },
  title:{
    fontSize: 15,
    color: '#000',
    fontFamily: 'Sansita',
  },
  subtitle:{
    fontSize: 18,
    color: '#000',
    fontFamily: 'SansitaOne',
  },

});

export default PesquisaScreen;
