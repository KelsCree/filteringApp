import React, { useState } from 'react';
import { SafeAreaView, ScrollView, StyleSheet, Text, View, Selection } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import { faChevronRight, faChevronDown } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { states } from '../states'

const SearchBar = () => {

  const ages = [4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17]
  const [filtersVisible, setFiltersVisible] = useState(true)

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

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.heading}>Filter Players</Text>
      {filtersVisible
      ?<FontAwesomeIcon style={styles.icon} icon={ faChevronDown } size={23} color='#FFFFFF'/>
      :<FontAwesomeIcon style={styles.icon} icon={ faChevronRight } size={23} color='#FFFFFF'/>}
      {filtersVisible
      ?<View style={styles.pickerContainer}>
        <Picker  style={styles.picker}>
          <Picker.Item label="Male" value="male"/>
          <Picker.Item label="Female" value="female"/>
        </Picker>
        <Picker style={styles.picker}>
          <Picker.Item label="Active" value="active"/>
          <Picker.Item label="Inactive" value="inactive"/>
        </Picker>
        <Picker style={styles.picker}>
          {ageOption(ages)}
        </Picker>
        <Picker style={styles.picker}>
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