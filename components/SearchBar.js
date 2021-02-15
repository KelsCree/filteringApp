import React, { useState } from 'react';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { SafeAreaView, StyleSheet, Text, View } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import { faChevronRight, faChevronDown } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { states } from '../states'

const SearchBar = ({ setDisplayedPlayers, playerList }) => {

  const [filtersVisible, setFiltersVisible] = useState(true)
  const [filters, setFilters] = useState({
    gender: "",
    age: "",
    status: "",
    state: ""
  })

  const handleGenderFilter = ({ itemValue }) => {
    let newFilters = filters
    newFilters.gender = itemValue
    setFilters(newFilters)
    filterPlayers()
  }

  const handleStatusFilter = ({ itemValue }) => {
    let newFilters = filters
    newFilters.status = itemValue
    setFilters(newFilters)
    filterPlayers()
  }

  const handleAgeFilter = ({ itemValue }) => {
    let newFilters = filters
    newFilters.age = itemValue
    setFilters(newFilters)
    filterPlayers()
  }

  const handleStateFilter = ({ itemValue }) => {
    let newFilters = filters
    newFilters.state = itemValue
    setFilters(newFilters)
    filterPlayers()
  }

  const filterPlayers = () => {

    let filteredPlayers = playerList

    if (filters.gender) filteredPlayers = filteredPlayers.filter(player => player.gender == filters.gender)
    if (filters.status) filteredPlayers = filteredPlayers.filter(player => player.status == filters.status)
    if (filters.age) filteredPlayers = filteredPlayers.filter(player => player.age == filters.age)
    if (filters.state) filteredPlayers = filteredPlayers.filter(player => player.state == filters.state)

    setDisplayedPlayers(filteredPlayers)
  }


  return (
    <SafeAreaView style={styles.container}>
      <TouchableOpacity style={{flexDirection: 'row', alignItems: 'center'}}onPress={() => setFiltersVisible(!filtersVisible)}>
        <Text style={styles.heading}>Filter Players</Text>
        {filtersVisible
        ?
        <FontAwesomeIcon style={styles.icon} icon={ faChevronDown } size={23} color='#FFFFFF'/>
        :<FontAwesomeIcon style={styles.icon} icon={ faChevronRight } size={23} color='#FFFFFF'/>}
      </TouchableOpacity>
      {filtersVisible
      ?<View style={styles.pickerContainer}>
        <Picker
          style={styles.picker}
          selectedValue={filters.gender}
          onValueChange={(itemValue) =>
            handleGenderFilter({ itemValue })}>
          <Picker.Item label="" value=""/>
          <Picker.Item label="Male" value="male"/>
          <Picker.Item label="Female" value="female"/>
        </Picker>
        <Picker
          style={styles.picker}
          selectedValue={filters.status}
          onValueChange={(itemValue) =>
            handleStatusFilter({ itemValue })}>
          <Picker.Item label="" value=""/>
          <Picker.Item label="Active" value="active"/>
          <Picker.Item label="Inactive" value="inactive"/>
        </Picker>
        <Picker
          style={styles.picker}
          selectedValue={filters.age}
          onValueChange={(itemValue) =>
            handleAgeFilter({ itemValue })}>
          <Picker.Item label="" value=""/>
          <Picker.Item label="4" value="4"/>
          <Picker.Item label="5" value="5"/>
          <Picker.Item label="6" value="6"/>
          <Picker.Item label="7" value="7"/>
          <Picker.Item label="8" value="8"/>
          <Picker.Item label="9" value="9"/>
          <Picker.Item label="10" value="10"/>
          <Picker.Item label="11" value="11"/>
          <Picker.Item label="12" value="12"/>
          <Picker.Item label="13" value="13"/>
          <Picker.Item label="14" value="14"/>
          <Picker.Item label="15" value="15"/>
          <Picker.Item label="16" value="16"/>
          <Picker.Item label="17" value="17"/>
          </Picker>
        <Picker
          style={styles.picker}
          selectedValue={filters.state}
          onValueChange={(itemValue) =>
            handleStateFilter({ itemValue })}>
            {states.map((state, i) => {
              return <Picker.Item
                key={i}
                label={state.abbreviation}
                value={state.abbreviation}
            />})}
        </Picker>
      </View>
      : null}
    </SafeAreaView>
  )
}

export default SearchBar

const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    backgroundColor: '#1D3557',
    alignItems: 'center',
    padding: 10
  },
  heading: {
    fontSize: 25,
    fontWeight: 'bold',
    margin: 10,
    color: '#FFFFFF'
  },
  picker: {
    flex: 1,
    height: 150,
    width: 80,
    margin: 5,
    backgroundColor: '#FFFFFF',
    color: '#1D3557',
    borderRadius: 8
  },
  pickerContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    margin: 10,
    
  }
})