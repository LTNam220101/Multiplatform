import React from 'react'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { Feather, MaterialCommunityIcons } from '@expo/vector-icons'


const AppBar = () => {
  return (
    <View style={styles.container}>
        <Text style={styles.text}>
            facebook
        </Text>
        <View style={styles.buttons}>
            <TouchableOpacity style={styles.button}>
                <Feather 
                    name='search'
                    size={29}
                    color='black'
                />
            </TouchableOpacity>
            <TouchableOpacity style={styles.button}>
                <MaterialCommunityIcons 
                    name='facebook-messenger'
                    size={29} 
                />
            </TouchableOpacity>
        </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: 58,
    paddingLeft: 11,
    paddingRight: 11,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent:'space-between',
  },
  text: {
    color: '#3a86e9',
    fontSize: 32,
    fontWeight: 'bold',
    letterSpacing: -0.3
  },
  buttons: {
    flexDirection: 'row'
  },
  button: {
    width: 42,
    height: 42,
    borderRadius: 21,
    backgroundColor: '#eeeeee',
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 16
  }
})

export default AppBar