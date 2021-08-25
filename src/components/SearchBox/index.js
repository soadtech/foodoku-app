import React from 'react'
import { View, Text } from 'react-native'
import CustomInput from '../CustomInput'
import { styles } from './styles'

export default function SearchBox () {
    return (
        <View style={styles.container}>
            <CustomInput placeholder='Buscar restaurante' />
        </View>
    )
}
