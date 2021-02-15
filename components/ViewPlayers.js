import React from 'react';
import { SafeAreaView, ScrollView, StyleSheet, Text, View } from 'react-native';
import { FlatList, TouchableOpacity } from 'react-native-gesture-handler';

const ViewPlayers = ({ displayedPlayers }) => {


  const Item = ({ item }) => (
    <TouchableOpacity
      key={item.id}
      style={styles.item}
      onPress={() => selectPlayer(item)}
    >
      <Text style={styles.name}>{item.name}</Text>
      <Text style={styles.info}>Gender: {item.gender}</Text>
      <Text style={styles.info}>Age: {item.age}</Text>
      <Text style={styles.info}>State: {item.state}</Text>
      <Text style={styles.info}>Status: {item.status}</Text>
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
    <View style={styles.container}>
      <Text style={styles.heading}>Players</Text>
      <SafeAreaView style={styles.listContainer}>
          <FlatList
            style={styles.list}
            data={displayedPlayers}
            renderItem={renderItem}
            keyExtractor={(item) => {
              return item.id;
            }}
          />
      </SafeAreaView>
    </View>
  )
}

export default ViewPlayers

const styles = StyleSheet.create({
  container: {
    flex: 5,
    backgroundColor: '#FFFFFF',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20
  },
  item: {
    borderRadius: 8,
    backgroundColor: '#FFFFFF',
    padding: 15,
    margin: 5,
    alignItems: 'center',
    shadowOffset:{  width: 2,  height: 2,  },
    shadowColor: '#1D3557',
    shadowOpacity: .4
  },
  listContainer: {
    width: '80%',
    padding: 10,
    backgroundColor: '#FFFFFF'
  },
  heading: {
    fontSize: 25,
    fontWeight: 'bold',
    margin: 10,
    color: '#1D3557'
  },
  info: {
    fontSize: 14,
    color: '#1D3557'
  },
  name: {
    fontSize: 18,
    color: '#1D3557',
    fontWeight: 'bold'
  }
})