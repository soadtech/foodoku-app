import React from 'react'
import { View, Text, Image } from 'react-native'
import { styles } from './styles'

const CANT_RESTAURANT_FIRST_ROW = 2
const MARGIN = 14
const NO_MARGIN = 0
export default function Restaurant ({ restaurant }) {
    const marginTop = restaurant.id > CANT_RESTAURANT_FIRST_ROW ? MARGIN : NO_MARGIN
    return (
        <View style={{ width: '46%', marginTop, marginHorizontal: '2%', position: 'relative' }}>
            <Image style={styles.image} resizeMode='cover' source={{ uri: restaurant.image }} />
            <Text style={styles.nameRestaurant}>{restaurant.name}</Text>
        </View>
    )
}
