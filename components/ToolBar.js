import React from 'react'
import { StyleSheet, TextInput, TouchableOpacity, View } from 'react-native'
import { MaterialCommunityIcons } from '@expo/vector-icons'
import Avatar from './Avatar'

const ToolBar = () => {
  return (
    <View style={styles.view}>
        <Avatar source={require('../assets/avatar.jpg')} />
        <TextInput style={styles.input}
            placeholder="Ngày hôm nay của bạn thế nào"
        />
        <TouchableOpacity style={styles.button}>
            <MaterialCommunityIcons 
                name='image-multiple'
                size={20}
                color='#7CB342'
            />
        </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
    view: {
        width: '100%',
        height: 58,
        flexDirection: 'row',
        alignItems: 'center',
        paddingRight: 11,
        paddingLeft: 11,
        paddingTop: 5
    },
    input: {
        flex: 1,
        height: 30,
        paddingLeft: 10,
        paddingRight: 10,
        marginLeft: 10,
        marginRight: 10,
        borderRadius: 20,
        borderWidth: 1,
        borderColor: '#F2F3F5',
    },
    button: {
        borderRadius: 21,
        backgroundColor: '#eeeeee',
        justifyContent: 'center',
        alignItems: 'center',
    }
})

export default ToolBar