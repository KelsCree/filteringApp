import React from 'react';
import { SafeAreaView, ScrollView, StyleSheet, Text, View } from 'react-native';

const SearchBar = () => {


  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.heading}>Filter Players</Text>
      
    </SafeAreaView>
  )
}

export default SearchBar

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#1D3557',
    alignItems: 'center',
    padding: 10,
    height: '20%'
  },
  heading: {
    fontSize: 25,
    fontWeight: 'bold',
    margin: 10,
    color: '#FFFFFF'
  },
})