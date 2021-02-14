import React, { useState } from 'react';
import { SafeAreaView, ScrollView, StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import { faChevronRight, faChevronDown } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { states } from '../states'

const SearchBar = ({ displayedPlayers, setDisplayedPlayers, playerList }) => {

  const ages = [4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17]
  const [filtersVisible, setFiltersVisible] = useState(true)
  // const [genderFilter, setGenderFilter] = useState({filter: false, gender: ''})
  // const [statusFilter, setStatusFilter] = useState({filter: false, status: ''})
  // const [stateFilter, setStateFilter] = useState({filter: false, state: ''})
  // const [ageFilter, setAgeFilter] = useState({filter: false, age: ''})
  const [filters, setFilters] = useState({
    gender: "",
    age: "",
    status: "",
    state: ""
  })

  const stateOption = (states) => {
    return states.map((state, i) => {
      return <Picker.Item
                key={i}
                label={state.abbreviation}
                value={state.abbreviation}
            />
    })
  }

  const ageOption = (ages) => {
    return ages.map((age, i) => {
      return <Picker.Item
                key={i}
                label={age}
                value={age}
            />
    })
  }
  console.log(filters)

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
    let filterKeys = []
    for (var key in filters) {
      if (filters[key] !== "") {
        filterKeys.push(key)
      }
    }
    console.log(filterKeys)
    if (filterKeys.length < 1) setDisplayedPlayers(playerList)
    let filteredPlayers = filterKeys.forEach(filterKey => {
        return playerList.filter(player => player.filterKey == filters.filterKey)
    })
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
          // selectedValue={filters.gender}
          onValueChange={(itemValue, itemIndex) =>
            handleGenderFilter({ itemValue })}>
          <Picker.Item label="" value=""/>
          <Picker.Item label="Male" value="male"/>
          <Picker.Item label="Female" value="female"/>
        </Picker>
        <Picker
          style={styles.picker}
          // selectedValue={filters.status}
          onValueChange={(itemValue, itemIndex) =>
            handleStatusFilter({ itemValue })}>
          <Picker.Item label="" value=""/>
          <Picker.Item label="Active" value="active"/>
          <Picker.Item label="Inactive" value="inactive"/>
        </Picker>
        <Picker
          style={styles.picker}
          // selectedValue={filters.age}
          onValueChange={(itemValue, itemIndex) =>
            handleAgeFilter({ itemValue })}>
          <Picker.Item label="" value=""/>
          {ageOption(ages)}

        </Picker>
        <Picker
          style={styles.picker}
          // selectedValue={filters.state}
          onValueChange={(itemValue, itemIndex) =>
            handleStateFilter({ itemValue })}>
          {stateOption(states)}
        </Picker>
      </View>
      : null}
    </SafeAreaView>
  )
}

export default SearchBar

const styles = StyleSheet.create({
  container: {
    flex: 3,
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
    // height: 80,
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
    flex: 1
    
  }
})