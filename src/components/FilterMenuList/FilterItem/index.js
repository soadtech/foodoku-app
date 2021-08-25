import React from 'react'
import { View, Text } from 'react-native'
import { styles } from './styles'

export default function FilterItem ({ item }) {
    return (
        <View style={[styles.item, { marginLeft: item.id == '1' ? 0 : 10 }]}>
            <Text>{item.name}</Text>
        </View>
    )
}
