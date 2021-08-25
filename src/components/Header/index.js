import React from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
import Logo from '../Logo'
import { styles } from './styles'
import * as Icons from '../../components/icons'

export default function Header () {
    return (
        <View style={styles.container}>
            <Logo />
            <TouchableOpacity style={styles.btnCart}>
                <Icons.SvgCart />
            </TouchableOpacity>
        </View>
    )
}
