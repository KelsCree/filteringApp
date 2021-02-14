import React, { useState, useEffect } from 'react';
import { SafeAreaView, ScrollView, StyleSheet, Text, View } from 'react-native';
import ViewPlayers from './ViewPlayers'
import SearchBar from './SearchBar'

const HomeScreen = () => {

  const baseURL = 'https://dii-test.s3.amazonaws.com/players.json'
  const [playerList, setPlayerList] = useState([])
  const [displayedPlayers, setDisplayedPlayers] = useState([])

  useEffect(() => {
    fetch(baseURL)
        .then(result => result.json())
        .then(data => setInitialPlayerLists(data))
    }, [])

    const setInitialPlayerLists = (data) => {
      setPlayerList(data)
      setDisplayedPlayers(data)
    }

  return (
    <SafeAreaView style={styles.container}>
      <SearchBar
        playerList={playerList}
        displayedPlayers={displayedPlayers}
        setDisplayedPlayers={setDisplayedPlayers}
      />
      <ViewPlayers
        displayedPlayers={displayedPlayers}
      />
    </SafeAreaView>
  )
}



export default HomeScreen

const styles = StyleSheet.create({
  container: {
    flex: 1
    // backgroundColor: '#FFFFFF',
    // alignItems: 'center',
    // justifyContent: 'center',
    // padding: 10
  },

})