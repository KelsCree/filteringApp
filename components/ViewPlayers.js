import React from 'react';
import { SafeAreaView, ScrollView, StyleSheet, Text, View } from 'react-native';
import { FlatList, TouchableOpacity } from 'react-native-gesture-handler';

const ViewPlayers = ({ players }) => {

  console.log(players)

  const Item = ({ item }) => (
    <TouchableOpacity
      key={item.id}
      onPress={() => selectPlayer(item)}
    >
      <Text>{item.name}</Text>
      <Text>{item.gender}</Text>
      <Text>{item.age}</Text>
      <Text>{item.state}</Text>
      <Text>{item.satus}</Text>
    </TouchableOpacity>
  )

  const renderItem = ({ item }) => {
    return (
      <Item key={item.id} item={item}/>
    )
  }

  const selectPlayer = () => {

  }


  return (
    <SafeAreaView>
      <Text>Players</Text>
        <FlatList
          title={"Players"}
          data={players}
          renderItem={renderItem}
          keyExtractor={(item) => {
            return item.id;
          }}
        />

    </SafeAreaView>
  )
}



export default ViewPlayers