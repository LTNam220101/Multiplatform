import React, { useState } from 'react'
import { MaterialCommunityIcons } from '@expo/vector-icons'
import { StyleSheet, TouchableOpacity, View } from 'react-native'

const ActivityBar = () => {
    const [active, setActive] = useState(0);
  return (
    <View style={styles.container}>
        <TouchableOpacity style={styles.button} onPress={() => setActive(0)}>
            <MaterialCommunityIcons
                name={active == 0 ? 'home' : 'home-outline'}
                size={30}
                color={active == 0 ? '#3a86e9' : '#A6A8AB'}
            />
            {
                active == 0 &&
                <View style={styles.underline} />
            }
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={() => setActive(1)}>
            <MaterialCommunityIcons
                name={active == 1 ? 'account-circle' : 'account-circle-outline'}
                size={30}
                color={active == 1 ? '#3a86e9' : '#A6A8AB'}
            />
            {
                active == 1 &&
                <View style={styles.underline} />
            }
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={() => setActive(2)}>
            <MaterialCommunityIcons
                name={active == 2 ? 'bell' : 'bell-outline'}
                size={30}
                color={active == 2 ? '#3a86e9' : '#A6A8AB'}
            />
            {
                active == 2 &&
                <View style={styles.underline} />
            }
        </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        borderBottomWidth: 1,
        borderBottomColor: '#D9D9D9',
        paddingTop: 5,
        paddingBottom: 5,
    },
    button: {
        flex: 1,
        height: '100%',
        textAlign: 'center',
        alignItems: 'center',
        justifyContent: 'center',
        position: 'relative',
    },
    underline: {
        margin: 'auto',
        width: '50%',
        height: 2,
        bottom: -6,
        backgroundColor: '#3a86e9',
        position: 'absolute',
    },
})

export default ActivityBar