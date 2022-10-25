import React from 'react'
import { StyleSheet, Text, TouchableHighlight, TouchableOpacity, View } from 'react-native'
import { MaterialCommunityIcons } from '@expo/vector-icons'
import Avatar from '../Avatar'
import { COLOR } from './../../styles/colors';

const ToolBar = () => {
  return (
    <View style={styles.view}>
        <Avatar source={require('../../assets/avatar.jpg')} />
        <TouchableHighlight style={styles.input}>
            <Text>Ngày hôm nay của bạn thế nào?</Text>
        </TouchableHighlight>
        <TouchableOpacity style={styles.button}>
            <MaterialCommunityIcons 
                name='image-multiple'
                size={25}
                color={COLOR.green}
            />
        </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
    view: {
        width: '100%',
        height: 68,
        flexDirection: 'row',
        alignItems: 'center',
        paddingRight: 11,
        paddingLeft: 11,
        paddingTop: 8,
        paddingBottom: 8,
        backgroundColor: COLOR.white,
    },
    input: {
        flex: 1,
        height: 35,
        paddingLeft: 10,
        paddingRight: 10,
        marginLeft: 10,
        marginRight: 10,
        borderRadius: 20,
        borderWidth: 1,
        borderColor: COLOR.grayBorder,
        justifyContent: 'center',
    },
    button: {
        borderRadius: 21,
        backgroundColor: COLOR.grayBackground,
        justifyContent: 'center',
        alignItems: 'center',
    }
})

export default ToolBar