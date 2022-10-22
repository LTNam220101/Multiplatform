import { MaterialCommunityIcons } from '@expo/vector-icons'
import React, { useState } from 'react'
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'

const News = ({ avatar, name, time, content, images, video, likes, liked, comments }) => {
  
    const [like, setLike] = useState(liked)
    const onLikeNews = () => {
        setLike(pre => !pre)
    }

    return (
    <View style={styles.container}>
        <View style={styles.top}>
            <Image source={avatar} style={styles.img}/>
            <View style={styles.text}>
                <Text style={styles.name}>{name}</Text>
                <Text style={styles.time}>{time}</Text>
            </View>
            <TouchableOpacity style={styles.dots}>
                <MaterialCommunityIcons 
                    name='dots-horizontal'
                    size={25} 
                />
            </TouchableOpacity>
            <TouchableOpacity style={styles.close}>
                <MaterialCommunityIcons 
                    name='close'
                    size={25} 
                />
            </TouchableOpacity>
        </View>
        <Text style={styles.content}>
            {content}
        </Text>
        <View style={styles.bottom}>
            <TouchableOpacity style={styles.button} onPress={onLikeNews}>
                <MaterialCommunityIcons
                    name={like ? 'thumb-up' : 'thumb-up-outline'}
                    size={15}
                    color={like ? '#3a86e9' : '#9F9F9F'}
                    style={styles.icon}
                />
                <Text style={like ? styles.button_like : null}>Thích</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button}>
                <MaterialCommunityIcons
                    name={'comment-outline'}
                    size={15}
                    color={'#9F9F9F'}
                    style={styles.icon}
                />
                <Text>Bình Luận</Text>
            </TouchableOpacity>
        </View>
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
        width: '100%',
        marginTop: 10,
        backgroundColor: 'white',
        paddingLeft: 11,
        paddingRight: 11,
    },
    top: {
        flexDirection: 'row',
        alignItems: 'flex-start',
        paddingTop: 11,
    },
    img: {
        width: 40,
        height: 40,
        borderRadius: 20,
        marginRight: 7,
    },
    text: {
        flex: 1,
    },
    name: {
        fontWeight: 'bold',
    },
    time: {
        fontWeight: 'light',
        fontSize: 12,
        tintColor: '#606770'
    },
    dots: {
        alignItems: 'flex-start',
        textAlign: 'start',
        marginRight: 20
    },
    close: {
        alignItems: 'flex-start',
        marginRight: -5
    },
    content: {
        marginTop: 10,
        marginBottom: 5
    },
    bottom: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-around',
        borderTopWidth: 1,
        borderTopColor: '#F2F3F5',
    },
    button: {
        flex: 1,
        alignItems: 'center',
        flexDirection: 'row',
        textAlign: 'center',
        alignItems: 'center',
        justifyContent: 'center',
        paddingTop: 10,
        paddingBottom: 10
    },
    icon: {
        marginRight: 5
    },
    button_like: {
        color: '#3a86e9'
    }
})

export default News