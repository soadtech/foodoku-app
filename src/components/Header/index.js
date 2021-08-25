import React from 'react'
import { View, Text } from 'react-native'
import Logo from '../Logo'
import { styles } from './styles'

export default function Header () {
    return (
        <View style={styles.container}>
            <Logo />
            <Text>Cart</Text>
        </View>
    )
}
