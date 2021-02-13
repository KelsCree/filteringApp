import React, { useState, useEffect } from 'react';
import { SafeAreaView, ScrollView, StyleSheet, Text, View } from 'react-native';
import ViewPlayers from './ViewPlayers'
import SearchBar from './SearchBar'

const HomeScreen = () => {

  const baseURL = 'https://dii-test.s3.amazonaws.com/players.json'
  const [playerList, setPlayerList] = useState([])

  useEffect(() => {
    fetch(baseURL)
        .then(result => result.json())
        .then(data => setPlayerList(data))
    }, [])

  return (
    <SafeAreaView>
      <SearchBar/>
      <ViewPlayers
        players={playerList}
      />
    </SafeAreaView>
  )
}



export default HomeScreen