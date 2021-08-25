import React from 'react'
import { View, Text, StatusBar } from 'react-native'
import Header from '../../components/Header'
import colors from '../../utils/colors'
import { styles } from '../styles'

export default function Home () {
    return (
        <View style={styles.container}>
            <StatusBar backgroundColor={colors.white} barStyle='dark-content' />
            <Header />
        </View>
    )
}
