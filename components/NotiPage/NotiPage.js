import React from 'react'
import { ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { Feather } from '@expo/vector-icons'
import NotiItem from './NotiItem';
import { COLOR } from '../../styles/colors';

const NotiPage = () => {
  return (
    <ScrollView style={{flex: 1}}>
        <View style={styles.header}>
            <Text style={styles.text}>
                Thông báo
            </Text>
            <TouchableOpacity style={styles.button}>
                <Feather 
                    name='search'
                    size={20}
                    color={COLOR.black}
                />
            </TouchableOpacity>
        </View>
        <NotiItem 
            avatar={require('../../assets/avatar.jpg')}
            name='Lương Thái Nam'
            time='25p'
        />
        <NotiItem 
            avatar={require('../../assets/avatar.jpg')}
            name='Lương Thái Nam'
            read
            time='25p'
        />
        <NotiItem 
            avatar={require('../../assets/avatar.jpg')}
            name='Lương Thái Nam'
            read
            time='25p'
        />
    </ScrollView>
  )
}

const styles = StyleSheet.create({
    header: {
        flexDirection: 'row',
        paddingLeft: 11,
        paddingRight: 11,
        marginBottom: 10,
        marginTop: 7
    },
    text: {
        flex: 1,
        fontWeight: 'bold',
        fontSize: 25,
    },
    button: {
        width: 30,
        height: 30,
        borderRadius: 21,
        backgroundColor: COLOR.grayBackground,
        justifyContent: 'center',
        alignItems: 'center',
        marginLeft: 16
    }
})

export default NotiPage