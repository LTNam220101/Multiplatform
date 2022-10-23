import React from 'react'
import { MaterialCommunityIcons } from '@expo/vector-icons'
import { Image, StyleSheet, Text, TouchableHighlight, TouchableOpacity, View } from 'react-native'

const NotiItem = ({ avatar, name, read, time }) => {
  return (
    <TouchableHighlight>
        <View style={[styles.wrapper, read && styles.read]}>
            <Image source={avatar} style={styles.img}/>
            <View style={styles.content}>
                <Text
                    numberOfLines={3}
                >
                    <Text style={styles.name}>
                        {name}{' '}
                    </Text>
                    đã đăng một liên kếtasdasdjkahskjdahsdkjdahskjfahwsdrfikuewyrtefiugdjkvhbđã đăng một liên kếtasdasdjkahskjdahsdkjdahskjfahwsdrfikuewyrtefiugdjkvhb
                </Text>
                <Text style={styles.time}>
                    {time}
                </Text>
            </View>
            <TouchableOpacity style={styles.dots}>
                <MaterialCommunityIcons 
                    name='dots-horizontal'
                    size={25} 
                />
            </TouchableOpacity>
        </View>
    </TouchableHighlight>
  )
}

const styles = StyleSheet.create({
    wrapper: {
        flexDirection: 'row',
        backgroundColor: '#D4E7FF',
        padding: 10,
    },
    read: {
        backgroundColor: '#ffffff',
    },
    img: {
        width: 50,
        height: 50,
        borderRadius: 25,
    },
    content: {
        marginRight: 8,
        marginLeft: 8,
        flex: 1,
    },
    name: {
        fontWeight: 'bold'
    },
    time: {
        color: '#606770'
    }
})

export default NotiItem