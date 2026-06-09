import React from 'react';
import { ScrollView, View, Text, StyleSheet, TouchableOpacity, TextInput } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

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

      <View style={styles.profileRow}>
        <View style={styles.avatarContainer}>
          <View style={styles.avatarCircle}>
            <Ionicons name="person" size={32} color="#fff" />
          </View>
        </View>

        <View style={styles.profileText}>
          <Text style={styles.userName}>User Name</Text>
          <View style={styles.pinterestBadge}>
            <Ionicons name="logo-pinterest" size={18} color="#E60023" />
            <Text style={styles.badgeText}>isadoragregatti</Text>
          </View>
        </View>

        <TouchableOpacity style={styles.lockButton}>
          <Ionicons name="lock-closed" size={24} color="#fff" />
        </TouchableOpacity>
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
  profileRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 16,
    paddingVertical: 12,
  },
  avatarContainer: {
    marginRight: 12,
  },
  avatarCircle: {
    width: 80,
    height: 80,
    borderRadius: 40,
    backgroundColor: '#2f2f2f',
    alignItems: 'center',
    justifyContent: 'center',
  },
  profileText: {
    flex: 1,
    justifyContent: 'center',
  },
  userName: {
    fontSize: 26,
    color: '#fff',
    fontFamily: 'SansitaOne',
    fontWeight: '700',
    marginBottom: 4,
  },
  pinterestBadge: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  badgeText: {
    color: '#fff',
    marginLeft: 8,
    fontSize: 14,
    fontFamily: 'SansitaOne',
  },
  lockButton: {
    width: 48,
    height: 48,
    borderRadius: 16,
    backgroundColor: '#1a1a1a',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default ProfileScreen;
