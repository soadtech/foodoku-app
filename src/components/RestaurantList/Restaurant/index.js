import React from 'react'
import { View, Text, Image } from 'react-native'
import LinearGradient from 'react-native-linear-gradient';
import { styles } from './styles'

const CANT_RESTAURANT_FIRST_ROW = 2
const MARGIN = 14
const NO_MARGIN = 0
export default function Restaurant ({ restaurant }) {
    const marginTop = restaurant.id > CANT_RESTAURANT_FIRST_ROW ? MARGIN : NO_MARGIN;
    const uriImg = `https:${restaurant?.fields?.images[0]?.fields?.file?.url}`
    return (
        <View style={{ width: '46%', marginTop, marginHorizontal: '2%', position: 'relative' }}>
            <Image style={styles.image} resizeMode='cover' source={{ uri: uriImg }} />
            <Text style={styles.nameRestaurant}>{restaurant.fields.name}</Text>
            <LinearGradient colors={['rgba(255,255,255,0.1)', 'rgba(255,255,255,0.1)', 'rgba(0,0,0,1)']} style={styles.linearGradient}>
            </LinearGradient>

        </View>
    )
}
